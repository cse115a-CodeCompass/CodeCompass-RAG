from __future__ import annotations
from dataclasses import dataclass, field
from enum import Enum
from pathlib import Path
from typing import Dict, List, Optional
from collections import defaultdict, deque
from typing import Set, Tuple

class NodeLabel(str, Enum):
    FOLDER = "folder"
    FILE = "file"
    CLASS = "class"
    FUNCTION = "function"
    METHOD = "method"

class EdgeType(str, Enum):
    CONTAINS = "CONTAINS"

@dataclass
class Node:
    id: str
    label: NodeLabel
    path: str               # absolute path or file:// URI (for files/defs)
    name: str               # folder name, filename, class name, function name, etc.
    start_line: Optional[int] = None   # 0-based
    end_line: Optional[int] = None     # 0-based
    extra: Dict[str, str] = field(default_factory=dict)

@dataclass
class Edge:
    src: str
    dst: str
    type: EdgeType

class Graph:
    def __init__(self):
        self.nodes: Dict[str, Node] = {}
        self.edges: List[Edge] = []

    def add_node(self, n: Node) -> Node:
        self.nodes.setdefault(n.id, n)
        return self.nodes[n.id]

    def add_contains(self, parent_id: str, child_id: str):
        self.edges.append(Edge(src=parent_id, dst=child_id, type=EdgeType.CONTAINS))
    
        # ---- adjacency + k-hop traversal ----
    def _build_adj(self) -> Tuple[Dict[str, Set[str]], Dict[str, Set[str]]]:
        fwd: Dict[str, Set[str]] = defaultdict(set)
        bwd: Dict[str, Set[str]] = defaultdict(set)
        for e in self.edges:
            fwd[e.src].add(e.dst)
            bwd[e.dst].add(e.src)
        return fwd, bwd

    def khop(
        self,
        seeds: List[str],
        hops: int = 1,
        allowed: Set[NodeLabel] | Set[str] | None = None,
    ) -> List[str]:
        """
        Return unique node ids within k hops (both directions).
        If `allowed` is provided, only keep neighbors whose label is in that set.
        `allowed` may contain NodeLabel values or their string values (e.g. "class").
        """
        fwd, bwd = self._build_adj()
        seen = set(seeds)
        q = deque(seeds)

        for _ in range(max(0, hops)):
            next_frontier = deque()
            while q:
                u = q.popleft()
                for v in fwd.get(u, set()) | bwd.get(u, set()):
                    if v in seen:
                        continue
                    if allowed is not None:
                        n = self.nodes.get(v)
                        if n is None:
                            continue
                        lab_enum = n.label
                        lab_str  = lab_enum.value  # "folder"/"file"/"class"/"function"/"method"
                        if (lab_enum not in allowed) and (lab_str not in allowed):
                            continue
                    seen.add(v)
                    next_frontier.append(v)
            q = next_frontier
            if not q:
                break

        return list(seen)

