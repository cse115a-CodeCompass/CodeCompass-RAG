# Testing Utility Functions

This guide will teach you best practices and frameworks for testing utility functions within the `pacai/util/` module. It is intended for developers who are familiar with Python and want to ensure the reliability and correctness of their utility functions through effective testing strategies.

## Concepts

Before diving into the testing process, it's essential to understand the key components involved in the `pacai/util/` module:

- **Testing Frameworks**: The module utilizes testing classes such as `AliasTest`, `ContainersTest`, `JSONTest`, and `ParseTest` to validate different utility functions and classes.
- **Utility Functions and Classes**: The module includes various utility classes like `Alias`, `SimpleComparable`, and container classes such as `Stack`, `Queue`, and `PriorityQueue`. Understanding these classes will help you write effective tests.

The testing classes typically follow a structured approach to validate functionality, ensuring that each method behaves as expected under various conditions.

## Step-by-Step Guide

### 1. Set Up Your Testing Environment

Ensure you have a testing framework like `unittest` installed. You can use the built-in `unittest` module that comes with Python.

```bash
pip install unittest
```

### 2. Create Test Files

For each utility class or function, create a corresponding test file. For example, if you are testing the `Alias` class, you would create a file named `alias_test.py`.

### 3. Write Test Cases

Use the existing test classes as templates. Here’s how you can structure your tests:

#### Example: Testing the `Alias` Class

```python
import unittest
from pacai.util.alias import Alias

class TestAlias(unittest.TestCase):
    def test_alias_creation(self):
        alias = Alias("short_name", "long_name")
        self.assertEqual(alias.short_name, "short_name")
        self.assertEqual(alias.long_name, "long_name")

    def test_alias_repr(self):
        alias = Alias("short_name", "long_name")
        self.assertEqual(repr(alias), "('short_name' -> 'long_name')")
```

### 4. Validate Container Functionality

For container classes like `Stack`, `Queue`, and `PriorityQueue`, you can use the `ContainersTest` class as a reference to validate their push and pop operations.

#### Example: Testing the `Stack` Class

```python
from pacai.util.containers import Stack

class TestStack(unittest.TestCase):
    def setUp(self):
        self.stack = Stack()

    def test_push_pop(self):
        self.stack.push(1)
        self.stack.push(2)
        self.assertEqual(self.stack.pop(), 2)
        self.assertEqual(self.stack.pop(), 1)

    def test_empty_stack(self):
        self.assertTrue(self.stack.is_empty())
```

### 5. Test JSON Functionality

For JSON-related conversions, utilize the `JSONTest` class to ensure that serialization and deserialization work correctly.

#### Example: Testing JSON Conversion

```python
from pacai.util.json_test import JSONTest

class TestJSONConversion(JSONTest):
    def test_dictconverter(self):
        # Add your test cases here
        pass
```

### 6. Run Your Tests

Execute your tests using the command line to ensure everything is functioning as expected.

```bash
python -m unittest discover -s tests
```

## Examples

### Testing Boolean Parsing

For testing the boolean parsing functionality, you can create a test class that utilizes the `ParseTest` class.

```python
from pacai.util.parse import boolean

class TestBooleanParsing(unittest.TestCase):
    def test_valid_inputs(self):
        self.assertTrue(boolean("true"))
        self.assertFalse(boolean("false"))

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            boolean("invalid")
```

### Testing Alias Lookup

You can also test the alias lookup functionality to ensure it retrieves the correct long name.

```python
from pacai.util.alias import lookup

class TestAliasLookup(unittest.TestCase):
    def test_lookup(self):
        self.assertEqual(lookup("short_name"), "long_name")
```

## Common Pitfalls

- **Ignoring Edge Cases**: Always consider edge cases when writing tests. For instance, ensure that your stack handles popping from an empty stack gracefully.
- **Not Cleaning Up**: If your tests modify global state or external resources, ensure you clean up after your tests to avoid side effects on subsequent tests.
- **Overlooking Error Handling**: Make sure to test how your functions handle invalid inputs or unexpected conditions. This is crucial for maintaining robustness.

By following these steps and examples, you can effectively test the utility functions in the `pacai/util/` module, ensuring that they perform reliably and correctly in various scenarios.