"""
Test script to verify CALLS edge creation.

Run this from the CodeCompass root directory:
    python example_repos/calls_test/run_test.py
"""

import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from core.code_indexing import CodeIndexer
from core.graph_model import EdgeType, NodeLabel
from languages.language_config import ENABLED_LANGUAGES
from lsp.lsp_edges import build_span_index, add_calls_edges, add_imports_edges
from lsp.lsp_manager import LSPManager


def main():
    test_dir = Path(__file__).parent
    print(f"Testing CALLS edges in: {test_dir}\n")

    # 1. Build graph
    print("1. Building knowledge graph...")
    indexer = CodeIndexer(str(test_dir), handlers=ENABLED_LANGUAGES)
    KG = indexer.index_directory()
    print(f"   Graph built: {len(KG.nodes)} nodes, {len(KG.edges)} edges\n")

    # 2. Build span index
    print("2. Building span index...")
    span_index = build_span_index(KG)
    print(f"   Span index built for {len(span_index)} files\n")

    # 3. Initialize LSP
    print("3. Initializing LSP servers...")
    lsp_manager = LSPManager(ENABLED_LANGUAGES, root_dir=str(test_dir))
    lsp_manager.initialize_all(test_dir.resolve().as_uri())

    # Open files
    file_nodes = [n for n in KG.nodes.values() if n.label == NodeLabel.FILE]
    for file_node in file_nodes:
        try:
            lsp_client, handler = lsp_manager.get_client_for_file(file_node.path)
            file_path = Path(file_node.path)
            content = file_path.read_text(encoding='utf-8')
            lsp_client.did_open(file_path.as_uri(), handler.get_lsp_language_id(), content)
        except Exception as e:
            print(f"   Warning: Could not open {file_node.name}: {e}")

    print(f"   Opened {len(file_nodes)} files in LSP\n")

    # 4. Add CALLS edges
    print("4. Adding CALLS edges (with debug)...")
    print("-" * 60)
    calls_added = add_calls_edges(KG, lsp_manager, span_index, debug=True)
    print("-" * 60)
    print(f"   Added {calls_added} CALLS edges\n")

    # 5. Shutdown LSP
    print("5. Shutting down LSP servers...")
    lsp_manager.shutdown_all()

    # 6. Analyze edges
    print("\n" + "=" * 60)
    print("EDGE ANALYSIS")
    print("=" * 60)

    # Count edge types
    edge_counts = {}
    for edge in KG.edges:
        edge_type = edge.type.value
        edge_counts[edge_type] = edge_counts.get(edge_type, 0) + 1

    print(f"\nTotal edges: {len(KG.edges)}")
    for edge_type, count in sorted(edge_counts.items()):
        print(f"  {edge_type}: {count}")

    # Analyze CALLS edges by node type
    calls_edges = [e for e in KG.edges if e.type == EdgeType.CALLS]

    if calls_edges:
        print(f"\nCALLS edge breakdown:")

        method_to_method = []
        method_to_function = []
        function_to_function = []
        function_to_method = []

        for edge in calls_edges:
            src_node = KG.nodes.get(edge.src)
            dst_node = KG.nodes.get(edge.dst)

            if not src_node or not dst_node:
                continue

            src_label = src_node.label.value
            dst_label = dst_node.label.value

            if src_label == "method" and dst_label == "method":
                method_to_method.append((src_node.name, dst_node.name))
            elif src_label == "method" and dst_label == "function":
                method_to_function.append((src_node.name, dst_node.name))
            elif src_label == "function" and dst_label == "function":
                function_to_function.append((src_node.name, dst_node.name))
            elif src_label == "function" and dst_label == "method":
                function_to_method.append((src_node.name, dst_node.name))

        print(f"  Method → Method: {len(method_to_method)}")
        if method_to_method:
            for src, dst in method_to_method[:5]:
                print(f"    - {src} → {dst}")
            if len(method_to_method) > 5:
                print(f"    ... and {len(method_to_method) - 5} more")

        print(f"  Method → Function: {len(method_to_function)}")
        if method_to_function:
            for src, dst in method_to_function[:5]:
                print(f"    - {src} → {dst}")

        print(f"  Function → Function: {len(function_to_function)}")
        if function_to_function:
            for src, dst in function_to_function[:5]:
                print(f"    - {src} → {dst}")

        print(f"  Function → Method: {len(function_to_method)}")
        if function_to_method:
            for src, dst in function_to_method[:5]:
                print(f"    - {src} → {dst}")

    # Export detailed graph
    output_file = test_dir / "test_graph_output.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"Nodes: {len(KG.nodes)}  Edges: {len(KG.edges)}\n\n")

        f.write("=" * 60 + "\n")
        f.write("CALLS EDGES\n")
        f.write("=" * 60 + "\n")

        for edge in KG.edges:
            if edge.type == EdgeType.CALLS:
                src = KG.nodes[edge.src]
                dst = KG.nodes[edge.dst]
                f.write(f"{src.label.value}:{src.name} -> {dst.label.value}:{dst.name}\n")

        f.write("\n" + "=" * 60 + "\n")
        f.write("ALL EDGES\n")
        f.write("=" * 60 + "\n")

        for edge in KG.edges:
            src = KG.nodes[edge.src]
            dst = KG.nodes[edge.dst]
            f.write(f"{src.label.value}:{src.name} -> {dst.label.value}:{dst.name} ({edge.type.value})\n")

    print(f"\nDetailed graph exported to: {output_file}")

    # Final verdict
    print("\n" + "=" * 60)
    print("TEST RESULT")
    print("=" * 60)

    if len(method_to_method) == 0:
        print("❌ FAILED: No method → method edges found!")
        print("   This indicates a bug in identifier collection or LSP resolution.")
    elif len(method_to_method) < 5:
        print("⚠️  WARNING: Only {} method → method edges found.".format(len(method_to_method)))
        print("   Expected at least 8-10 based on test_calls.py")
    else:
        print("✅ SUCCESS: {} method → method edges found!".format(len(method_to_method)))

    if calls_added == 0:
        print("❌ CRITICAL: No CALLS edges created at all!")
    elif calls_added < 10:
        print("⚠️  WARNING: Only {} total CALLS edges created.".format(calls_added))
        print("   Expected at least 20+ based on test_calls.py")
    else:
        print("✅ SUCCESS: {} total CALLS edges created!".format(calls_added))


if __name__ == "__main__":
    main()
