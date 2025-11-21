# Gameplay Mechanics

## What Is It?

Gameplay mechanics refer to the rules and systems that define how players interact with a game and its environment. In the context of the provided codebase, gameplay mechanics encompass the various dynamics present in different game environments, such as GridWorld, Capture, and the Eight Puzzle. These mechanics dictate how agents behave, how game states evolve, and how players can achieve objectives, ultimately shaping the player experience.

Understanding gameplay mechanics is crucial in this codebase because it allows developers to create engaging and balanced game experiences. By implementing well-defined mechanics, the codebase can facilitate diverse gameplay strategies, enhance player interaction, and ensure that the game remains challenging and enjoyable.

## How It Works

The gameplay mechanics in this codebase are implemented through a series of interconnected classes and functions that manage game states, agent behaviors, and environmental interactions. Each game environment has its own set of rules and dynamics, which are encapsulated within specific classes.

### Capture Game Mechanics

In the Capture game, the `Game` class is central to managing the overall gameplay. It initializes the game state by creating a `GameState` object that includes the game board and agent information. The `get_initial_state` method of the `Game` class sets up the game configuration based on a random number generator, a board instance, and agent details. This ensures that each game starts with a unique configuration, enhancing replayability.

The `GameState` class plays a critical role in managing the dynamics of the game. It tracks team interactions, agent statuses, and game board activities. Methods like `get_legal_actions` and `is_ghost` allow for the evaluation of agent capabilities and conditions, influencing how agents can interact with each other and the environment.

Agents in the Capture game are defined by the `DefensiveAgent` and `OffensiveAgent` classes. Each agent type has distinct strategies: the `DefensiveAgent` focuses on distance calculations and defensive maneuvers, while the `OffensiveAgent` prioritizes scoring and food distance metrics. The `game_start` method in each agent class prepares them for gameplay by processing the game board's state, ensuring they can make informed decisions based on their initialized parameters.

### GridWorld Mechanics

In the GridWorld environment, the `Game` class similarly manages the state and progression of the game. It initializes game states and processes actions within a Markov Decision Process (MDP) framework. The `GridWorldMDP` class models the MDP, managing valid actions, state transitions, and rewards. This structured approach allows agents to navigate the grid world effectively, adhering to defined rules and rewards.

The `GameState` class in GridWorld tracks agent performance and game outcomes, providing visual representations of game elements. It integrates methods for processing agent actions and updating visual sprites based on Q-values, ensuring a cohesive gameplay experience.

### Eight Puzzle Mechanics

The Eight Puzzle game is managed by the `EightPuzzleSearchProblem` class, which encapsulates the puzzle's initial state and provides methods to generate the starting node, check for goal states, and retrieve successor nodes based on legal moves. The `EightPuzzleNode` class represents the state of the puzzle, allowing for efficient comparisons and storage in search algorithms.

The `EightPuzzleBoard` class manages the state and gameplay of the puzzle, providing methods to check if the puzzle is solved, retrieve legal moves, and apply actions to create new board configurations. This structured approach allows for the exploration of the puzzle's state space, enabling the identification of potential moves and the assessment of whether a given configuration is a solution.

### Flow and Lifecycle

The flow of gameplay mechanics begins with the initialization of the game environment through the respective `main` functions in each game module. These functions set up the game based on command-line arguments, initializing components like agents and game boards. Once the game starts, the `Game` class manages the progression, invoking methods to process turns and update game states based on player actions.

Agents interact with the game state through their respective classes, making decisions based on the current state and their defined strategies. The `GameState` class continuously updates to reflect these interactions, ensuring that the game progresses logically and that players can achieve their objectives.

## Key Classes/Functions

### Capture Game

- **`Game`**: Manages the overall gameplay, initializes the game state, and orchestrates the flow of the game.
- **`GameState`**: Tracks the dynamics of the game, including agent statuses and interactions, and provides methods for evaluating actions.
- **`DefensiveAgent`**: Implements defensive strategies, focusing on distance calculations and feature weights.
- **`OffensiveAgent`**: Implements offensive strategies, prioritizing scoring and food distance metrics.

### GridWorld

- **`Game`**: Similar to the Capture game, it manages the state and progression of the GridWorld environment.
- **`GridWorldMDP`**: Models the Markov Decision Process, managing valid actions, state transitions, and rewards.
- **`GameState`**: Tracks agent performance and game outcomes while providing visual representations of game elements.

### Eight Puzzle

- **`EightPuzzleSearchProblem`**: Manages the state and operations of the Eight Puzzle game, facilitating the search for a solution.
- **`EightPuzzleNode`**: Represents a node in the context of the eight-puzzle problem, encapsulating the state of an `EightPuzzleBoard` object.
- **`EightPuzzleBoard`**: Manages the state and gameplay of the Eight Puzzle, providing methods for checking if the puzzle is solved and applying actions.

## Examples

### Capture Game Example

To start a game of Capture, a developer might invoke the `main` function in `bin.py`, which initializes the game environment based on command-line arguments. The game will then create a `GameState`, and agents will be initialized as either offensive or defensive based on their respective classes. As the game progresses, agents will make decisions influenced by their strategies, interacting with the game state to achieve their objectives.

### GridWorld Example

In GridWorld, a developer can configure the game by specifying parameters such as agent type and noise level through the command line. The `main` function in `bin.py` will set up the MDP and initialize the game state. Agents will then navigate the grid, making decisions based on the current state and the defined rewards, showcasing the mechanics of decision-making in a structured environment.

### Eight Puzzle Example

For the Eight Puzzle, a developer can run the game using the `main` function in `bin.py`, which will parse command-line arguments and initialize the puzzle state. The `EightPuzzleSearchProblem` will facilitate the search for a solution, allowing the player to explore legal moves and ultimately solve the puzzle.

These examples illustrate how the gameplay mechanics are implemented and how different components interact within the codebase, providing a foundation for creating engaging game experiences.