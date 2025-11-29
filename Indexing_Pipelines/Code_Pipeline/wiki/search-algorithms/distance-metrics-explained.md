# Understanding Distance Metrics

## What Is It?

Distance metrics are mathematical measures used to quantify the distance between two points in a given space. In the context of navigation and search algorithms, these metrics play a crucial role in determining the most efficient path from one location to another. The choice of distance metric can significantly impact the performance of search algorithms, influencing both the accuracy of the pathfinding and the computational resources required.

In this codebase, distance metrics are implemented to facilitate navigation through game boards, particularly in maze environments. By providing various distance calculations, the codebase enables efficient pathfinding and decision-making for agents, enhancing gameplay and AI behavior.

## How It Works

The distance metrics in this codebase are primarily implemented in the `distance.py` module, which provides a range of functions and classes to calculate and manage distances between positions on a game board. The key components include:

### DistanceFunction Class

The `DistanceFunction` class serves as a flexible tool for calculating distance metrics based on two positional inputs. It implements a callable interface, allowing instances to be invoked like functions. The `__call__` method takes two positions and an optional game state, returning a float that represents the distance metric between the two positions. This class can be used to implement various distance calculations, such as Manhattan or Euclidean distances.

### DistancePreComputer Class

The `DistancePreComputer` class is designed for pre-computing distances on a game board, particularly in maze navigation. It maintains a mapping of distances between positions, which can be queried efficiently. The `compute` method establishes this mapping, while `get_distance` and `get_distance_default` methods allow retrieval of distances between two positions. This pre-computation is essential for optimizing search algorithms, as it reduces the need for real-time calculations during pathfinding.

### Distance Calculation Functions

Several functions in the `distance.py` module provide specific distance calculations:

- **Manhattan Distance**: The `manhattan_distance` function calculates the distance between two positions on a grid by summing the absolute differences of their coordinates. This metric is particularly useful for grid-based navigation.
  
- **Euclidean Distance**: The `euclidean_distance` function computes the straight-line distance between two positions, providing a more direct measure of distance in continuous spaces.

- **Maze Distance**: The `maze_distance` function calculates the shortest path between two positions in a maze, utilizing a specified search algorithm (defaulting to breadth-first search). This function is critical for navigating complex maze structures where walls and obstacles are present.

### Heuristic Functions

Heuristics are used to estimate the cost of reaching a goal from a given position. The codebase includes heuristic functions such as `manhattan_heuristic` and `euclidean_heuristic`, which leverage their respective distance calculations to provide estimates that guide search algorithms. The `distance_heuristic` function serves as a general-purpose heuristic that defaults to Manhattan distance but can be customized.

### Flow and Lifecycle

The lifecycle of distance metrics begins with the initialization of a game board, where positions are defined. When a search problem is instantiated, the `DistancePreComputer` computes the distances between relevant positions. As the search algorithm progresses, it utilizes the pre-computed distances and heuristics to evaluate potential paths and make decisions. The combination of accurate distance calculations and efficient retrieval mechanisms ensures that the search algorithms operate effectively, leading to optimal navigation solutions.

## Key Classes/Functions

### Classes

- **DistanceFunction**: Implements a callable interface for distance calculations between two positions.
- **DistancePreComputer**: Manages pre-computed distances on a game board, enabling efficient distance queries.
- **DistanceTest**: Validates the accuracy of distance calculations through a series of tests.

### Functions

- **manhattan_distance**: Computes the Manhattan distance between two positions.
- **euclidean_distance**: Calculates the Euclidean distance between two positions.
- **maze_distance**: Finds the shortest path in a maze between two positions.
- **manhattan_heuristic**: Provides a heuristic based on Manhattan distance.
- **euclidean_heuristic**: Offers a heuristic based on Euclidean distance.

## Examples

### Example 1: Using DistanceFunction

To calculate the Manhattan distance between two positions, you can instantiate the `DistanceFunction` class and call it with the desired positions:

```python
distance_function = DistanceFunction()
distance = distance_function(position_a, position_b, game_state)
```

### Example 2: Pre-computing Distances

Before running a search algorithm, you can pre-compute distances using the `DistancePreComputer`:

```python
distance_pre_computer = DistancePreComputer(board)
distance_pre_computer.compute()
distance = distance_pre_computer.get_distance(position_a, position_b)
```

### Example 3: Implementing Heuristics

When implementing a search algorithm, you can use heuristics to guide the search process:

```python
heuristic_value = manhattan_heuristic(current_node, goal_node)
```

This value can then be used to prioritize which nodes to explore next in the search algorithm.

By leveraging these distance metrics and associated classes, developers can create efficient navigation systems that enhance gameplay and AI decision-making in the codebase.