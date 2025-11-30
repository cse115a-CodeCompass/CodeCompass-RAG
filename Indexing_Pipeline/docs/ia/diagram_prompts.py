"""
Prompt templates for LLM-generated Mermaid diagrams.

These prompts instruct the LLM to generate semantically meaningful diagrams
with labeled edges showing relationships like calls, returns, uses, inherits.
"""

ARCHITECTURE_DIAGRAM_PROMPT = """You are generating a Mermaid diagram for documentation. Based on the following
code context and summaries, create a flowchart showing how the main components
interact.

Requirements:
- Use labeled edges (e.g., `-->|calls|`, `-->|returns|`, `-->|uses|`)
- Focus on the 5-8 most important components
- Show data flow and control flow relationships
- Use subgraphs to group related components
- Keep node names short but descriptive
- Use `flowchart TB` (top-to-bottom) or `flowchart LR` (left-to-right)

Page topic: {page_title}
Page description: {page_description}

Code context:
{context}

Output ONLY the Mermaid diagram wrapped in ```mermaid fences. No explanation."""


CLASS_RELATIONSHIP_PROMPT = """Generate a Mermaid class diagram showing the relationships between these classes.

Requirements:
- Show inheritance with `<|--`
- Show composition/aggregation with `*--` or `o--`
- Include 2-3 key methods per class (use + for public, - for private)
- Show relationships like "uses", "creates", "manages" with labeled arrows
- Use `classDiagram` as the diagram type

Classes and their summaries:
{class_summaries}

Output ONLY the Mermaid class diagram wrapped in ```mermaid fences. No explanation."""


SEQUENCE_DIAGRAM_PROMPT = """Generate a Mermaid sequence diagram showing the interaction flow for this feature.

Requirements:
- Show the main actors/components as participants
- Include method calls with descriptive names
- Show return values where important
- Keep it focused on the core flow (max 10-15 messages)
- Use `sequenceDiagram` as the diagram type

Feature: {feature_name}
Flow description:
{flow_context}

Output ONLY the Mermaid sequence diagram wrapped in ```mermaid fences. No explanation."""


DATA_FLOW_PROMPT = """Generate a Mermaid flowchart showing how data flows through this module.

Requirements:
- Show data sources, transformations, and destinations
- Use descriptive edge labels
- Group related processing steps with subgraphs
- Highlight key decision points with diamond shapes `{{}}`
- Use `flowchart TB` as the diagram type

Module: {module_name}
Context:
{context}

Output ONLY the Mermaid flowchart wrapped in ```mermaid fences. No explanation."""


MODULE_ARCHITECTURE_PROMPT = """Generate a Mermaid diagram showing the architecture of this module.

Requirements:
- Show the main submodules/components as subgraphs
- Include 2-3 key classes per submodule
- Show dependencies between submodules with labeled edges (-->|uses|, -->|imports|)
- Use `flowchart TB` as the diagram type
- Keep it clean - max 6-8 subgraphs

Module: {module_name}
Module description: {module_description}

Components and structure:
{context}

Output ONLY the Mermaid diagram wrapped in ```mermaid fences. No explanation."""


DEPENDENCY_GRAPH_PROMPT = """Generate a Mermaid diagram showing the import/dependency relationships between these files.

Requirements:
- Show each file as a node
- Use labeled edges showing the type of dependency (-->|imports|, -->|uses types from|)
- Group files by their parent directory if helpful
- Use `flowchart LR` (left-to-right) for better readability
- Show the most important dependencies, not every single import

Files and their imports:
{file_imports}

Output ONLY the Mermaid diagram wrapped in ```mermaid fences. No explanation."""


# Map page kinds to appropriate diagram prompts
PAGE_KIND_PROMPTS = {
    "overview": ARCHITECTURE_DIAGRAM_PROMPT,
    "module": MODULE_ARCHITECTURE_PROMPT,
    "architecture": ARCHITECTURE_DIAGRAM_PROMPT,
    "reference": CLASS_RELATIONSHIP_PROMPT,
    "guide": SEQUENCE_DIAGRAM_PROMPT,
    "concept": DATA_FLOW_PROMPT,
}


def get_diagram_prompt(page_kind: str) -> str:
    """Get the appropriate diagram prompt template for a page kind."""
    return PAGE_KIND_PROMPTS.get(page_kind, ARCHITECTURE_DIAGRAM_PROMPT)
