# lsp_client.py
import json, subprocess, threading, queue, pathlib, re, os
from typing import Dict, List, Tuple

# --- tiny identifier scanner (python-focused) ---
IDENT = re.compile(r"[A-Za-z_][A-Za-z0-9_]*")
PY_KEYWORDS = {
    "False","None","True","and","as","assert","async","await","break","class","continue",
    "def","del","elif","else","except","finally","for","from","global","if","import",
    "in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield",
}

def collect_identifiers(text: str, start_line: int, start_col: int, end_line: int, end_col: int,
                        max_tokens: int = 12) -> List[Tuple[str, int, int]]:
    lines = text.splitlines(keepends=True)
    out: List[Tuple[str,int,int]] = []
    seen = set()
    for ln in range(start_line, min(end_line + 1, len(lines))):
        line = lines[ln]
        c_start = start_col if ln == start_line else 0
        c_end   = end_col if ln == end_line else len(line)
        if c_start >= len(line):
            continue
        for m in IDENT.finditer(line, c_start, c_end):
            name = m.group(0)
            if name in PY_KEYWORDS or name in seen:
                continue
            seen.add(name)
            out.append((name, ln, m.start()))
            if len(out) >= max_tokens:
                return out
    return out

# --- UTF-16 helper (LSP uses UTF-16 code units) ---
def _utf16_len(s: str) -> int:
    return len(s.encode("utf-16-le")) // 2

def to_lsp_pos(text: str, line: int, col: int) -> Dict:
    lines = text.splitlines(keepends=True)
    before = lines[line][:col]
    return {"line": line, "character": _utf16_len(before)}

# --- binary stdio LSP client ---
class LSPClient:
    """
    Minimal, binary-stdio LSP client:
      - initialize / initialized
      - didOpen
      - definition
      - references
      - shutdown / exit
    """
    def __init__(self, cmd: List[str], root: str):
        # IMPORTANT: binary mode (no text=True), unbuffered
        self.proc = subprocess.Popen(
            cmd,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,   # keep for debugging if needed
            bufsize=0
        )
        self._id = 0
        self._q: "queue.Queue[dict]" = queue.Queue()
        self._reader = threading.Thread(target=self._read_loop, daemon=True)
        self._reader.start()
        self.root_uri = pathlib.Path(root).resolve().as_uri()
        self._initialize()

    # Parse a single LSP message from stdout (binary):
    #   headers (ASCII lines) ending with \r\n\r\n, then JSON body (UTF-8) of length Content-Length
    def _read_loop(self):
        r = self.proc.stdout  # type: ignore
        while True:
            # --- read headers until CRLFCRLF ---
            headers = b""
            while True:
                line = r.readline()
                if line == b"":  # EOF
                    return
                headers += line
                if headers.endswith(b"\r\n\r\n"):
                    break
            # --- parse Content-Length ---
            m = re.search(br"Content-Length:\s*(\d+)", headers, re.IGNORECASE)
            if not m:
                continue
            length = int(m.group(1))
            # --- read body ---
            body = r.read(length)
            if not body:
                return
            try:
                msg = json.loads(body.decode("utf-8"))
                self._q.put(msg)
            except Exception:
                # ignore malformed packets
                pass

    def _send(self, payload: dict):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        header = f"Content-Length: {len(data)}\r\n\r\n".encode("ascii")
        w = self.proc.stdin  # type: ignore
        w.write(header + data)
        w.flush()

    def request(self, method: str, params: dict):
        self._id += 1
        rid = self._id
        self._send({"jsonrpc": "2.0", "id": rid, "method": method, "params": params})
        # wait for matching response id
        while True:
            msg = self._q.get()
            if msg.get("id") == rid:
                return msg.get("result")

    def notify(self, method: str, params: dict):
        self._send({"jsonrpc": "2.0", "method": method, "params": params})

    def _initialize(self):
        self.request("initialize", {
            "processId": None,
            "rootUri": self.root_uri,
            "capabilities": {"textDocument": {"definition": {}, "references": {}}}
        })
        self.notify("initialized", {})

    def did_open(self, uri: str, languageId: str, text: str):
        self.notify("textDocument/didOpen", {
            "textDocument": {"uri": uri, "languageId": languageId, "version": 1, "text": text}
        })

    def definition(self, uri: str, pos: dict):
        return self.request("textDocument/definition", {
            "textDocument": {"uri": uri},
            "position": pos
        })

    def references(self, uri: str, pos: dict, include_decl: bool = False):
        return self.request("textDocument/references", {
            "textDocument": {"uri": uri},
            "position": pos,
            "context": {"includeDeclaration": include_decl}
        })

    def shutdown(self):
        try:
            self.request("shutdown", {})
        except Exception:
            pass
        try:
            self.notify("exit", {})
        except Exception:
            pass
        try:
            self.proc.terminate()
        except Exception:
            pass

# --- build edges for one chunk ---
def edges_for_chunk(client: LSPClient, uri: str, text: str, doc, max_tokens: int = 10):
    s = int(doc.metadata["start_line"])
    e = int(doc.metadata["end_line"])
    idents = collect_identifiers(text, s, 0, e, 10_000)
    idents = idents[:max_tokens] if max_tokens else idents

    chunk_id = f"chunk:{uri}#{s}-{e}"
    defs_all: List[dict] = []
    refs_all: List[dict] = []
    edges: List[dict] = []

    def norm_defs(d):
        if not d:
            return []
        return d if isinstance(d, list) else [d]

    for (name, ln, col) in idents:
        pos = to_lsp_pos(text, ln, col)
        d = norm_defs(client.definition(uri, pos))
        r = client.references(uri, pos, include_decl=False) or []

        for def_loc in d:
            edges.append({"type": "references", "from": chunk_id, "to": def_loc, "via": name})
        if d:
            first_def = d[0]
            for ref_loc in r:
                edges.append({"type": "co_ref", "from": ref_loc, "to": first_def, "via": name})

        defs_all.extend(d)
        refs_all.extend(r)

    return defs_all, refs_all, edges
