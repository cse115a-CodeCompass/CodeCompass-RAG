"""
Build rich context for LLM diagram generation.

Extracts relevant information from the graph and summaries to provide
the LLM with enough context to generate meaningful diagrams.
"""

from typing import Dict, List, Optional, Set
from pathlib import Path

from Indexing_Pipeline.core.graph_model import Graph, Node, NodeLabel, EdgeType


def build_diagram_context(
    graph: Graph,
    page_title: str,
    page_description: str,
    modules: List[str],
    node_ids: List[str],
    summaries: Dict[str, str],
    max_tokens: int = 2000,
) -> str:
    """
    Build context string for LLM diagram generation.

    Includes:
    - Page topic and description
    - Summaries of key classes/functions in scope
    - Relationship hints from graph edges
    - Module structure overview

    Args:
        graph: Knowledge graph with nodes and edges
        page_title: Title of the page
        page_description: Description of the page
        modules: List of module paths in scope
        node_ids: List of node IDs in scope
        summaries: Dict mapping node_id -> summary text
        max_tokens: Approximate token budget for context

    Returns:
        Formatted context string for LLM prompt
    """
    parts = []

    # 1. Page context
    parts.append(f"Topic: {page_title}")
    if page_description:
        parts.append(f"Description: {page_description}")
    if modules:
        parts.append(f"Modules covered: {', '.join(modules)}")
    parts.append("")

    # 2. Key definitions and their summaries
    parts.append("## Key Components")
    parts.append("")

    # Prioritize classes, then functions
    classes = []
    functions = []

    for node_id in node_ids:
        node = graph.nodes.get(node_id)
        if not node:
            continue
        if node.label == NodeLabel.CLASS:
            classes.append(node)
        elif node.label == NodeLabel.FUNCTION:
            functions.append(node)

    # Add classes with summaries
    for node in classes[:10]:  # Limit for token budget
        summary = summaries.get(node.id, "")
        if summary:
            parts.append(f"- **{node.name}** (class): {summary[:200]}")
        else:
            parts.append(f"- **{node.name}** (class)")

    # Add functions with summaries
    for node in functions[:10]:
        summary = summaries.get(node.id, "")
        if summary:
            parts.append(f"- **{node.name}** (function): {summary[:150]}")
        else:
            parts.append(f"- **{node.name}** (function)")

    parts.append("")

    # 3. Relationship hints from graph edges
    node_id_set = set(node_ids)
    relationships = _extract_relationships(graph, node_id_set)

    if relationships:
        parts.append("## Known Relationships")
        parts.append("")
        for rel in relationships[:15]:  # Limit relationships
            parts.append(f"- {rel}")
        parts.append("")

    # 4. Module structure (if modules are specified)
    if modules:
        structure = _describe_module_structure(graph, modules)
        if structure:
            parts.append("## Module Structure")
            parts.append("")
            parts.append(structure)

    return "\n".join(parts)


def _extract_relationships(graph: Graph, node_id_set: Set[str]) -> List[str]:
    """Extract human-readable relationships from graph edges."""
    relationships = []
    seen = set()

    for edge in graph.edges:
        # Only include edges within our scope
        if edge.src not in node_id_set or edge.dst not in node_id_set:
            continue

        src = graph.nodes.get(edge.src)
        dst = graph.nodes.get(edge.dst)
        if not src or not dst:
            continue

        # Skip CONTAINS edges for diagram context (structural, not semantic)
        if edge.type == EdgeType.CONTAINS:
            continue

        # Create readable relationship
        rel_key = (src.name, edge.type.value, dst.name)
        if rel_key in seen:
            continue
        seen.add(rel_key)

        if edge.type == EdgeType.CALLS:
            relationships.append(f"{src.name} calls {dst.name}")
        elif edge.type == EdgeType.IMPORTS:
            relationships.append(f"{src.name} imports {dst.name}")
        else:
            relationships.append(f"{src.name} {edge.type.value} {dst.name}")

    return relationships


def _describe_module_structure(graph: Graph, modules: List[str]) -> str:
    """Describe the structure of modules for context."""
    lines = []

    for mod_path in modules:
        mod_normalized = mod_path.replace("\\", "/")

        # Find folder node for this module
        folder_node = None
        for node in graph.nodes.values():
            if node.label == NodeLabel.FOLDER:
                node_path = node.path.replace("\\", "/")
                if node_path.endswith(mod_normalized) or node_path.endswith(mod_normalized + "/"):
                    folder_node = node
                    break

        if not folder_node:
            continue

        # Get direct children (files and subfolders)
        children = []
        for edge in graph.edges:
            if edge.src == folder_node.id and edge.type == EdgeType.CONTAINS:
                child = graph.nodes.get(edge.dst)
                if child:
                    children.append(child)

        if children:
            lines.append(f"**{mod_path}/**")
            for child in children[:10]:
                if child.label == NodeLabel.FOLDER:
                    lines.append(f"  - {child.name}/ (submodule)")
                elif child.label == NodeLabel.FILE:
                    lines.append(f"  - {child.name}")
            lines.append("")

    return "\n".join(lines)


def build_class_summaries(
    graph: Graph,
    class_ids: List[str],
    summaries: Dict[str, str],
) -> str:
    """
    Build formatted class summaries for class diagram prompt.

    Args:
        graph: Knowledge graph
        class_ids: List of class node IDs
        summaries: Dict mapping node_id -> summary text

    Returns:
        Formatted string with class info for LLM prompt
    """
    parts = []

    for class_id in class_ids[:10]:  # Limit for token budget
        node = graph.nodes.get(class_id)
        if not node or node.label != NodeLabel.CLASS:
            continue

        summary = summaries.get(class_id, "No summary available")
        parts.append(f"### {node.name}")
        parts.append(summary[:500])  # Truncate long summaries

        # Get methods for this class
        methods = _get_class_methods(graph, class_id)
        if methods:
            parts.append(f"Methods: {', '.join(methods[:8])}")

        parts.append("")

    return "\n".join(parts)


def _get_class_methods(graph: Graph, class_id: str) -> List[str]:
    """Get method names for a class."""
    methods = []

    for edge in graph.edges:
        if edge.src == class_id and edge.type == EdgeType.CONTAINS:
            child = graph.nodes.get(edge.dst)
            if child and child.label == NodeLabel.METHOD:
                methods.append(child.name)

    return methods


def build_file_imports_context(
    graph: Graph,
    file_ids: List[str],
) -> str:
    """
    Build context showing import relationships between files.

    Args:
        graph: Knowledge graph
        file_ids: List of file node IDs

    Returns:
        Formatted string describing file imports
    """
    parts = []
    file_id_set = set(file_ids)

    for file_id in file_ids[:15]:
        node = graph.nodes.get(file_id)
        if not node or node.label != NodeLabel.FILE:
            continue

        # Find imports from this file
        imports = []
        for edge in graph.edges:
            if edge.src == file_id and edge.type == EdgeType.IMPORTS:
                target = graph.nodes.get(edge.dst)
                if target:
                    imports.append(target.name)

        if imports:
            parts.append(f"**{node.name}** imports: {', '.join(imports[:5])}")

    return "\n".join(parts) if parts else "No import relationships found."


def build_sequence_context(
    graph: Graph,
    entry_point_id: str,
    summaries: Dict[str, str],
    max_depth: int = 3,
) -> str:
    """
    Build context for sequence diagram by following call chains.

    Args:
        graph: Knowledge graph
        entry_point_id: Starting function/method node ID
        summaries: Dict mapping node_id -> summary text
        max_depth: How many call levels to follow

    Returns:
        Formatted string describing the call sequence
    """
    entry = graph.nodes.get(entry_point_id)
    if not entry:
        return ""

    parts = []
    parts.append(f"Entry point: {entry.name}")

    summary = summaries.get(entry_point_id, "")
    if summary:
        parts.append(f"Purpose: {summary[:200]}")

    parts.append("")
    parts.append("Call sequence:")

    # BFS to find call chain
    visited = set()
    queue = [(entry_point_id, 0)]

    while queue:
        current_id, depth = queue.pop(0)
        if depth > max_depth or current_id in visited:
            continue
        visited.add(current_id)

        current = graph.nodes.get(current_id)
        if not current:
            continue

        indent = "  " * depth
        parts.append(f"{indent}- {current.name}")

        # Find calls from this node
        for edge in graph.edges:
            if edge.src == current_id and edge.type == EdgeType.CALLS:
                queue.append((edge.dst, depth + 1))

    return "\n".join(parts)
