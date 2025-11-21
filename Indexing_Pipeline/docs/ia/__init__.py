"""
Wiki Information Architecture (IA) generation.

This package provides tools for generating structured wiki page hierarchies
using LLMs, based on module summaries and code graph structure.
"""

from docs.ia.page_spec import (
    PageSpec,
    PageKind,
    WikiIA,
    create_page,
)
from docs.ia.ia_generator import (
    generate_ia,
    generate_global_ia,
    generate_module_subpages,
)
from docs.ia.scope_computer import (
    compute_page_scope,
    compute_all_scopes,
    validate_coverage,
)

__all__ = [
    "PageSpec",
    "PageKind",
    "WikiIA",
    "create_page",
    "generate_ia",
    "generate_global_ia",
    "generate_module_subpages",
    "compute_page_scope",
    "compute_all_scopes",
    "validate_coverage",
]
