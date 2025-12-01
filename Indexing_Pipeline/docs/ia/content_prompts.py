"""
LLM prompts for generating wiki page content.

Different prompts for different page kinds to generate appropriate content style.
"""

from Indexing_Pipeline.docs.ia.context_builder import PageContext

# =============================================================================
# MERMAID DIAGRAM GUIDELINES (Shared)
# =============================================================================

MERMAID_GENERAL_GUIDELINES = """
## Mermaid Diagram Guidelines

**General Rules:**
- Diagrams must be accurate and directly derived from the provided context
- Do NOT invent modules, classes, functions, or relationships not in the context
- If there is not enough information for a meaningful diagram, omit it
- Maximum ~20 nodes per diagram; prioritize key components
- Node labels should be concise: 3-4 words maximum
- Use clear node IDs without spaces (e.g., `CoreService`, `AuthModule`)
- For longer labels, use syntax: `nodeId["My Label"]`

**CRITICAL Syntax Rules:**
- Each node ID must be defined exactly ONCE in the entire diagram
- Do NOT reference a node defined in one subgraph from inside another subgraph
- For cross-subgraph relationships, use subgraph-to-subgraph edges:
  `SubgraphA -->|uses| SubgraphB`
- Keep nodes simple: `A[Label]` - avoid complex nesting
- Prefer flat structure over deeply nested subgraphs
"""

MERMAID_FLOWCHART_GUIDELINES = """
**Flowchart/Graph Diagram Rules:**
- Use `graph TD` (top-down) for vertical orientation - NEVER use `graph LR`
- Use labeled edges where useful: `-->|uses|`, `-->|calls|`, `-->|returns|`
- Group related components with subgraphs if helpful
- Keep to 5-8 key components

**Edge Label Syntax (CRITICAL):**
- CORRECT: `A -->|label| B` (pipe syntax for labels)
- INCORRECT: `A -- label --> B` (DO NOT USE - spaces in node names cause errors)
- For decision diamonds with yes/no branches:
  - CORRECT: `D{Decision} -->|Yes| E` and `D -->|No| F`
  - INCORRECT: `D -- Yes --> E` (this creates invalid node "D -- Yes")

**Decision Diamond Syntax:**
- Use curly braces for decision nodes: `D{Is Valid?}`
- Connect with labeled edges: `D -->|Yes| Success` and `D -->|No| Error`

**Correct structure:**
```mermaid
graph TD
    subgraph Core[Core Module]
        A[ClassA]
        B[ClassB]
        A -->|uses| B
    end
    subgraph Games[Game Implementations]
        C[Game1]
        D[Game2]
    end
    Games -->|depends on| Core
```

**Decision flow example:**
```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C{Valid?}
    C -->|Yes| D[Continue]
    C -->|No| E[Handle Error]
```

**INCORRECT (DO NOT DO THIS):**
```mermaid
graph TD
    subgraph Core[Core]
        A[ClassA]
    end
    subgraph Other[Other]
        A -->|bad| B  %% ERROR: A is defined in Core, cannot use inside Other
    end
```

```mermaid
graph TD
    A --> B
    B -- Yes --> C  %% ERROR: "B -- Yes" is not valid syntax
```
"""

MERMAID_SEQUENCE_GUIDELINES = """
**Sequence Diagram Rules:**
- First line must be exactly: `sequenceDiagram`
- Immediately add `autonumber` to show message order
- Define ALL participants at the beginning using `participant` keyword
- Use concise names or aliases: `participant A as AuthService`

**Arrow Syntax (NOT flowchart-style):**
- `->>` solid line with arrowhead (requests/calls)
- `-->>` dotted line with arrowhead (responses/returns)
- `->x` solid line with X (error/failed)
- `-)` solid line with open arrow (async, fire-and-forget)
- NEVER use flowchart-style labels like `A--|label|-->B`
- Always use colon for labels: `A->>B: My Label`

**Activation boxes:**
- `A->>+B: Start` (activate B)
- `B-->>-A: End` (deactivate B)

**Structural elements:**
- `loop LoopText ... end`
- `alt ConditionText ... else ... end`
- `opt OptionalText ... end`
- `par ParallelText ... and ... end`

**Example:**
```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant C as Controller
    participant S as Service
    U->>+C: request()
    C->>+S: process()
    S-->>-C: result
    C-->>-U: response
```
"""

MERMAID_CLASS_GUIDELINES = """
**Class Diagram Rules:**
- Use `classDiagram` to represent classes, methods, and relationships
- Show inheritance with `<|--`
- Show composition/aggregation with `*--` or `o--`
- Include 2-3 key methods per class (use `+` for public, `-` for private)
- Show relationships with labeled arrows: `--> : uses`
- Keep to 5-8 key classes; focus on central components

**Example:**
```mermaid
classDiagram
    class BaseClass {{
        +method1()
        +method2()
    }}
    class DerivedClass {{
        +specialMethod()
    }}
    BaseClass <|-- DerivedClass
    DerivedClass --> Helper : uses
```
"""

# =============================================================================
# SYSTEM PROMPT
# =============================================================================

# System prompt used for all page types
SYSTEM_PROMPT = """You are an expert technical writer creating clear, accurate documentation for a Python codebase.

Your writing should be:
- **Accurate**: Based solely on the provided context
- **Clear**: Easy to understand for developers familiar with Python
- **Concise**: No unnecessary verbosity or filler
- **Well-structured**: Using proper Markdown headings and formatting

Important rules:
- Do NOT invent or hallucinate classes, functions, or features not mentioned in the context
- Do NOT include generic Python tutorials or explanations of basic concepts
- Do NOT add disclaimers, apologies, or meta-commentary about the documentation
- ONLY reference symbols (classes, functions, methods) that appear in the provided context"""


def build_overview_prompt(context: PageContext, wiki_pages_summary: str = "") -> str:
    """
    Build prompt for project overview pages.

    These pages introduce the codebase at a high level.
    """
    # Use wiki pages summary if no actual code nodes (files/classes/functions)
    has_code_nodes = (
        len(context.files) > 0
        or len(context.classes) > 0
        or len(context.functions) > 0
        or len(context.methods) > 0
    )

    if not has_code_nodes and wiki_pages_summary:
        context_section = wiki_pages_summary
    else:
        context_section = context.get_formatted_context()

    return f"""You are writing the **{context.page_title}** page for this project's wiki.

## Context

{context_section}

## Your Task

Write a comprehensive Markdown page that:

1. **Introduction** (1-2 paragraphs)
   - What is this project?
   - What problems does it solve?
   - Who is it for?

2. **Architecture Overview** (2-3 paragraphs + diagram)
   - What are the main components/subsystems?
   - How do they fit together?
   - What are the key design patterns or architectural choices?
   - **Include a Mermaid diagram** showing the high-level module architecture

3. **Key Modules** (organized section)
   - Brief description of each major module and its purpose
   - How modules relate to each other

4. **Getting Started** (practical guidance)
   - Where should a new contributor start?
   - What are the most important files or classes to understand first?

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_FLOWCHART_GUIDELINES}

**For this page:** In section 2, include a `graph TD` diagram showing main modules as subgraphs or simple nodes. Use short, descriptive names from the modules listed above.

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for subsections
- Keep the total page to 800-1200 words
- Focus on the big picture, not implementation details
- Only reference modules, classes, and files mentioned in the context above
- DO NOT hallucinate or invent features not mentioned in the context
- Place the Mermaid diagram in the Architecture Overview section, after the text explanation

Generate the complete Markdown page now."""


def build_module_prompt(context: PageContext) -> str:
    """
    Build prompt for module documentation pages.

    These pages provide in-depth coverage of specific modules/packages.
    """
    return f"""You are writing the **{context.page_title}** documentation page.

## Page Description

{context.page_description}

## Context

{context.get_formatted_context()}

## Your Task

Write a comprehensive Markdown page that documents this module in depth:

1. **Overview** (1-2 paragraphs)
   - What is this module responsible for?
   - When and why would a developer use it?

2. **Architecture & Design** (with diagram)
   - Design patterns used
   - Key abstractions or interfaces
   - Data flow or control flow
   - **Include a Mermaid diagram** showing the module's architecture

3. **Key Components**
   - Main classes and their responsibilities
   - Important functions and what they do
   - How components interact with each other

4. **Usage Examples** (if applicable)
   - Common use cases
   - How to use the main classes/functions
   - Integration points with other modules

5. **Important Details**
   - Configuration or setup requirements
   - Caveats, gotchas, or important notes

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_FLOWCHART_GUIDELINES}

{MERMAID_CLASS_GUIDELINES}

**For this page:** In section 2, include a `graph TD` or `classDiagram` showing main classes/functions and how they interact. Use actual names from the context above.

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for subsections
- Reference actual class/function names from the context
- Do NOT invent new APIs or features
- Keep to 1000-1500 words
- Be specific and technical (assume reader knows Python)
- Place the Mermaid diagram in the Architecture section

Generate the complete Markdown page now."""


def build_guide_prompt(context: PageContext) -> str:
    """
    Build prompt for guide/tutorial pages.

    These pages teach how to accomplish specific tasks.
    """
    return f"""You are writing a **{context.page_title}** guide page.

## Page Description

{context.page_description}

## Context

{context.get_formatted_context()}

## Your Task

Write a practical, tutorial-style Markdown guide that:

1. **Introduction** (1 paragraph)
   - What will this guide teach?
   - Who is this for?

2. **Concepts** (if applicable)
   - Key concepts the reader needs to understand
   - How the relevant classes/functions fit together

3. **Step-by-Step Guide**
   - Clear, numbered steps or sections
   - Explain what to do and why
   - Reference actual classes/methods from the context

4. **Examples**
   - Show how to use the APIs mentioned in the context
   - Illustrate common patterns or workflows

5. **Common Pitfalls** (if applicable)
   - Things to watch out for
   - Common mistakes and how to avoid them

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_SEQUENCE_GUIDELINES}

**For this page:** In the Concepts section, include a `sequenceDiagram` showing the typical workflow or interaction pattern. Focus on the core flow (max 10-15 messages).

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for subsections
- Be practical and hands-on, not just theoretical
- Only use classes/functions that appear in the context
- Keep to 800-1200 words
- Use code snippets (simple examples, not full implementations)
- Place the Mermaid diagram in the Concepts section to illustrate the flow

Generate the complete Markdown page now."""


def build_reference_prompt(context: PageContext) -> str:
    """
    Build prompt for API reference pages.

    These pages provide detailed API documentation.
    """
    return f"""You are writing the **{context.page_title}** API reference page.

## Page Description

{context.page_description}

## Context

{context.get_formatted_context()}

## Your Task

Write a detailed API reference page in Markdown:

1. **Overview** (1 paragraph)
   - What APIs are covered on this page?
   - What are they used for?

2. **Classes**
   - For each important class:
     - Purpose and responsibility
     - Key methods and what they do
     - Important attributes or properties

3. **Functions**
   - For each important function:
     - What it does
     - When to use it
     - Key parameters and return values (if apparent from summary)

4. **Usage Notes**
   - Common patterns for using these APIs
   - How different classes/functions work together

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_CLASS_GUIDELINES}

**For this page:** Include a `classDiagram` showing relationships between main classes. Focus on inheritance, composition, and key methods.

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for class/function names
- Be concise and factual
- Organize by class/module, not alphabetically
- Only document APIs that appear in the context
- Keep to 1000-1500 words
- Focus on "what" and "when", not "how" (implementation details)
- Place the Mermaid class diagram after the Classes section

Generate the complete Markdown page now."""


def build_architecture_prompt(context: PageContext) -> str:
    """
    Build prompt for architecture/design pages.

    These pages explain system design and patterns.
    """
    return f"""You are writing the **{context.page_title}** architecture documentation.

## Page Description

{context.page_description}

## Context

{context.get_formatted_context()}

## Your Task

Write an architectural overview page in Markdown:

1. **System Overview** (1-2 paragraphs)
   - What part of the system does this cover?
   - What are the high-level goals or design principles?

2. **Architecture**
   - Key components and their roles
   - How components interact
   - Data flow or control flow
   - Design patterns used

3. **Key Abstractions**
   - Important interfaces or base classes
   - Extension points or customization mechanisms

4. **Design Decisions**
   - Why was it designed this way?
   - Trade-offs and considerations

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_FLOWCHART_GUIDELINES}

**For this page:** In the Architecture section, include a `graph TD` diagram showing main components and their interactions. Group related components with subgraphs.

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for subsections
- Focus on design and structure, not implementation
- Reference actual classes/interfaces from the context
- Keep to 800-1200 words
- Place the Mermaid diagram in the Architecture section

Generate the complete Markdown page now."""


def build_concept_prompt(context: PageContext) -> str:
    """
    Build prompt for conceptual explanation pages.

    These pages explain important concepts or abstractions.
    """
    return f"""You are writing a **{context.page_title}** concept explanation page.

## Page Description

{context.page_description}

## Context

{context.get_formatted_context()}

## Your Task

Write a conceptual explanation page in Markdown:

1. **What Is It?** (1-2 paragraphs)
   - Define the concept
   - Why does it matter in this codebase?

2. **How It Works** (detailed explanation)
   - Explain the concept using the classes/functions from the context
   - Show how different pieces fit together
   - Explain the flow or lifecycle

3. **Key Classes/Functions**
   - Which classes/functions implement this concept?
   - What role does each play?

4. **Examples** (if applicable)
   - Concrete examples showing the concept in action
   - Common usage patterns

{MERMAID_GENERAL_GUIDELINES}

{MERMAID_FLOWCHART_GUIDELINES}

**For this page:** In the "How It Works" section, include a `graph TD` diagram showing data/control flow. Highlight key decision points with diamond shapes `{{{{}}}}`.

## Guidelines

- Use `#` for the page title, `##` for major sections, `###` for subsections
- Explain concepts clearly for someone new to this codebase
- Reference actual symbols from the context
- Keep to 800-1200 words
- Balance theory with practical examples
- Place the Mermaid diagram in the "How It Works" section

Generate the complete Markdown page now."""


def get_prompt_for_page(
    context: PageContext, wiki_pages_summary: str = ""
) -> tuple[str, str]:
    """
    Get the appropriate (system, user) prompt pair for a page.

    Args:
        context: PageContext with page kind and metadata
        wiki_pages_summary: Optional wiki structure summary (for overview pages)

    Returns:
        Tuple of (system_prompt, user_prompt)
    """
    if context.page_kind == "overview":
        user_prompt = build_overview_prompt(context, wiki_pages_summary)
    elif context.page_kind == "module":
        user_prompt = build_module_prompt(context)
    elif context.page_kind == "guide":
        user_prompt = build_guide_prompt(context)
    elif context.page_kind == "reference":
        user_prompt = build_reference_prompt(context)
    elif context.page_kind == "architecture":
        user_prompt = build_architecture_prompt(context)
    elif context.page_kind == "concept":
        user_prompt = build_concept_prompt(context)
    else:
        # Fallback to module prompt
        user_prompt = build_module_prompt(context)

    return SYSTEM_PROMPT, user_prompt
