# CALLS Edge Test Repository

This test repository is designed to verify that CALLS edges are correctly created for all types of function and method calls.

## Expected CALLS Edges

### Function → Function
- `function_calls_function` → `helper_function`
- `function_calls_function` → `utility_function`
- `complex_function` → `helper_function`
- `complex_function` → `utility_function` (indirect via MathHelper.double)
- `main` → `function_calls_function`
- `main` → `function_calls_method`
- `main` → `complex_function`

### Method → Method (Same Class)
- `Calculator.add` → `Calculator._validate`
- `Calculator.subtract` → `Calculator._validate`
- `Calculator.multiply` → `Calculator._validate`
- `Calculator.multiply` → `Calculator._log_operation`
- `Calculator._log_operation` → `helper_function`
- `Calculator.reset` → `utility_function`
- `AdvancedCalculator.power` → `AdvancedCalculator._validate` (inherited)
- `AdvancedCalculator.power` → `AdvancedCalculator._record_history`
- `WorkflowManager.run_workflow` → `WorkflowManager._finalize`
- `WorkflowManager._finalize` → `utility_function`

### Method → Method (Different Class)
- `WorkflowManager.run_workflow` → `Calculator.add`
- `WorkflowManager.run_workflow` → `Calculator.multiply`
- `WorkflowManager.run_workflow` → `MathHelper.double`

### Method → Function
- `Calculator._log_operation` → `helper_function`
- `Calculator.reset` → `utility_function`
- `MathHelper.double` → `utility_function`
- `WorkflowManager._finalize` → `utility_function`

### Function → Method
- `function_calls_method` → `Calculator.add`
- `complex_function` → `Calculator.add`
- `complex_function` → `Calculator.multiply`
- `complex_function` → `MathHelper.double`
- `complex_function` → `AdvancedCalculator.power`

### **Cross-File Function → Function (test_calls.py → utilities.py)**
- `function_calls_cross_file` → `external_helper`
- `function_calls_cross_file` → `external_math`
- `function_calls_cross_file` → `chain_function`
- `function_calls_cross_file` → `external_formatter`
- `chain_function` → `external_helper` (within utilities.py)

### **Cross-File Method → Function (test_calls.py → utilities.py)**
- `Calculator.compute_with_external` → `external_math`
- `Calculator.compute_with_external` → `external_formatter`
- `WorkflowManager.run_cross_file_workflow` → `external_helper`
- `ExternalCalculator.calculate` → `external_math` (within utilities.py)
- `ExternalCalculator.format_result` → `external_formatter` (within utilities.py)

### **Cross-File Method → Method (test_calls.py → utilities.py)**
- `WorkflowManager.run_cross_file_workflow` → `ExternalCalculator.calculate`
- `WorkflowManager.run_cross_file_workflow` → `ExternalCalculator.format_result`

## How to Test

1. Run the indexer on this repository:
   ```python
   from core.code_indexing import CodeIndexer
   from languages.language_config import ENABLED_LANGUAGES

   indexer = CodeIndexer("./example_repos/calls_test", handlers=ENABLED_LANGUAGES)
   KG = indexer.index_directory()
   ```

2. Add LSP edges:
   ```python
   from lsp.lsp_edges import build_span_index, add_calls_edges
   from lsp.lsp_manager import LSPManager

   span_index = build_span_index(KG)
   lsp_manager = LSPManager(ENABLED_LANGUAGES, root_dir="./example_repos/calls_test")
   lsp_manager.initialize_all(Path("./example_repos/calls_test").resolve().as_uri())

   # Add CALLS edges with debug output
   add_calls_edges(KG, lsp_manager, span_index, debug=True)
   ```

3. Export graph and check for CALLS edges:
   ```python
   with open("test_graph.txt", "w") as f:
       f.write(f"Nodes: {len(KG.nodes)}  Edges: {len(KG.edges)}\n")
       for edge in KG.edges:
           src = KG.nodes[edge.src]
           dst = KG.nodes[edge.dst]
           f.write(f"{src.label.value}:{src.name} -> {dst.label.value}:{dst.name} ({edge.type.value})\n")
   ```

4. Count edge types:
   ```bash
   grep "CALLS" test_graph.txt | wc -l
   grep "method:.*-> method:.*CALLS" test_graph.txt | wc -l
   grep "function:.*-> function:.*CALLS" test_graph.txt | wc -l
   grep "method:.*-> function:.*CALLS" test_graph.txt | wc -l
   ```

## Expected Results

If CALLS edges are working correctly, you should see:
- **Method → Method edges (same file)**: At least 8-10 edges
- **Function → Function edges (same file)**: At least 3-5 edges
- **Method → Function edges (same file)**: At least 4 edges
- **Function → Method edges (same file)**: At least 5 edges
- **Cross-file Function → Function**: At least 4-5 edges
- **Cross-file Method → Function**: At least 6 edges
- **Cross-file Method → Method**: At least 2 edges

**Total expected CALLS edges**: 30-40+ edges

If you see **0 method → method edges**, there's likely a bug in:
1. Identifier extraction (not capturing `self.method_name`)
2. LSP resolution (LSP returning wrong location)
3. Span index mapping (can't map LSP location back to node)

If you see **0 cross-file edges**, there's likely a bug in:
1. LSP not resolving imports correctly
2. Span index not containing definitions from imported files
3. File URIs not matching between LSP response and span index
