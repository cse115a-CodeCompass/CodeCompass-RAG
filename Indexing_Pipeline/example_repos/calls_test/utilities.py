"""
Utility functions in a separate file to test cross-file CALLS edges.
"""


def external_helper():
    """A helper function in a different file."""
    return "external_helper"


def external_math(a, b):
    """A math function in a different file."""
    return a * b + 10


def external_formatter(value):
    """Format a value as a string."""
    return f"Value: {value}"


def chain_function():
    """Function that calls another function in the same file."""
    # Should create edge: chain_function -> external_helper
    return external_helper().upper()


class ExternalCalculator:
    """A calculator class in a separate file."""

    def __init__(self, base):
        self.base = base

    def calculate(self, x):
        """Calculate using external_math."""
        # Should create edge: ExternalCalculator.calculate -> external_math
        return external_math(self.base, x)

    def format_result(self, result):
        """Format a calculation result."""
        # Should create edge: ExternalCalculator.format_result -> external_formatter
        return external_formatter(result)
