"""
Test file to verify CALLS edge creation for different call patterns.

This file tests:
1. Function → Function calls
2. Method → Method calls (same class)
3. Method → Method calls (different class)
4. Method → Function calls
5. Function → Method calls
6. Cross-file function → function calls
7. Cross-file method → function calls
"""

from utilities import external_helper, external_math, external_formatter, chain_function, ExternalCalculator

# ============= Functions =============

def helper_function():
    """A simple helper function."""
    return "helper"


def utility_function(x, y):
    """A utility function."""
    return x + y


def function_calls_function():
    """Function that calls another function."""
    # Should create edge: function_calls_function → helper_function
    result = helper_function()

    # Should create edge: function_calls_function → utility_function
    value = utility_function(1, 2)

    return result, value


def function_calls_method():
    """Function that calls a method on an object."""
    calculator = Calculator(10)

    # Should create edge: function_calls_method → Calculator.add
    result = calculator.add(5)

    return result


def function_calls_cross_file():
    """Function that calls functions from another file."""
    # Should create CROSS-FILE edge: function_calls_cross_file → external_helper
    helper_result = external_helper()

    # Should create CROSS-FILE edge: function_calls_cross_file → external_math
    math_result = external_math(5, 10)

    # Should create CROSS-FILE edge: function_calls_cross_file → chain_function
    chain_result = chain_function()

    # Should create CROSS-FILE edge: function_calls_cross_file → external_formatter
    formatted = external_formatter(math_result)

    return helper_result, math_result, chain_result, formatted


# ============= Classes =============

class Calculator:
    """Simple calculator class with methods that call each other."""

    def __init__(self, initial_value):
        self.value = initial_value

    def add(self, x):
        """Add to current value."""
        # Should create edge: Calculator.add → Calculator._validate
        self._validate(x)
        self.value += x
        return self.value

    def subtract(self, x):
        """Subtract from current value."""
        # Should create edge: Calculator.subtract → Calculator._validate
        self._validate(x)
        self.value -= x
        return self.value

    def multiply(self, x):
        """Multiply current value."""
        # Should create edge: Calculator.multiply → Calculator._validate
        self._validate(x)

        # Should create edge: Calculator.multiply → Calculator._log_operation
        self._log_operation("multiply", x)

        self.value *= x
        return self.value

    def _validate(self, x):
        """Private method to validate input."""
        if not isinstance(x, (int, float)):
            raise ValueError("Input must be a number")

    def _log_operation(self, op_name, value):
        """Private method to log operations."""
        # Should create edge: Calculator._log_operation → helper_function
        prefix = helper_function()
        print(f"{prefix}: {op_name} with {value}")

    def reset(self):
        """Reset calculator to zero."""
        # Should create edge: Calculator.reset → utility_function
        self.value = utility_function(0, 0)

    def compute_with_external(self, x, y):
        """Method that calls cross-file functions."""
        # Should create CROSS-FILE edge: Calculator.compute_with_external → external_math
        result = external_math(x, y)

        # Should create CROSS-FILE edge: Calculator.compute_with_external → external_formatter
        formatted = external_formatter(result)

        return formatted


class AdvancedCalculator(Calculator):
    """Advanced calculator that extends Calculator."""

    def __init__(self, initial_value):
        super().__init__(initial_value)
        self.history = []

    def power(self, exponent):
        """Raise value to a power."""
        # Should create edge: AdvancedCalculator.power → AdvancedCalculator._validate (inherited)
        self._validate(exponent)

        # Should create edge: AdvancedCalculator.power → AdvancedCalculator._record_history
        self._record_history("power", exponent)

        self.value = self.value ** exponent
        return self.value

    def _record_history(self, operation, value):
        """Record operation in history."""
        self.history.append((operation, value))


class MathHelper:
    """Helper class with static utility methods."""

    @staticmethod
    def double(x):
        """Double a value."""
        # Should create edge: MathHelper.double → utility_function
        return utility_function(x, x)

    @staticmethod
    def square(x):
        """Square a value."""
        return x * x


def complex_function():
    """Function with multiple call types."""
    # Function → Function
    base = helper_function()

    # Function → Method (via class instantiation)
    calc = Calculator(0)

    # Function → Method calls
    calc.add(5)
    calc.multiply(2)

    # Function → Static method
    doubled = MathHelper.double(10)

    # Function → Method on different class
    advanced = AdvancedCalculator(100)
    advanced.power(2)

    return base, calc.value, doubled, advanced.value


class WorkflowManager:
    """Class that calls methods from other classes."""

    def __init__(self):
        self.calculator = Calculator(0)
        self.helper = MathHelper()

    def run_workflow(self):
        """Method that calls methods from other class instances."""
        # Should create edge: WorkflowManager.run_workflow → Calculator.add
        self.calculator.add(10)

        # Should create edge: WorkflowManager.run_workflow → Calculator.multiply
        self.calculator.multiply(2)

        # Should create edge: WorkflowManager.run_workflow → MathHelper.double
        result = MathHelper.double(5)

        # Should create edge: WorkflowManager.run_workflow → WorkflowManager._finalize
        return self._finalize(result)

    def run_cross_file_workflow(self):
        """Method that calls cross-file methods and functions."""
        # Should create CROSS-FILE edge: WorkflowManager.run_cross_file_workflow → external_helper
        helper = external_helper()

        # Create external calculator instance
        ext_calc = ExternalCalculator(100)

        # Should create CROSS-FILE edge: WorkflowManager.run_cross_file_workflow → ExternalCalculator.calculate
        calc_result = ext_calc.calculate(5)

        # Should create CROSS-FILE edge: WorkflowManager.run_cross_file_workflow → ExternalCalculator.format_result
        formatted = ext_calc.format_result(calc_result)

        return helper, formatted

    def _finalize(self, value):
        """Private method to finalize workflow."""
        # Should create edge: WorkflowManager._finalize → utility_function
        return utility_function(value, self.calculator.value)


# ============= Main Entry Point =============

def main():
    """Main entry point - calls everything."""
    # Function → Function
    function_calls_function()
    function_calls_method()
    complex_function()

    # Test cross-file function calls
    function_calls_cross_file()

    # Test method calling cross-file functions
    calc = Calculator(0)
    calc.compute_with_external(3, 7)

    # Create workflow
    workflow = WorkflowManager()
    workflow.run_workflow()
    workflow.run_cross_file_workflow()

    print("All call patterns tested, including cross-file calls!")


if __name__ == "__main__":
    main()
