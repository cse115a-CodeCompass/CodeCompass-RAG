"""
Mermaid diagram validation and repair utilities.

Fixes common LLM-generated Mermaid syntax issues like:
- Cross-subgraph node references
- Duplicate node definitions
- Invalid edge syntax
- Wrong arrow syntax for diagram type (-->> in flowcharts)
- Unbalanced subgraph/end
- Unbalanced sequence diagram activations
- Invalid/missing diagram type

Includes fallback system to remove un-renderable diagrams.
"""

import re
from typing import Optional, Tuple, List, Set, Dict


# Valid Mermaid diagram types
VALID_DIAGRAM_TYPES = [
    'flowchart', 'graph', 'sequencediagram', 'classdiagram',
    'statediagram', 'erdiagram', 'gantt', 'pie', 'mindmap',
    'journey', 'gitgraph', 'c4context', 'sankey', 'block', 'packet'
]


def extract_mermaid_block(markdown: str) -> Tuple[Optional[str], int, int]:
    """
    Extract mermaid code block from markdown.

    Returns:
        Tuple of (mermaid_code, start_pos, end_pos) or (None, -1, -1) if not found
    """
    pattern = r"```mermaid\s*\n(.*?)\n```"
    match = re.search(pattern, markdown, re.DOTALL)
    if match:
        return match.group(1).strip(), match.start(), match.end()
    return None, -1, -1


def remove_mermaid_block(markdown: str) -> str:
    """Remove the mermaid block from markdown entirely."""
    pattern = r"```mermaid\s*\n.*?\n```"
    return re.sub(pattern, "", markdown, flags=re.DOTALL)


def replace_mermaid_block(markdown: str, new_mermaid: str) -> str:
    """Replace the mermaid block in markdown with new content."""
    pattern = r"```mermaid\s*\n.*?\n```"
    return re.sub(pattern, f"```mermaid\n{new_mermaid}\n```", markdown, flags=re.DOTALL)


def get_diagram_type(mermaid_code: str) -> str:
    """
    Detect the diagram type from mermaid code.

    Returns one of: 'flowchart', 'sequenceDiagram', 'classDiagram', 'unknown', etc.
    """
    lines = mermaid_code.strip().split('\n')
    if not lines:
        return 'unknown'

    first_line = lines[0].strip().lower()

    if 'flowchart' in first_line or 'graph' in first_line:
        return 'flowchart'
    elif 'sequencediagram' in first_line:
        return 'sequenceDiagram'
    elif 'classdiagram' in first_line:
        return 'classDiagram'
    elif 'statediagram' in first_line:
        return 'stateDiagram'
    elif 'erdiagram' in first_line:
        return 'erDiagram'
    elif 'gantt' in first_line:
        return 'gantt'
    elif 'pie' in first_line:
        return 'pie'
    elif 'mindmap' in first_line:
        return 'mindmap'

    return 'unknown'


def parse_mermaid_structure(mermaid_code: str) -> Dict:
    """
    Parse Mermaid flowchart to understand structure.

    Returns dict with:
        - diagram_type: str (flowchart, classDiagram, etc.)
        - subgraphs: dict mapping subgraph_id -> list of node_ids defined inside
        - nodes: dict mapping node_id -> label
        - edges: list of (src, dst, label) tuples
        - lines: list of original lines
    """
    lines = mermaid_code.strip().split('\n')
    result = {
        'diagram_type': '',
        'subgraphs': {},
        'nodes': {},
        'edges': [],
        'lines': lines,
        'node_to_subgraph': {},  # Which subgraph each node is defined in
    }

    if not lines:
        return result

    # Get diagram type from first line
    result['diagram_type'] = get_diagram_type(mermaid_code)

    # Parse subgraphs and nodes
    current_subgraph = None
    subgraph_stack = []

    # Pattern for node definitions: A[Label] or A([Label]) or A{Label} etc.
    node_def_pattern = r'^\s*([A-Za-z_][A-Za-z0-9_]*)\s*[\[\(\{<]([^\]\)\}>]*)[\]\)\}>]'
    # Pattern for edges: A --> B or A -->|label| B
    edge_pattern = r'([A-Za-z_][A-Za-z0-9_]*)\s*(-->|--\>|-.->|-.-\>|==>|==\>)\s*(?:\|([^|]*)\|)?\s*([A-Za-z_][A-Za-z0-9_]*)'
    # Pattern for subgraph start
    subgraph_pattern = r'^\s*subgraph\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?:\[([^\]]*)\])?'

    for line in lines[1:]:  # Skip first line (diagram type)
        stripped = line.strip()

        # Check for subgraph start
        subgraph_match = re.match(subgraph_pattern, stripped, re.IGNORECASE)
        if subgraph_match:
            subgraph_id = subgraph_match.group(1)
            subgraph_label = subgraph_match.group(2) or subgraph_id
            subgraph_stack.append(current_subgraph)
            current_subgraph = subgraph_id
            result['subgraphs'][subgraph_id] = {'label': subgraph_label, 'nodes': []}
            continue

        # Check for subgraph end
        if stripped.lower() == 'end':
            if subgraph_stack:
                current_subgraph = subgraph_stack.pop()
            else:
                current_subgraph = None
            continue

        # Check for node definitions
        node_match = re.match(node_def_pattern, stripped)
        if node_match:
            node_id = node_match.group(1)
            node_label = node_match.group(2)
            result['nodes'][node_id] = node_label
            if current_subgraph:
                result['subgraphs'][current_subgraph]['nodes'].append(node_id)
                result['node_to_subgraph'][node_id] = current_subgraph

        # Check for edges (may also define nodes implicitly)
        for edge_match in re.finditer(edge_pattern, stripped):
            src = edge_match.group(1)
            label = edge_match.group(3) or ''
            dst = edge_match.group(4)
            result['edges'].append((src, dst, label, current_subgraph))

            # Track which subgraph the edge is in
            if current_subgraph:
                # If src or dst not in nodes, they might be defined elsewhere
                if src not in result['nodes']:
                    result['nodes'][src] = src
                if dst not in result['nodes']:
                    result['nodes'][dst] = dst

    return result


def find_cross_subgraph_issues(structure: Dict) -> List[Dict]:
    """
    Find edges that reference nodes from different subgraphs.

    Returns list of issues with:
        - type: 'cross_subgraph_reference'
        - edge: (src, dst, label)
        - src_subgraph: where src is defined
        - dst_subgraph: where dst is defined
        - edge_subgraph: where the edge appears
    """
    issues = []
    node_to_subgraph = structure.get('node_to_subgraph', {})

    for src, dst, label, edge_subgraph in structure.get('edges', []):
        src_subgraph = node_to_subgraph.get(src)
        dst_subgraph = node_to_subgraph.get(dst)

        # Issue: edge is inside a subgraph but references node from different subgraph
        if edge_subgraph:
            if src_subgraph and src_subgraph != edge_subgraph:
                issues.append({
                    'type': 'cross_subgraph_reference',
                    'edge': (src, dst, label),
                    'src_subgraph': src_subgraph,
                    'dst_subgraph': dst_subgraph,
                    'edge_subgraph': edge_subgraph,
                    'problem_node': src,
                })
            if dst_subgraph and dst_subgraph != edge_subgraph:
                issues.append({
                    'type': 'cross_subgraph_reference',
                    'edge': (src, dst, label),
                    'src_subgraph': src_subgraph,
                    'dst_subgraph': dst_subgraph,
                    'edge_subgraph': edge_subgraph,
                    'problem_node': dst,
                })

    return issues


def fix_flowchart_arrow_syntax(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix sequence diagram arrow syntax used in flowcharts.

    -->> and ->> are sequence diagram syntax, not flowchart.
    Convert to --> for flowcharts.

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    diagram_type = get_diagram_type(mermaid_code)

    if diagram_type != 'flowchart':
        return mermaid_code, []

    fixes = []
    lines = mermaid_code.split('\n')
    fixed_lines = []

    for i, line in enumerate(lines):
        original = line

        # Fix -->> to --> (sequence async arrow in flowchart)
        if '-->>' in line:
            line = line.replace('-->>', '-->')
            fixes.append(f"Line {i+1}: Converted -->> to --> (sequence syntax in flowchart)")

        # Fix ->> to --> (sequence arrow in flowchart)
        if '->>' in line and '-->' not in original:  # Don't double-fix
            line = line.replace('->>', '-->')
            fixes.append(f"Line {i+1}: Converted ->> to --> (sequence syntax in flowchart)")

        fixed_lines.append(line)

    return '\n'.join(fixed_lines), fixes


def fix_sequence_diagram_activations(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix unbalanced activation/deactivation in sequence diagrams.

    Tracks +/- on arrows and deactivate statements to ensure balance.

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    diagram_type = get_diagram_type(mermaid_code)

    if diagram_type != 'sequenceDiagram':
        return mermaid_code, []

    fixes = []
    lines = mermaid_code.split('\n')

    # Track activations per participant
    active_participants: Dict[str, int] = {}

    # Patterns for activation
    # A->>+B means activate B
    # A->>-B means deactivate A (the source)
    # deactivate B
    arrow_pattern = r'(\w+)\s*(->>|-->>)\s*([+-]?)(\w+)'
    deactivate_pattern = r'^\s*deactivate\s+(\w+)'

    fixed_lines = []

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Check for arrow with activation modifiers
        arrow_match = re.search(arrow_pattern, stripped)
        if arrow_match:
            src = arrow_match.group(1)
            modifier = arrow_match.group(3)
            dst = arrow_match.group(4)

            if modifier == '+':
                active_participants[dst] = active_participants.get(dst, 0) + 1
            elif modifier == '-':
                # Deactivation on arrow - typically deactivates the source
                if src in active_participants and active_participants[src] > 0:
                    active_participants[src] -= 1
                else:
                    # Remove the invalid deactivation
                    line = line.replace('-' + dst, dst)
                    fixes.append(f"Line {i+1}: Removed invalid deactivation of '{src}'")

        # Check for explicit deactivate
        deact_match = re.match(deactivate_pattern, stripped)
        if deact_match:
            participant = deact_match.group(1)
            if participant in active_participants and active_participants[participant] > 0:
                active_participants[participant] -= 1
            else:
                # Skip this line - invalid deactivation
                fixes.append(f"Line {i+1}: Removed invalid 'deactivate {participant}'")
                continue

        fixed_lines.append(line)

    return '\n'.join(fixed_lines), fixes


def fix_unbalanced_subgraphs(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix unbalanced subgraph/end statements.

    - Add missing 'end' statements at the end
    - Remove orphan 'end' statements

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    diagram_type = get_diagram_type(mermaid_code)

    if diagram_type not in ['flowchart', 'unknown']:
        return mermaid_code, []

    fixes = []
    lines = mermaid_code.split('\n')
    fixed_lines = []

    subgraph_depth = 0
    subgraph_pattern = r'^\s*subgraph\s+'

    for i, line in enumerate(lines):
        stripped = line.strip().lower()

        if re.match(subgraph_pattern, stripped, re.IGNORECASE):
            subgraph_depth += 1
            fixed_lines.append(line)
        elif stripped == 'end':
            if subgraph_depth > 0:
                subgraph_depth -= 1
                fixed_lines.append(line)
            else:
                # Orphan 'end' - skip it
                fixes.append(f"Line {i+1}: Removed orphan 'end' statement")
        else:
            fixed_lines.append(line)

    # Add missing 'end' statements
    while subgraph_depth > 0:
        fixed_lines.append('end')
        fixes.append("Added missing 'end' statement")
        subgraph_depth -= 1

    return '\n'.join(fixed_lines), fixes


def fix_invalid_diagram_type(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix missing or invalid diagram type declaration.

    If no valid type is found, try to infer from content or default to flowchart.

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    lines = mermaid_code.strip().split('\n')
    if not lines:
        return 'flowchart TD\n    A[Empty diagram]', ["Added default flowchart declaration"]

    first_line = lines[0].strip().lower()

    # Check if first line has a valid type
    has_valid_type = any(t in first_line for t in VALID_DIAGRAM_TYPES)

    if has_valid_type:
        return mermaid_code, []

    fixes = []

    # Try to infer diagram type from content
    content = '\n'.join(lines)
    inferred_type = None

    if 'participant' in content.lower() or '->>' in content or '-->>' in content:
        inferred_type = 'sequenceDiagram'
    elif 'class ' in content and ':::' in content:
        inferred_type = 'classDiagram'
    elif 'subgraph' in content.lower() or '-->' in content or '==>' in content:
        inferred_type = 'flowchart TD'
    else:
        inferred_type = 'flowchart TD'

    fixes.append(f"Added missing diagram type: {inferred_type}")

    # Insert diagram type at the beginning
    fixed_code = inferred_type + '\n' + mermaid_code
    return fixed_code, fixes


def fix_double_arrows(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix double arrow syntax errors (e.g., --> -->).

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    fixes = []
    lines = mermaid_code.split('\n')
    fixed_lines = []

    for i, line in enumerate(lines):
        original = line

        # Fix --> --> to single -->
        if re.search(r'-->\s*-->', line):
            line = re.sub(r'-->\s*-->', '-->', line)
            fixes.append(f"Line {i+1}: Removed duplicate arrow")

        # Fix ==> ==> to single ==>
        if re.search(r'==>\s*==>', line):
            line = re.sub(r'==>\s*==>', '==>', line)
            fixes.append(f"Line {i+1}: Removed duplicate thick arrow")

        fixed_lines.append(line)

    return '\n'.join(fixed_lines), fixes


def fix_double_braces(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix double curly braces (template escaping) in class diagrams.

    LLMs sometimes use {{ and }} (Jinja2-style escaping) instead of { and }.
    Mermaid requires single braces for class definitions.

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    fixes = []

    # Check if diagram contains double braces
    if '{{' not in mermaid_code and '}}' not in mermaid_code:
        return mermaid_code, fixes

    # Replace {{ with { and }} with }
    fixed_code = mermaid_code.replace('{{', '{').replace('}}', '}')

    if fixed_code != mermaid_code:
        fixes.append("Fixed double curly braces ({{ }}) to single ({ })")

    return fixed_code, fixes


def fix_edge_label_syntax(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix incorrect edge label syntax in flowcharts.

    LLMs sometimes use `A -- label --> B` instead of correct `A -->|label| B`.
    This pattern creates invalid node names with spaces.

    Patterns fixed:
    - `A -- Yes --> B` → `A -->|Yes| B`
    - `A -- No --> B` → `A -->|No| B`
    - `A -- label text --> B` → `A -->|label text| B`

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    diagram_type = get_diagram_type(mermaid_code)

    # Only apply to flowcharts
    if diagram_type not in ['flowchart', 'unknown']:
        return mermaid_code, []

    fixes = []
    lines = mermaid_code.split('\n')
    fixed_lines = []

    # Pattern: NodeId -- label --> NodeId  or  NodeId -- label --> NodeId[Label]
    # Captures: (src_node) -- (label) --> (dst_node)
    edge_label_pattern = r'^(\s*)([A-Za-z_][A-Za-z0-9_]*)\s+--\s+([^-][^>]*?)\s+-->\s*([A-Za-z_][A-Za-z0-9_]*)(.*)$'

    for i, line in enumerate(lines):
        match = re.match(edge_label_pattern, line)
        if match:
            indent = match.group(1)
            src = match.group(2)
            label = match.group(3).strip()
            dst = match.group(4)
            rest = match.group(5)  # Any trailing content (node definition, etc.)

            # Convert to correct syntax
            fixed_line = f'{indent}{src} -->|{label}| {dst}{rest}'
            fixed_lines.append(fixed_line)
            fixes.append(f"Line {i+1}: Fixed edge label syntax '{src} -- {label} --> {dst}' to '{src} -->|{label}| {dst}'")
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines), fixes


def find_invalid_edges(mermaid_code: str) -> List[Tuple[int, str, str]]:
    """
    Find edges with invalid syntax (e.g., spaces in node names).

    Returns:
        List of (line_number, line_content, issue_description)
    """
    diagram_type = get_diagram_type(mermaid_code)

    # Only check flowcharts for now (sequence diagrams have different syntax)
    if diagram_type not in ['flowchart', 'unknown']:
        return []

    invalid_edges = []
    lines = mermaid_code.strip().split('\n')

    # Arrow patterns we look for
    arrow_patterns = ['-->', '==>', '-.->', '-.->']

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Skip comments, subgraph declarations, end statements
        if stripped.startswith('%%') or stripped.lower().startswith('subgraph') or stripped.lower() == 'end':
            continue

        # Check if line contains an arrow
        has_arrow = any(arrow in stripped for arrow in arrow_patterns)
        if not has_arrow:
            continue

        # Valid edge pattern: NodeId -->|optional label| NodeId
        # Node IDs must be valid identifiers (letters, numbers, underscores, starting with letter/underscore)
        valid_edge_pattern = r'^[\s]*([A-Za-z_][A-Za-z0-9_]*)\s*(-->|==\>|-\.->|-.->)\s*(?:\|[^|]*\|)?\s*([A-Za-z_][A-Za-z0-9_]*)[\s]*$'

        # Also allow node definitions inline: A[Label] --> B[Label]
        valid_edge_with_def_pattern = r'^[\s]*([A-Za-z_][A-Za-z0-9_]*)(?:\s*[\[\(\{<][^\]\)\}>]*[\]\)\}>])?\s*(-->|==\>|-\.->|-.->)\s*(?:\|[^|]*\|)?\s*([A-Za-z_][A-Za-z0-9_]*)(?:\s*[\[\(\{<][^\]\)\}>]*[\]\)\}>])?[\s]*$'

        if re.match(valid_edge_pattern, stripped) or re.match(valid_edge_with_def_pattern, stripped):
            continue  # Valid edge

        # This line has an arrow but doesn't match valid patterns
        # Try to identify what's wrong
        issue = "Invalid edge syntax"

        # Check for common issues
        for arrow in arrow_patterns:
            if arrow in stripped:
                parts = stripped.split(arrow)
                if len(parts) >= 2:
                    # Check left side (source)
                    left = parts[0].strip()
                    # Remove any node definition brackets from left
                    left_id = re.sub(r'[\[\(\{<][^\]\)\}>]*[\]\)\}>]', '', left).strip()

                    # Check right side (target) - may have label like |text|
                    right = arrow.join(parts[1:]).strip()
                    # Remove label if present
                    right = re.sub(r'^\|[^|]*\|\s*', '', right)
                    # Remove any node definition brackets
                    right_id = re.sub(r'[\[\(\{<][^\]\)\}>]*[\]\)\}>]', '', right).strip()

                    if ' ' in left_id:
                        issue = f"Source node '{left_id}' contains spaces"
                    elif ' ' in right_id:
                        issue = f"Target node '{right_id}' contains spaces"
                    elif not re.match(r'^[A-Za-z_][A-Za-z0-9_]*$', left_id):
                        issue = f"Invalid source node identifier '{left_id}'"
                    elif not re.match(r'^[A-Za-z_][A-Za-z0-9_]*$', right_id):
                        issue = f"Invalid target node identifier '{right_id}'"
                break

        invalid_edges.append((i + 1, stripped, issue))

    return invalid_edges


def fix_invalid_edges(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Fix or remove edges with invalid syntax.

    Strategy:
    - Remove lines with invalid edge syntax entirely
    - These usually can't be auto-fixed without understanding intent

    Returns:
        Tuple of (fixed_code, list_of_fixes)
    """
    invalid = find_invalid_edges(mermaid_code)

    if not invalid:
        return mermaid_code, []

    fixes = []
    lines = mermaid_code.split('\n')
    invalid_line_nums = {line_num for line_num, _, _ in invalid}

    fixed_lines = []
    for i, line in enumerate(lines):
        line_num = i + 1
        if line_num in invalid_line_nums:
            # Find the issue description
            issue = next((desc for ln, _, desc in invalid if ln == line_num), "Invalid syntax")
            fixes.append(f"Line {line_num}: Removed invalid edge ({issue})")
            continue  # Skip this line
        fixed_lines.append(line)

    return '\n'.join(fixed_lines), fixes


def repair_mermaid_diagram(mermaid_code: str) -> Tuple[str, List[str]]:
    """
    Attempt to repair common Mermaid syntax issues.

    Applies fixes in order:
    1. Invalid/missing diagram type
    2. Double curly braces ({{ }} to { })
    3. Flowchart arrow syntax (-->> to -->)
    4. Double arrows
    5. Edge label syntax (A -- label --> B to A -->|label| B)
    6. Invalid edges (spaces in node names, etc.)
    7. Sequence diagram activations
    8. Unbalanced subgraphs
    9. Cross-subgraph edges
    10. Empty subgraphs

    Returns:
        Tuple of (repaired_code, list_of_fixes_applied)
    """
    all_fixes = []
    code = mermaid_code.strip()

    if not code:
        return mermaid_code, ["Empty diagram"]

    # Fix 1: Invalid/missing diagram type
    code, fixes = fix_invalid_diagram_type(code)
    all_fixes.extend(fixes)

    # Fix 2: Double curly braces (LLM template escaping)
    code, fixes = fix_double_braces(code)
    all_fixes.extend(fixes)

    # Fix 3: Flowchart arrow syntax
    code, fixes = fix_flowchart_arrow_syntax(code)
    all_fixes.extend(fixes)

    # Fix 4: Double arrows
    code, fixes = fix_double_arrows(code)
    all_fixes.extend(fixes)

    # Fix 5: Edge label syntax (A -- label --> B to A -->|label| B)
    code, fixes = fix_edge_label_syntax(code)
    all_fixes.extend(fixes)

    # Fix 6: Invalid edges (spaces in node names, etc.)
    code, fixes = fix_invalid_edges(code)
    all_fixes.extend(fixes)

    # Fix 7: Sequence diagram activations
    code, fixes = fix_sequence_diagram_activations(code)
    all_fixes.extend(fixes)

    # Fix 6: Unbalanced subgraphs
    code, fixes = fix_unbalanced_subgraphs(code)
    all_fixes.extend(fixes)

    # Now apply the original cross-subgraph and empty subgraph fixes
    lines = code.split('\n')

    # Parse structure
    structure = parse_mermaid_structure(code)

    # Strategy: Move cross-subgraph edges outside subgraphs
    cross_subgraph_edges = []
    new_lines = []
    in_subgraph = False
    current_subgraph = None
    node_to_subgraph = structure.get('node_to_subgraph', {})

    edge_pattern = r'([A-Za-z_][A-Za-z0-9_]*)\s*(-->|--\>|-.->|-.-\>|==>|==\>)\s*(?:\|([^|]*)\|)?\s*([A-Za-z_][A-Za-z0-9_]*)'
    subgraph_pattern = r'^\s*subgraph\s+([A-Za-z_][A-Za-z0-9_]*)'

    for line in lines:
        stripped = line.strip()

        # Track subgraph state
        subgraph_match = re.match(subgraph_pattern, stripped, re.IGNORECASE)
        if subgraph_match:
            in_subgraph = True
            current_subgraph = subgraph_match.group(1)
            new_lines.append(line)
            continue

        if stripped.lower() == 'end':
            in_subgraph = False
            current_subgraph = None
            new_lines.append(line)
            continue

        # Check if this line has cross-subgraph edges
        if in_subgraph and current_subgraph:
            edge_matches = list(re.finditer(edge_pattern, stripped))
            if edge_matches:
                has_cross_ref = False
                for match in edge_matches:
                    src = match.group(1)
                    dst = match.group(4)
                    src_sg = node_to_subgraph.get(src)
                    dst_sg = node_to_subgraph.get(dst)

                    # Check if either node is from a different subgraph
                    if (src_sg and src_sg != current_subgraph) or \
                       (dst_sg and dst_sg != current_subgraph):
                        has_cross_ref = True
                        # Store the edge to add at the end
                        edge_text = match.group(0)
                        cross_subgraph_edges.append(edge_text)
                        all_fixes.append(f"Moved cross-subgraph edge '{edge_text}' outside subgraph")

                if has_cross_ref:
                    continue

        new_lines.append(line)

    # Add cross-subgraph edges at the end
    if cross_subgraph_edges:
        new_lines.append('')
        new_lines.append('    %% Cross-subgraph relationships')
        for edge in cross_subgraph_edges:
            new_lines.append(f'    {edge}')

    # Fix empty subgraphs
    result_lines = []
    i = 0
    while i < len(new_lines):
        line = new_lines[i]
        stripped = line.strip()

        if re.match(subgraph_pattern, stripped, re.IGNORECASE):
            if i + 1 < len(new_lines) and new_lines[i + 1].strip().lower() == 'end':
                result_lines.append(line)
                subgraph_id = re.match(subgraph_pattern, stripped, re.IGNORECASE).group(1)
                result_lines.append(f'        {subgraph_id}_placeholder[" "]')
                all_fixes.append(f"Added placeholder to empty subgraph '{subgraph_id}'")
                i += 1
                result_lines.append(new_lines[i])
                i += 1
                continue

        result_lines.append(line)
        i += 1

    repaired = '\n'.join(result_lines)
    return repaired, all_fixes


def validate_mermaid_syntax(mermaid_code: str) -> Tuple[bool, List[str]]:
    """
    Basic validation of Mermaid syntax.

    Returns:
        Tuple of (is_valid, list_of_errors)
    """
    errors = []
    lines = mermaid_code.strip().split('\n')

    if not lines:
        errors.append("Empty diagram")
        return False, errors

    # Check first line for diagram type
    first_line = lines[0].strip().lower()
    if not any(t in first_line for t in VALID_DIAGRAM_TYPES):
        errors.append(f"Invalid diagram type in first line: {lines[0]}")

    # Check for balanced subgraph/end
    subgraph_count = 0
    end_count = 0
    for line in lines:
        stripped = line.strip().lower()
        if stripped.startswith('subgraph'):
            subgraph_count += 1
        elif stripped == 'end':
            end_count += 1

    if subgraph_count != end_count:
        errors.append(f"Unbalanced subgraph/end: {subgraph_count} subgraphs, {end_count} ends")

    # Check for common syntax errors
    diagram_type = get_diagram_type(mermaid_code)

    for i, line in enumerate(lines, 1):
        # Check for unclosed brackets
        open_brackets = line.count('[') + line.count('(') + line.count('{')
        close_brackets = line.count(']') + line.count(')') + line.count('}')
        if open_brackets != close_brackets:
            errors.append(f"Line {i}: Unbalanced brackets")

        # Check for invalid arrow syntax in flowcharts
        if diagram_type == 'flowchart':
            if '-->>' in line or '->>' in line:
                errors.append(f"Line {i}: Sequence arrow syntax in flowchart")

        # Check for double arrow syntax
        if re.search(r'-->\s*-->', line) or re.search(r'==>\s*==>', line):
            errors.append(f"Line {i}: Double arrow syntax error")

    return len(errors) == 0, errors


def is_diagram_renderable(mermaid_code: str) -> Tuple[bool, List[str]]:
    """
    Check if a diagram is likely to render correctly.

    More lenient than validate_mermaid_syntax - focuses on fatal issues.

    Returns:
        Tuple of (is_renderable, list_of_fatal_issues)
    """
    fatal_issues = []
    lines = mermaid_code.strip().split('\n')

    if not lines or not mermaid_code.strip():
        fatal_issues.append("Empty diagram")
        return False, fatal_issues

    # Must have a valid diagram type
    first_line = lines[0].strip().lower()
    if not any(t in first_line for t in VALID_DIAGRAM_TYPES):
        fatal_issues.append("No valid diagram type declaration")

    # Must have some content besides the type declaration
    content_lines = [l for l in lines[1:] if l.strip() and not l.strip().startswith('%%')]
    if not content_lines:
        fatal_issues.append("Diagram has no content")

    # Subgraphs must be balanced (fatal for rendering)
    subgraph_count = sum(1 for l in lines if l.strip().lower().startswith('subgraph'))
    end_count = sum(1 for l in lines if l.strip().lower() == 'end')
    if subgraph_count != end_count:
        fatal_issues.append(f"Unbalanced subgraph/end ({subgraph_count} vs {end_count})")

    # Check for invalid edges (these will cause render failures)
    invalid_edges = find_invalid_edges(mermaid_code)
    if invalid_edges:
        # Just report the count, not each individual issue
        fatal_issues.append(f"Contains {len(invalid_edges)} invalid edge(s)")

    return len(fatal_issues) == 0, fatal_issues


def repair_mermaid_in_markdown(
    markdown: str,
    remove_on_failure: bool = True
) -> Tuple[str, List[str]]:
    """
    Find and repair Mermaid diagram in markdown content.

    If repair fails and remove_on_failure=True, the diagram is removed entirely
    to prevent broken renders.

    Args:
        markdown: Markdown content potentially containing a mermaid block
        remove_on_failure: If True, remove diagrams that can't be fixed

    Returns:
        Tuple of (repaired_markdown, list_of_fixes_applied)
    """
    mermaid_code, start, end = extract_mermaid_block(markdown)

    if mermaid_code is None:
        return markdown, ["No mermaid block found"]

    # Attempt repair
    repaired_code, fixes = repair_mermaid_diagram(mermaid_code)

    # Check if repaired diagram is renderable
    is_renderable, fatal_issues = is_diagram_renderable(repaired_code)

    if not is_renderable:
        if remove_on_failure:
            # Remove the diagram entirely
            cleaned_markdown = remove_mermaid_block(markdown)
            fixes.append(f"REMOVED: Diagram could not be fixed ({', '.join(fatal_issues)})")
            return cleaned_markdown, fixes
        else:
            # Keep the broken diagram but note the issues
            fixes.extend([f"UNFIXED: {issue}" for issue in fatal_issues])

    if fixes:
        # Replace the mermaid block with repaired version
        repaired_markdown = replace_mermaid_block(markdown, repaired_code)
        return repaired_markdown, fixes

    return markdown, []
