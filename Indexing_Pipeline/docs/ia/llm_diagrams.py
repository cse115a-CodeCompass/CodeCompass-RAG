"""
LLM-based Mermaid diagram generation.

Generates semantically meaningful diagrams using LLM understanding of code,
with labeled edges like -->|calls|, -->|uses|, -->|inherits|.
"""

import re
from typing import Dict, List, Optional

from Indexing_Pipeline.core.graph_model import Graph, NodeLabel
from Indexing_Pipeline.docs.ia.diagram_prompts import (
    ARCHITECTURE_DIAGRAM_PROMPT,
    CLASS_RELATIONSHIP_PROMPT,
    MODULE_ARCHITECTURE_PROMPT,
    SEQUENCE_DIAGRAM_PROMPT,
    DATA_FLOW_PROMPT,
    get_diagram_prompt,
)
from Indexing_Pipeline.docs.ia.diagram_context import (
    build_diagram_context,
    build_class_summaries,
    build_sequence_context,
)
from Indexing_Pipeline.docs.llm.providers import LLMProvider


class LLMDiagramGenerator:
    """Generate Mermaid diagrams using LLM."""

    def __init__(self, provider: LLMProvider, verbose: bool = False):
        """
        Initialize the LLM diagram generator.

        Args:
            provider: LLM provider to use for generation
            verbose: Print debug information
        """
        self.provider = provider
        self.verbose = verbose

    async def generate_diagram_for_page(
        self,
        graph: Graph,
        page_title: str,
        page_description: str,
        page_kind: str,
        modules: List[str],
        node_ids: List[str],
        summaries: Dict[str, str],
        max_retries: int = 1,
    ) -> Optional[str]:
        """
        Generate an appropriate diagram for a wiki page.

        Selects the diagram type based on page_kind and generates
        using LLM with relevant context.

        Args:
            graph: Knowledge graph
            page_title: Title of the page
            page_description: Description of the page
            page_kind: Type of page (overview, module, reference, etc.)
            modules: List of module paths in scope
            node_ids: List of node IDs in scope
            summaries: Dict mapping node_id -> summary text
            max_retries: Number of retries on invalid diagram

        Returns:
            Mermaid diagram string or None if generation failed
        """
        # Build context for the prompt
        context = build_diagram_context(
            graph=graph,
            page_title=page_title,
            page_description=page_description,
            modules=modules,
            node_ids=node_ids,
            summaries=summaries,
        )

        # Select appropriate prompt based on page kind
        if page_kind in ("overview", "architecture"):
            return await self._generate_with_retry(
                ARCHITECTURE_DIAGRAM_PROMPT.format(
                    page_title=page_title,
                    page_description=page_description,
                    context=context,
                ),
                max_retries=max_retries,
            )
        elif page_kind == "module":
            return await self._generate_with_retry(
                MODULE_ARCHITECTURE_PROMPT.format(
                    module_name=page_title,
                    module_description=page_description,
                    context=context,
                ),
                max_retries=max_retries,
            )
        elif page_kind == "reference":
            # Reference pages benefit from class diagrams
            class_ids = [
                nid for nid in node_ids
                if graph.nodes.get(nid) and graph.nodes[nid].label == NodeLabel.CLASS
            ]
            if class_ids:
                class_context = build_class_summaries(graph, class_ids, summaries)
                return await self._generate_with_retry(
                    CLASS_RELATIONSHIP_PROMPT.format(class_summaries=class_context),
                    max_retries=max_retries,
                )
        elif page_kind == "guide":
            # Guides can use sequence diagrams
            return await self._generate_with_retry(
                SEQUENCE_DIAGRAM_PROMPT.format(
                    feature_name=page_title,
                    flow_context=context,
                ),
                max_retries=max_retries,
            )
        elif page_kind == "concept":
            # Concepts can use data flow diagrams
            return await self._generate_with_retry(
                DATA_FLOW_PROMPT.format(
                    module_name=page_title,
                    context=context,
                ),
                max_retries=max_retries,
            )

        # Fallback to architecture diagram
        return await self._generate_with_retry(
            ARCHITECTURE_DIAGRAM_PROMPT.format(
                page_title=page_title,
                page_description=page_description,
                context=context,
            ),
            max_retries=max_retries,
        )

    async def generate_architecture_diagram(
        self,
        graph: Graph,
        page_title: str,
        page_description: str,
        modules: List[str],
        node_ids: List[str],
        summaries: Dict[str, str],
    ) -> Optional[str]:
        """
        Generate an architecture/flow diagram for a page.

        Args:
            graph: Knowledge graph
            page_title: Title of the page
            page_description: Description of the page
            modules: List of module paths
            node_ids: List of node IDs in scope
            summaries: Dict mapping node_id -> summary

        Returns:
            Mermaid diagram string or None
        """
        context = build_diagram_context(
            graph=graph,
            page_title=page_title,
            page_description=page_description,
            modules=modules,
            node_ids=node_ids,
            summaries=summaries,
        )

        prompt = ARCHITECTURE_DIAGRAM_PROMPT.format(
            page_title=page_title,
            page_description=page_description,
            context=context,
        )

        return await self._generate_with_retry(prompt)

    async def generate_class_diagram(
        self,
        graph: Graph,
        class_ids: List[str],
        summaries: Dict[str, str],
    ) -> Optional[str]:
        """
        Generate a class relationship diagram.

        Args:
            graph: Knowledge graph
            class_ids: List of class node IDs
            summaries: Dict mapping node_id -> summary

        Returns:
            Mermaid class diagram string or None
        """
        class_context = build_class_summaries(graph, class_ids, summaries)
        prompt = CLASS_RELATIONSHIP_PROMPT.format(class_summaries=class_context)

        return await self._generate_with_retry(prompt)

    async def generate_sequence_diagram(
        self,
        graph: Graph,
        entry_point_id: str,
        feature_name: str,
        summaries: Dict[str, str],
    ) -> Optional[str]:
        """
        Generate a sequence diagram for a feature flow.

        Args:
            graph: Knowledge graph
            entry_point_id: Starting function/method node ID
            feature_name: Name of the feature
            summaries: Dict mapping node_id -> summary

        Returns:
            Mermaid sequence diagram string or None
        """
        flow_context = build_sequence_context(graph, entry_point_id, summaries)
        prompt = SEQUENCE_DIAGRAM_PROMPT.format(
            feature_name=feature_name,
            flow_context=flow_context,
        )

        return await self._generate_with_retry(prompt)

    async def _generate_with_retry(
        self,
        prompt: str,
        max_retries: int = 1,
    ) -> Optional[str]:
        """
        Generate diagram with retry on validation failure.

        Args:
            prompt: The prompt to send to LLM
            max_retries: Number of retries on invalid diagram

        Returns:
            Valid Mermaid diagram or None
        """
        for attempt in range(max_retries + 1):
            success, response, error = await self.provider.generate_text(
                system_prompt="You are a technical documentation assistant that generates Mermaid diagrams. Output only valid Mermaid syntax wrapped in ```mermaid fences.",
                user_prompt=prompt,
                temperature=0.3,
            )

            if not success or not response:
                if self.verbose:
                    print(f"    LLM diagram generation failed: {error}")
                continue

            # Extract and validate the diagram
            diagram = self._extract_mermaid(response)
            if diagram:
                return diagram

            if self.verbose:
                print(f"    Invalid diagram on attempt {attempt + 1}, retrying...")

            # Add error context for retry
            if attempt < max_retries:
                prompt = f"{prompt}\n\nPrevious attempt was invalid. Please ensure proper Mermaid syntax."

        return None

    def _extract_mermaid(self, response: str) -> Optional[str]:
        """
        Extract ```mermaid ... ``` block from LLM response.

        Args:
            response: Raw LLM response text

        Returns:
            Extracted and validated Mermaid diagram or None
        """
        # Try to find mermaid code block
        pattern = r"```mermaid\s*(.*?)\s*```"
        match = re.search(pattern, response, re.DOTALL)

        if match:
            diagram = match.group(1).strip()
            if self._validate_mermaid(diagram):
                return f"```mermaid\n{diagram}\n```"

        # Try without mermaid fence (some LLMs omit it)
        pattern = r"```\s*(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie).*?```"
        match = re.search(pattern, response, re.DOTALL | re.IGNORECASE)

        if match:
            diagram = match.group(0).strip("```").strip()
            if self._validate_mermaid(diagram):
                return f"```mermaid\n{diagram}\n```"

        return None

    def _validate_mermaid(self, diagram: str) -> bool:
        """
        Basic validation of Mermaid syntax.

        Args:
            diagram: Raw diagram content (without fences)

        Returns:
            True if diagram appears valid
        """
        if not diagram:
            return False

        # Check for valid diagram type declaration
        valid_types = [
            "flowchart",
            "graph",
            "sequencediagram",
            "classdiagram",
            "statediagram",
            "erdiagram",
            "gantt",
            "pie",
        ]

        first_line = diagram.split("\n")[0].strip().lower()

        # Check if first line starts with a valid diagram type
        has_valid_type = any(first_line.startswith(t) for t in valid_types)

        if not has_valid_type:
            return False

        # Check for minimum content (at least some nodes/connections)
        lines = [line.strip() for line in diagram.split("\n") if line.strip()]
        if len(lines) < 3:  # Type declaration + at least 2 content lines
            return False

        return True


async def generate_llm_diagram(
    graph: Graph,
    provider: LLMProvider,
    page_title: str,
    page_description: str,
    page_kind: str,
    modules: List[str],
    node_ids: List[str],
    summaries: Dict[str, str],
    verbose: bool = False,
) -> Optional[str]:
    """
    Convenience function to generate an LLM diagram for a page.

    Args:
        graph: Knowledge graph
        provider: LLM provider
        page_title: Title of the page
        page_description: Description of the page
        page_kind: Type of page
        modules: List of module paths
        node_ids: List of node IDs
        summaries: Dict mapping node_id -> summary
        verbose: Print debug info

    Returns:
        Mermaid diagram string or None
    """
    generator = LLMDiagramGenerator(provider, verbose=verbose)
    return await generator.generate_diagram_for_page(
        graph=graph,
        page_title=page_title,
        page_description=page_description,
        page_kind=page_kind,
        modules=modules,
        node_ids=node_ids,
        summaries=summaries,
    )
