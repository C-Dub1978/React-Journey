import { Player } from "./components/Player";
import Gameboard from "./components/GameBoard";
import { useState } from "react";
import Logger from "./components/Logger";
import GameOver from "./components/GameOver";

export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

function isPlayer(comparator, player) {
  return comparator.name === player.name && comparator.symbol === player.symbol;
}

function deriveActivePlayer(gameTurns) {
  let activePlayer = player1;
  if (gameTurns.length > 0 && isPlayer(gameTurns[0].player, player1)) {
    activePlayer = player2;
  }
  return activePlayer;
}

const player1 = {
  name: "Player Me",
  symbol: "X",
};

const player2 = {
  name: "Player You",
  symbol: "O",
};

function App() {
  // We are commenting out the next line - we can get current player information in gameTurns, so no need for the extra state!
  // const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [gameTurns, setGameTurns] = useState([]);

  // Derived state to handle the current player using gameTurns instead of its own state slice
  const activePlayer = deriveActivePlayer(gameTurns);

  // Handle the game board!
  console.log("Game turns: ", gameTurns);
  let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { rowIndex, squareIndex } = square;
    gameBoard[rowIndex][squareIndex] = player.symbol;
  });

  // Derive whether or not there is a winner after this component re-renders
  let winner = null;
  let draw = false;
  for (const combo of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = activePlayer;
    } else if (gameTurns.length === 9 && !winner) {
      draw = true;
    }
  }

  function handleSelectSquare(rowIndex, squareIndex) {
    // Lets go ahead and lift the gameboard state up to the App compoennt. Since we want to
    // Manage both the logs AND the game actions in one place as opposed to 2 (the gameboard and logger),
    // We will manage it right here.
    setGameTurns((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns);
      const newTurns = [
        {
          square: { rowIndex, squareIndex },
          player: activePlayer,
        },
        ...prevTurns,
      ];
      return newTurns;
    });
  }

  function onRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerInfo={player1} currentPlayer={activePlayer} />
          <Player playerInfo={player2} currentPlayer={activePlayer} />
        </ol>
        { (winner || draw ) && <GameOver winner={winner} restart={onRestart}/> }
        <Gameboard onSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Logger gameTurns={gameTurns} />
    </main>
  );
}

export default App;

/**
 * Need - the following components:
 * - Player
 * - Players
 * - Gameboard
 * - Logger
 */
