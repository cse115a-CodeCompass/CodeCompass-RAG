"""
Mermaid diagram generation from knowledge graph.

Generates diagrams deterministically - no LLM needed.
"""

import re
from typing import List, Optional, Set

from Indexing_Pipeline.core.graph_model import Graph, Node, NodeLabel, EdgeType


def sanitize_name(name: str) -> str:
    """Make name safe for Mermaid syntax."""
    # Replace special chars with underscores
    safe = re.sub(r'[^a-zA-Z0-9_]', '_', name)
    # Ensure doesn't start with number
    if safe and safe[0].isdigit():
        safe = '_' + safe
    return safe


def make_unique_id(node: Node) -> str:
    """Create unique Mermaid node ID to handle duplicate names."""
    # Use hash of full node.id to ensure uniqueness
    short_hash = abs(hash(node.id)) % 10000
    return f"{sanitize_name(node.name)}_{short_hash}"


class MermaidGenerator:
    """Generate Mermaid diagrams from a knowledge graph."""

    def __init__(self, graph: Graph, max_nodes: int = 30):
        self.graph = graph
        self.max_nodes = max_nodes  # Prevent huge diagrams

    # -------------------------------------------------------------------------
    # Directory Tree Diagram
    # -------------------------------------------------------------------------
    def generate_directory_tree(
        self,
        root_node_id: str,
        max_depth: int = 3
    ) -> Optional[str]:
        """
        Generate a directory tree diagram starting from a folder node.

        Uses CONTAINS edges to traverse folder -> file -> definitions.
        """
        root = self.graph.nodes.get(root_node_id)
        if not root or root.label != NodeLabel.FOLDER:
            return None

        lines = ["```mermaid", "flowchart TB"]
        visited: Set[str] = set()
        node_count = [0]  # Use list for mutation in nested function

        def add_node(node: Node, depth: int):
            if depth > max_depth or node_count[0] >= self.max_nodes:
                return
            if node.id in visited:
                return
            visited.add(node.id)
            node_count[0] += 1

            uid = make_unique_id(node)

            # Style based on node type
            if node.label == NodeLabel.FOLDER:
                lines.append(f"    {uid}[{node.name}/]")
            elif node.label == NodeLabel.FILE:
                lines.append(f"    {uid}[{node.name}]")

            # Find children via CONTAINS edges
            for edge in self.graph.edges:
                if edge.src == node.id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child and child.label in (NodeLabel.FOLDER, NodeLabel.FILE):
                        child_uid = make_unique_id(child)
                        add_node(child, depth + 1)
                        lines.append(f"    {uid} --> {child_uid}")

        add_node(root, 0)

        if node_count[0] < 2:
            return None  # Not enough nodes for a diagram

        lines.append("```")
        return "\n".join(lines)

    # -------------------------------------------------------------------------
    # Class Diagram
    # -------------------------------------------------------------------------
    def generate_class_diagram(
        self,
        scope_node_ids: List[str]
    ) -> Optional[str]:
        """
        Generate a class diagram for classes within the given scope.

        Shows classes with their methods.
        """
        # Collect class nodes in scope
        class_nodes = []
        for node_id in scope_node_ids:
            node = self.graph.nodes.get(node_id)
            if node and node.label == NodeLabel.CLASS:
                class_nodes.append(node)

        if not class_nodes:
            return None

        # Limit to max_nodes
        class_nodes = class_nodes[:self.max_nodes]

        lines = ["```mermaid", "classDiagram"]

        for cls in class_nodes:
            cls_name = sanitize_name(cls.name)
            lines.append(f"    class {cls_name} {{")

            # Find methods (CONTAINS edges from class to method)
            methods = []
            for edge in self.graph.edges:
                if edge.src == cls.id and edge.type == EdgeType.CONTAINS:
                    method = self.graph.nodes.get(edge.dst)
                    if method and method.label == NodeLabel.METHOD:
                        methods.append(method)

            for method in methods[:10]:  # Limit methods per class
                visibility = "-" if method.name.startswith("_") else "+"
                lines.append(f"        {visibility}{sanitize_name(method.name)}()")

            lines.append("    }")

        # Add CALLS relationships between classes (if any)
        class_ids = {cls.id for cls in class_nodes}
        added_relationships: Set[tuple] = set()
        for edge in self.graph.edges:
            if edge.type == EdgeType.CALLS:
                src_node = self.graph.nodes.get(edge.src)
                dst_node = self.graph.nodes.get(edge.dst)
                if src_node and dst_node:
                    # Find parent classes
                    src_class = self._find_parent_class(src_node.id)
                    dst_class = self._find_parent_class(dst_node.id)
                    if (src_class and dst_class and
                        src_class.id in class_ids and
                        dst_class.id in class_ids and
                        src_class.id != dst_class.id):
                        rel_key = (src_class.id, dst_class.id)
                        if rel_key not in added_relationships:
                            added_relationships.add(rel_key)
                            lines.append(
                                f"    {sanitize_name(src_class.name)} --> "
                                f"{sanitize_name(dst_class.name)}"
                            )

        lines.append("```")
        return "\n".join(lines)

    def _find_parent_class(self, node_id: str) -> Optional[Node]:
        """Find the class that contains this node."""
        for edge in self.graph.edges:
            if edge.dst == node_id and edge.type == EdgeType.CONTAINS:
                parent = self.graph.nodes.get(edge.src)
                if parent and parent.label == NodeLabel.CLASS:
                    return parent
        return None

    # -------------------------------------------------------------------------
    # Call Graph
    # -------------------------------------------------------------------------
    def generate_call_graph(
        self,
        seed_node_ids: List[str],
        depth: int = 2
    ) -> Optional[str]:
        """
        Generate a call graph showing function call relationships.

        Starts from seed nodes and expands via CALLS edges.
        """
        if not seed_node_ids:
            return None

        lines = ["```mermaid", "flowchart LR"]
        visited_edges: Set[tuple] = set()
        visited_nodes: Set[str] = set()

        def traverse(node_id: str, current_depth: int):
            if current_depth > depth:
                return
            if len(visited_nodes) >= self.max_nodes:
                return

            node = self.graph.nodes.get(node_id)
            if not node:
                return
            if node.label not in (NodeLabel.FUNCTION, NodeLabel.METHOD):
                return

            visited_nodes.add(node_id)

            # Find outgoing CALLS
            for edge in self.graph.edges:
                if edge.src == node_id and edge.type == EdgeType.CALLS:
                    edge_key = (edge.src, edge.dst)
                    if edge_key not in visited_edges:
                        visited_edges.add(edge_key)
                        target = self.graph.nodes.get(edge.dst)
                        if target:
                            src_uid = make_unique_id(node)
                            dst_uid = make_unique_id(target)
                            lines.append(
                                f"    {src_uid}[{node.name}] --> {dst_uid}[{target.name}]"
                            )
                            traverse(edge.dst, current_depth + 1)

        for seed_id in seed_node_ids:
            traverse(seed_id, 0)

        if len(visited_edges) < 1:
            return None  # No calls to show

        lines.append("```")
        return "\n".join(lines)

    # -------------------------------------------------------------------------
    # Architecture Overview (repo-wide)
    # -------------------------------------------------------------------------
    # Folders to skip in architecture diagrams (infrastructure, not code)
    SKIP_FOLDERS = {
        '.ci', '.github', '.git', '.vscode', '.idea', '.pytest_cache',
        '__pycache__', 'node_modules', '.mypy_cache', '.tox', '.eggs',
        'build', 'dist', 'docs', 'doc', 'scripts', 'bin', 'venv', 'env',
        '.venv', '.env', 'vendor', 'third_party', 'examples', 'example',
    }

    def _is_code_folder(self, folder_name: str) -> bool:
        """Check if a folder contains code (vs infrastructure/config)."""
        # Skip hidden folders and known infrastructure
        if folder_name.startswith('.'):
            return False
        if folder_name.lower() in self.SKIP_FOLDERS:
            return False
        return True

    def generate_architecture_overview(self, max_modules: int = 8) -> Optional[str]:
        """
        Generate a high-level architecture diagram showing top-level modules.

        Works on the FULL graph - doesn't require node_ids scope.
        Shows top-level folders as subgraphs with their key classes.
        """
        # Find root folder (the one with no parent CONTAINS edge)
        root_folders = []
        child_ids = {e.dst for e in self.graph.edges if e.type == EdgeType.CONTAINS}
        for node in self.graph.nodes.values():
            if node.label == NodeLabel.FOLDER and node.id not in child_ids:
                root_folders.append(node)

        if not root_folders:
            # Fallback: find top-level folders (depth 1)
            for node in self.graph.nodes.values():
                if node.label == NodeLabel.FOLDER:
                    root_folders.append(node)
                    break

        if not root_folders:
            return None

        root = root_folders[0]

        # Get immediate child folders of root, filtering infrastructure folders
        def get_code_child_folders(parent_id: str) -> List[Node]:
            """Get child folders that contain code."""
            folders = []
            for edge in self.graph.edges:
                if edge.src == parent_id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child and child.label == NodeLabel.FOLDER:
                        if self._is_code_folder(child.name):
                            folders.append(child)
            return folders

        top_modules = get_code_child_folders(root.id)

        # If root has exactly 1 code folder, show its children instead
        # (common pattern: repo/package_name/submodules)
        if len(top_modules) == 1:
            single_pkg = top_modules[0]
            pkg_children = get_code_child_folders(single_pkg.id)
            if pkg_children:
                top_modules = pkg_children

        if not top_modules:
            # If no child folders, show files directly
            for edge in self.graph.edges:
                if edge.src == root.id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child and child.label == NodeLabel.FILE:
                        top_modules.append(child)

        if len(top_modules) < 2:
            return None

        # Limit modules
        top_modules = top_modules[:max_modules]

        lines = ["```mermaid", "flowchart TB"]

        # Build subgraphs for each module
        module_classes: dict = {}  # module_id -> list of class names
        for mod in top_modules:
            mod_uid = make_unique_id(mod)
            mod_name = sanitize_name(mod.name)

            # Find classes in this module (recursively)
            classes_in_mod = self._get_classes_in_subtree(mod.id, max_classes=5)
            module_classes[mod.id] = classes_in_mod

            if classes_in_mod:
                lines.append(f"    subgraph {mod_uid}[{mod.name}]")
                for cls_name in classes_in_mod[:3]:  # Limit to 3 classes per module
                    cls_uid = f"{mod_uid}_{sanitize_name(cls_name)}"
                    lines.append(f"        {cls_uid}[{cls_name}]")
                lines.append("    end")
            else:
                # Just show the module as a node
                lines.append(f"    {mod_uid}[{mod.name}/]")

        # Add inter-module relationships from IMPORTS edges
        added_edges: Set[tuple] = set()
        for edge in self.graph.edges:
            if edge.type == EdgeType.IMPORTS:
                src_mod = self._find_parent_module(edge.src, top_modules)
                dst_mod = self._find_parent_module(edge.dst, top_modules)
                if src_mod and dst_mod and src_mod.id != dst_mod.id:
                    edge_key = (src_mod.id, dst_mod.id)
                    if edge_key not in added_edges:
                        added_edges.add(edge_key)
                        lines.append(
                            f"    {make_unique_id(src_mod)} --> {make_unique_id(dst_mod)}"
                        )

        # If no edges found, add invisible links to force vertical layout
        # Chain modules in pairs to create a grid (2 columns)
        if not added_edges and len(top_modules) > 1:
            # Create 2-column grid layout with invisible links
            for i in range(0, len(top_modules) - 2, 2):
                # Vertical links down the left column
                lines.append(
                    f"    {make_unique_id(top_modules[i])} ~~~ "
                    f"{make_unique_id(top_modules[i + 2])}"
                )
            for i in range(1, len(top_modules) - 2, 2):
                # Vertical links down the right column
                lines.append(
                    f"    {make_unique_id(top_modules[i])} ~~~ "
                    f"{make_unique_id(top_modules[i + 2])}"
                )

        lines.append("```")
        return "\n".join(lines)

    def _get_classes_in_subtree(self, folder_id: str, max_classes: int = 5) -> List[str]:
        """Get class names within a folder subtree."""
        classes = []
        visited = set()

        def traverse(node_id: str):
            if node_id in visited or len(classes) >= max_classes:
                return
            visited.add(node_id)

            for edge in self.graph.edges:
                if edge.src == node_id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child:
                        if child.label == NodeLabel.CLASS:
                            classes.append(child.name)
                        elif child.label in (NodeLabel.FOLDER, NodeLabel.FILE):
                            traverse(child.id)

        traverse(folder_id)
        return classes

    def _find_parent_module(self, node_id: str, modules: List[Node]) -> Optional[Node]:
        """Find which top-level module contains this node."""
        module_ids = {m.id for m in modules}

        # Walk up CONTAINS edges to find module
        visited = set()
        current = node_id
        while current and current not in visited:
            visited.add(current)
            if current in module_ids:
                return self.graph.nodes.get(current)
            # Find parent
            for edge in self.graph.edges:
                if edge.dst == current and edge.type == EdgeType.CONTAINS:
                    current = edge.src
                    break
            else:
                break
        return None

    # -------------------------------------------------------------------------
    # Module Architecture (scoped to a specific folder)
    # -------------------------------------------------------------------------
    def generate_module_architecture(
        self,
        folder_id: str,
        max_submodules: int = 8
    ) -> Optional[str]:
        """
        Generate an architecture diagram for a specific module/folder.

        Shows the internal structure of the folder: subfolders as subgraphs
        with their key classes. This is the module-scoped equivalent of
        generate_architecture_overview().

        Args:
            folder_id: The folder node ID to use as root
            max_submodules: Maximum number of subfolders to show

        Returns:
            Mermaid diagram string or None if not enough structure
        """
        root = self.graph.nodes.get(folder_id)
        if not root or root.label != NodeLabel.FOLDER:
            return None

        # Get child folders, filtering infrastructure
        def get_code_child_folders(parent_id: str) -> List[Node]:
            folders = []
            for edge in self.graph.edges:
                if edge.src == parent_id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child and child.label == NodeLabel.FOLDER:
                        if self._is_code_folder(child.name):
                            folders.append(child)
            return folders

        submodules = get_code_child_folders(folder_id)

        # If this folder has no code subfolders, try showing files with classes
        if not submodules:
            # Get files that contain classes
            files_with_classes = []
            for edge in self.graph.edges:
                if edge.src == folder_id and edge.type == EdgeType.CONTAINS:
                    child = self.graph.nodes.get(edge.dst)
                    if child and child.label == NodeLabel.FILE:
                        classes = self._get_classes_in_subtree(child.id, max_classes=3)
                        if classes:
                            files_with_classes.append((child, classes))

            if len(files_with_classes) < 2:
                return None

            # Build diagram with files as subgraphs
            lines = ["```mermaid", "flowchart TB"]
            for file_node, classes in files_with_classes[:max_submodules]:
                file_uid = make_unique_id(file_node)
                lines.append(f"    subgraph {file_uid}[{file_node.name}]")
                for cls_name in classes[:3]:
                    cls_uid = f"{file_uid}_{sanitize_name(cls_name)}"
                    lines.append(f"        {cls_uid}[{cls_name}]")
                lines.append("    end")

            lines.append("```")
            return "\n".join(lines)

        # Limit submodules
        submodules = submodules[:max_submodules]

        if len(submodules) < 2:
            # Only 1 subfolder - descend into it
            single_sub = submodules[0]
            sub_children = get_code_child_folders(single_sub.id)
            if sub_children:
                submodules = sub_children[:max_submodules]
            else:
                return None

        if len(submodules) < 2:
            return None

        lines = ["```mermaid", "flowchart TB"]

        # Build subgraphs for each submodule
        for mod in submodules:
            mod_uid = make_unique_id(mod)

            # Find classes in this submodule
            classes_in_mod = self._get_classes_in_subtree(mod.id, max_classes=5)

            if classes_in_mod:
                lines.append(f"    subgraph {mod_uid}[{mod.name}]")
                for cls_name in classes_in_mod[:3]:
                    cls_uid = f"{mod_uid}_{sanitize_name(cls_name)}"
                    lines.append(f"        {cls_uid}[{cls_name}]")
                lines.append("    end")
            else:
                lines.append(f"    {mod_uid}[{mod.name}/]")

        # Add inter-submodule relationships from IMPORTS edges
        added_edges: Set[tuple] = set()
        for edge in self.graph.edges:
            if edge.type == EdgeType.IMPORTS:
                src_mod = self._find_parent_module(edge.src, submodules)
                dst_mod = self._find_parent_module(edge.dst, submodules)
                if src_mod and dst_mod and src_mod.id != dst_mod.id:
                    edge_key = (src_mod.id, dst_mod.id)
                    if edge_key not in added_edges:
                        added_edges.add(edge_key)
                        lines.append(
                            f"    {make_unique_id(src_mod)} --> {make_unique_id(dst_mod)}"
                        )

        # If no edges, add invisible links for vertical layout
        if not added_edges and len(submodules) > 1:
            for i in range(0, len(submodules) - 2, 2):
                lines.append(
                    f"    {make_unique_id(submodules[i])} ~~~ "
                    f"{make_unique_id(submodules[i + 2])}"
                )
            for i in range(1, len(submodules) - 2, 2):
                lines.append(
                    f"    {make_unique_id(submodules[i])} ~~~ "
                    f"{make_unique_id(submodules[i + 2])}"
                )

        lines.append("```")
        return "\n".join(lines)

    # -------------------------------------------------------------------------
    # Import Graph
    # -------------------------------------------------------------------------
    def generate_import_graph(
        self,
        file_node_ids: List[str]
    ) -> Optional[str]:
        """
        Generate an import dependency graph for files.

        Uses IMPORTS edges between file nodes.
        """
        if not file_node_ids:
            return None

        lines = ["```mermaid", "flowchart TB"]
        added_edges: Set[tuple] = set()
        file_set = set(file_node_ids)

        for edge in self.graph.edges:
            if edge.type == EdgeType.IMPORTS:
                # Show if either end is in our scope
                if edge.src in file_set or edge.dst in file_set:
                    edge_key = (edge.src, edge.dst)
                    if edge_key not in added_edges:
                        added_edges.add(edge_key)
                        src = self.graph.nodes.get(edge.src)
                        dst = self.graph.nodes.get(edge.dst)
                        if src and dst:
                            src_uid = make_unique_id(src)
                            dst_uid = make_unique_id(dst)
                            lines.append(
                                f"    {src_uid}[{src.name}] --> {dst_uid}[{dst.name}]"
                            )

        if len(added_edges) < 1:
            return None

        lines.append("```")
        return "\n".join(lines)


# -----------------------------------------------------------------------------
# High-level function for wiki integration
# -----------------------------------------------------------------------------
def _find_nodes_by_modules(graph: Graph, modules: List[str]) -> List[str]:
    """
    Find all node IDs that belong to the given module paths.

    Looks for folder nodes matching module paths, then collects all
    descendant nodes (files, classes, functions, methods).
    """
    if not modules:
        return []

    result_ids = []
    visited = set()

    def collect_descendants(node_id: str):
        """Recursively collect all descendants via CONTAINS edges."""
        if node_id in visited:
            return
        visited.add(node_id)
        result_ids.append(node_id)

        for edge in graph.edges:
            if edge.src == node_id and edge.type == EdgeType.CONTAINS:
                collect_descendants(edge.dst)

    # Find folder nodes matching module paths
    for node in graph.nodes.values():
        if node.label == NodeLabel.FOLDER:
            # Check if folder path ends with any module path
            node_path = node.path.replace("\\", "/")
            for mod in modules:
                mod_normalized = mod.replace("\\", "/")
                if node_path.endswith(mod_normalized) or node_path.endswith(
                    mod_normalized + "/"
                ):
                    collect_descendants(node.id)
                    break

    return result_ids


def generate_diagrams_for_page(
    graph: Graph,
    page_kind: str,
    node_ids: List[str],
    modules: List[str],
) -> str:
    """
    Generate appropriate Mermaid diagrams for a wiki page.

    Args:
        graph: The knowledge graph
        page_kind: Type of page (overview, module, reference, etc.)
        node_ids: Graph node IDs in scope for this page
        modules: Module paths this page covers

    Returns:
        Markdown string with diagram sections (may be empty).
    """
    gen = MermaidGenerator(graph)
    sections = []

    # If node_ids is empty but we have modules, find nodes from modules
    effective_node_ids = node_ids
    if not node_ids and modules:
        effective_node_ids = _find_nodes_by_modules(graph, modules)

    # Get node types in scope
    class_ids = [
        nid for nid in effective_node_ids
        if graph.nodes.get(nid) and graph.nodes[nid].label == NodeLabel.CLASS
    ]
    func_ids = [
        nid for nid in effective_node_ids
        if graph.nodes.get(nid) and
        graph.nodes[nid].label in (NodeLabel.FUNCTION, NodeLabel.METHOD)
    ]
    file_ids = [
        nid for nid in effective_node_ids
        if graph.nodes.get(nid) and graph.nodes[nid].label == NodeLabel.FILE
    ]

    # Derive folder_ids from modules (not node_ids, which rarely includes folders)
    folder_ids = []
    if modules:
        for node in graph.nodes.values():
            if node.label == NodeLabel.FOLDER:
                node_path = node.path.replace("\\", "/")
                for mod in modules:
                    mod_normalized = mod.replace("\\", "/")
                    if node_path.endswith(mod_normalized) or node_path.endswith(
                        mod_normalized + "/"
                    ):
                        folder_ids.append(node.id)
                        break

    # Generate diagrams based on page kind
    if page_kind == "overview":
        if folder_ids:
            # Scoped overview (e.g., "search-algorithms-overview") - show module diagram
            mod_arch = gen.generate_module_architecture(folder_ids[0])
            if mod_arch:
                sections.append("## Module Architecture\n\n" + mod_arch)
            # Also add directory tree for the scoped module
            tree = gen.generate_directory_tree(folder_ids[0], max_depth=2)
            if tree:
                sections.append("## Module Structure\n\n" + tree)
        else:
            # Root overview (no folder scope) - show full project architecture
            arch = gen.generate_architecture_overview()
            if arch:
                sections.append("## Architecture Overview\n\n" + arch)

    if page_kind == "architecture":
        # Architecture pages also get the overview diagram
        arch = gen.generate_architecture_overview()
        if arch:
            sections.append("## System Architecture\n\n" + arch)

    if page_kind == "module" and folder_ids:
        # Module-specific architecture diagram (shows internal submodules)
        mod_arch = gen.generate_module_architecture(folder_ids[0])
        if mod_arch:
            sections.append("## Module Architecture\n\n" + mod_arch)

        # Directory tree for module pages
        tree = gen.generate_directory_tree(folder_ids[0], max_depth=2)
        if tree:
            sections.append("## Module Structure\n\n" + tree)

        # Import graph if we have files
        if file_ids:
            imports = gen.generate_import_graph(file_ids)
            if imports:
                sections.append("## Dependencies\n\n" + imports)

    if class_ids and page_kind in ("module", "reference"):
        # Class diagram for module/reference pages (not architecture - it has overview)
        # Limit to 12 classes to keep diagram readable
        class_diag = gen.generate_class_diagram(class_ids[:12])
        if class_diag:
            sections.append("## Class Overview\n\n" + class_diag)

    if func_ids and page_kind in ("module", "reference"):
        # Call graph for function-heavy pages
        call_graph = gen.generate_call_graph(func_ids[:5], depth=2)
        if call_graph:
            sections.append("## Call Graph\n\n" + call_graph)

    if not sections:
        return ""

    return "\n\n---\n\n" + "\n\n".join(sections)
