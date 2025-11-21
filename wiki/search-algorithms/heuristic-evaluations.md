# Heuristic Evaluations in Search

This guide will teach you how to implement heuristic evaluations to enhance search efficiency and optimize solution exploration within the `pacai/search` module. It is intended for developers familiar with Python who are looking to improve their search algorithms through effective heuristic strategies.

## Concepts

Before diving into the implementation steps, it's essential to understand some key concepts:

- **Heuristic Evaluation**: A heuristic is a rule of thumb that helps estimate the cost to reach a goal from a given state. In search algorithms, heuristics guide the exploration process, allowing for more efficient pathfinding.
  
- **Distance Metrics**: The `distance.py` module provides various distance metrics, such as Manhattan and Euclidean distances, which can be used as heuristics in search algorithms. The `DistanceFunction` class allows for dynamic distance calculations based on game states.

- **Search Nodes and Problems**: Classes like `FoodSearchNode`, `FoodSearchProblem`, `PositionSearchNode`, and `PositionSearchProblem` encapsulate the states and logic needed to perform searches in specific contexts, such as food collection or position navigation.

## Step-by-Step Guide

### Step 1: Define Your Search Problem

Start by defining the search problem you want to solve. For example, if you're working with food collection, you can create an instance of `FoodSearchProblem`.

```python
from pacai.search.food import FoodSearchProblem

problem = FoodSearchProblem(start_position, food_positions)
```

### Step 2: Choose a Heuristic Function

Select an appropriate heuristic function to guide your search. You can use built-in heuristics like `manhattan_heuristic` or `euclidean_heuristic` from the `distance.py` module.

```python
from pacai.search.distance import manhattan_heuristic

heuristic = manhattan_heuristic
```

### Step 3: Implement the Search Algorithm

Use the defined problem and heuristic in your search algorithm. For example, if you're implementing A* search, you can utilize the `get_successor_nodes` method from your problem class to explore potential paths.

```python
def a_star_search(problem, heuristic):
    start_node = problem.get_starting_node()
    open_set = [start_node]
    closed_set = set()

    while open_set:
        current_node = open_set.pop(0)
        
        if problem.is_goal_node(current_node):
            return current_node  # Goal found
        
        closed_set.add(current_node)
        
        for successor in problem.get_successor_nodes(current_node):
            if successor in closed_set:
                continue
            
            # Calculate cost with heuristic
            cost = successor.cost + heuristic(successor, problem)
            open_set.append(successor)
```

### Step 4: Test Your Implementation

After implementing your search algorithm, validate its correctness and efficiency. Use the `DistanceTest` class to ensure that your distance calculations and heuristics are functioning as expected.

```python
from pacai.search.distance_test import DistanceTest

test = DistanceTest()
test.test_manhattan_base()
test.test_euclidean_base()
```

## Examples

### Example 1: Using a Heuristic in Food Search

Here’s how you can set up a food search problem with a heuristic:

```python
from pacai.search.food import FoodSearchProblem
from pacai.search.distance import manhattan_heuristic

# Initialize the problem
food_positions = [(1, 2), (3, 4)]
start_position = (0, 0)
problem = FoodSearchProblem(start_position, food_positions)

# Define the heuristic
def heuristic(node, problem):
    return manhattan_heuristic(node.position, problem.goal_position)

# Run the search
solution = a_star_search(problem, heuristic)
```

### Example 2: Calculating Distances

You can calculate distances between positions using the `DistanceFunction` class:

```python
from pacai.search.distance import DistanceFunction

distance_function = DistanceFunction()
distance = distance_function(position_a, position_b, game_state)
print(f"Distance: {distance}")
```

## Common Pitfalls

- **Invalid Positions**: Ensure that the positions you use in your search problem are valid and accessible. If you attempt to calculate distances or access nodes that are out of bounds or blocked, your algorithm may fail.

- **Heuristic Selection**: Choosing an inappropriate heuristic can lead to inefficient searches. Always test multiple heuristics to find the one that best fits your problem context.

- **State Management**: Be careful with how you manage the state of your search nodes. Ensure that you correctly track visited nodes to avoid infinite loops and redundant calculations.

By following these steps and examples, you can effectively implement heuristic evaluations in your search algorithms, enhancing their efficiency and optimizing solution exploration.