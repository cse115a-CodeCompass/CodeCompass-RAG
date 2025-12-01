# Cost Calculation Methods

## Introduction
This guide provides practical instructions on implementing and utilizing various cost calculation methods for search nodes, which are crucial for effective pathfinding in game environments. It is intended for developers working with the `pacai` codebase who are familiar with Python and seek to enhance their understanding of cost functions and heuristics in search algorithms.

## Concepts
Understanding the following key concepts is essential for effectively utilizing cost calculation methods:

- **Cost Functions**: Functions that determine the cost associated with moving from one search node to another. They can be based on various criteria, such as distance or directional preferences.
- **Heuristics**: Estimates of the cost to reach a goal from a given node, which guide the search process efficiently.
- **Search Nodes**: Representations of states in a search problem, encapsulating positions and associated costs.

The relevant classes and functions in the `pacai` codebase include:

- **Cost Functions**: `longitudinal_cost_function`, `stay_east_cost_function`, `stay_west_cost_function`, and `unit_cost_function` in `common.py`.
- **Distance Calculation**: The `DistanceFunction` and `DistancePreComputer` classes in `distance.py` for calculating distances and managing distance mappings.
- **Heuristics**: Functions like `manhattan_heuristic`, `euclidean_heuristic`, and `null_heuristic` that provide estimates for search algorithms.

## Step-by-Step Guide

### 1. Define Your Cost Function
Start by selecting or defining a cost function that suits your search problem. The `common.py` module provides several options:

```python
from pacai.search.common import longitudinal_cost_function

# Example of using a longitudinal cost function
cost = longitudinal_cost_function(search_node)
```

### 2. Implement Heuristics
Choose a heuristic that will guide your search algorithm. For example, if you are working with a grid-based environment, you might use the Manhattan distance heuristic:

```python
from pacai.search.distance import manhattan_heuristic

# Example of calculating the heuristic
heuristic_value = manhattan_heuristic(current_node, goal_node)
```

### 3. Utilize Distance Calculations
If your search involves navigating a maze or grid, use the `DistanceFunction` or `DistancePreComputer` classes to manage distance calculations effectively:

```python
from pacai.search.distance import DistancePreComputer

# Initialize the distance pre-computer with the game board
distance_computer = DistancePreComputer(board)
distance_computer.compute()  # Pre-compute distances

# Get the distance between two positions
distance = distance_computer.get_distance(position_a, position_b)
```

### 4. Integrate with Search Algorithms
Incorporate your cost functions and heuristics into your search algorithm. For instance, when implementing A* search, combine the cost from the cost function and the heuristic:

```python
total_cost = cost + heuristic_value
```

### 5. Test Your Implementation
Use the `DistanceTest` class to validate the accuracy of your cost functions and heuristics. This ensures that your calculations are reliable:

```python
from pacai.search.distance_test import DistanceTest

# Run tests to validate distance calculations
distance_test = DistanceTest()
distance_test.test_manhattan_base()
distance_test.test_euclidean_base()
```

## Examples

### Example: Using a Cost Function in a Search Node
Here’s how you can implement a simple search node with a longitudinal cost function:

```python
class MySearchNode:
    def __init__(self, position):
        self.position = position

    def calculate_cost(self):
        return longitudinal_cost_function(self)

node = MySearchNode(position)
cost = node.calculate_cost()
print(f"Cost of the node: {cost}")
```

### Example: Implementing a Heuristic in A* Search
In an A* search algorithm, you might calculate the total cost as follows:

```python
def a_star_search(start_node, goal_node):
    open_set = [start_node]
    while open_set:
        current_node = open_set.pop(0)
        if current_node == goal_node:
            return reconstruct_path(current_node)

        for neighbor in get_neighbors(current_node):
            cost = current_node.g + longitudinal_cost_function(neighbor)
            heuristic = manhattan_heuristic(neighbor, goal_node)
            total_cost = cost + heuristic
            # Add neighbor to open set with total cost
```

## Common Pitfalls

- **Neglecting Cost Function Selection**: Choosing an inappropriate cost function can lead to inefficient pathfinding. Ensure that the cost function aligns with the specific requirements of your search problem.
- **Ignoring Heuristic Accuracy**: A poorly designed heuristic can mislead the search algorithm. Validate your heuristics against known outcomes to ensure they provide reliable estimates.
- **Not Precomputing Distances**: If using distance calculations, always precompute distances using the `DistancePreComputer` class before querying distances to avoid performance issues.

By following this guide, you will be able to implement and utilize various cost calculation methods effectively, enhancing the performance of your search algorithms in the `pacai` codebase.