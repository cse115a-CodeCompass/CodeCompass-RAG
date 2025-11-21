# Data Structure Utilities

## Overview

The Data Structure Utilities module provides a comprehensive set of utility functions and classes for managing various data structures, including stacks, queues, and priority queues. It is designed to facilitate the creation, manipulation, and testing of these data structures, ensuring that developers can efficiently manage collections of items with specific behaviors. This module is particularly useful in applications that require organized data handling, such as simulations, games, or any scenario where data needs to be processed in a structured manner.

Developers would use this module when they need to implement data structures that adhere to specific operational rules, such as last-in-first-out (LIFO) for stacks or first-in-first-out (FIFO) for queues. The utility functions provided streamline the process of managing these structures, allowing for robust and maintainable code. Additionally, the module includes testing capabilities to validate the functionality of these data structures, ensuring reliability in production environments.

## Key Components

### Main Classes

- **Alias**: Manages alias objects with short and long names, ensuring uniqueness and proper formatting. It provides methods for initialization and string representation, making it easier to handle aliases within the codebase.

- **ContainersTest**: Validates the functionality of various container types, specifically Stack, Queue, and PriorityQueue. It ensures that push and pop operations work as expected and that exceptions are managed correctly.

- **FringeContainer**: An abstract base class for container-like structures, providing methods to check if the container is empty, retrieve the number of items, and define abstract methods for adding and removing items.

- **PriorityQueue**: Implements a priority queue using a heap data structure, allowing for efficient retrieval of the highest priority item. It provides methods to push items with associated priority and pop the highest priority item.

- **PriorityQueueWithFunction**: Similar to `PriorityQueue`, but allows the priority to be determined by a user-defined function, providing flexibility in how items are prioritized.

- **Stack**: Implements a stack data structure, allowing items to be added and removed in a last-in-first-out manner.

- **Queue**: Implements a queue data structure, allowing items to be processed in a first-in-first-out manner.

### Important Functions

- **boolean**: Converts inputs into boolean values, interpreting both boolean values and their string representations. It raises exceptions for invalid inputs, ensuring robust boolean handling.

- **display_number**: Formats numeric values as strings for display, ensuring consistent presentation of numerical data.

- **get_parser**: Creates and configures an `argparse.ArgumentParser` instance for command-line options, facilitating the setup of command-line interfaces.

- **run_games**: Executes a series of training and non-training games based on provided arguments, logging results as needed.

### Interaction Between Components

The classes and functions in this module interact closely to provide a cohesive framework for managing data structures. For example, the `Stack`, `Queue`, and `PriorityQueue` classes rely on the `FringeContainer` abstract base class to define common behaviors, while the `ContainersTest` class validates their functionality. Utility functions like `boolean` and `display_number` support the overall usability of the module by providing essential data handling capabilities.

## Architecture & Design

### Design Patterns Used

The module employs several design patterns, including:

- **Abstract Base Class**: The `FringeContainer` class serves as an abstract base for container-like structures, defining a common interface for push and pop operations.

- **Factory Pattern**: The `Reference` class uses a factory pattern to create instances from structured data, facilitating the management of reference information.

### Key Abstractions or Interfaces

The primary abstractions in this module are the container classes (`Stack`, `Queue`, `PriorityQueue`, and `PriorityQueueWithFunction`) and the `FringeContainer` abstract base class. These abstractions define the expected behaviors for managing collections of items, ensuring that derived classes implement the necessary methods for item manipulation.

### Data Flow or Control Flow

Data flow within the module typically follows these steps:

1. **Initialization**: Containers are initialized using their respective constructors, which set up the internal state for item management.

2. **Item Manipulation**: Items are added or removed from containers using the `push` and `pop` methods, which modify the internal state of the containers.

3. **Testing**: The `ContainersTest` class validates the functionality of these containers, ensuring that they behave as expected through systematic testing of their operations.

## Usage Examples

### Common Use Cases

1. **Stack Operations**: To manage a collection of items in a LIFO manner, use the `Stack` class:
   ```python
   stack = Stack()
   stack.push('item1')
   stack.push('item2')
   item = stack.pop()  # Returns 'item2'
   ```

2. **Queue Operations**: For FIFO processing, use the `Queue` class:
   ```python
   queue = Queue()
   queue.push('item1')
   queue.push('item2')
   item = queue.pop()  # Returns 'item1'
   ```

3. **Priority Queue**: To manage items based on priority:
   ```python
   pq = PriorityQueue()
   pq.push(('item1', 1))  # Lower number indicates higher priority
   pq.push(('item2', 2))
   item = pq.pop()  # Returns 'item1'
   ```

### Integration Points with Other Modules

This module can be integrated with other parts of a codebase that require structured data management. For instance, it can work alongside simulation modules where game states are managed using stacks or queues, or in applications that require prioritized task management.

## Important Details

### Configuration or Setup Requirements

No specific configuration is required to use the Data Structure Utilities module. However, it is essential to ensure that any dependencies, such as the `argparse` module for command-line parsing, are available in the environment.

### Caveats, Gotchas, or Important Notes

- Ensure that the `push` and `pop` operations are used correctly to avoid underflow or overflow conditions in the stack and queue implementations.
- When using `PriorityQueueWithFunction`, be mindful of the priority function's implementation, as it directly affects the ordering of items.
- The testing classes (`ContainersTest`, `AliasTest`) should be run to validate the functionality of the data structures before deploying them in production environments.

This documentation provides a comprehensive overview of the Data Structure Utilities module, highlighting its key components, architecture, usage, and important considerations for developers.