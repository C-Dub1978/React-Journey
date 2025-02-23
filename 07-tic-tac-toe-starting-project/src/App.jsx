import { Player } from "./components/Player";
import Gameboard from "./components/GameBoard";
import { useState } from "react";
import Logger from "./components/Logger";

const player1 = {
  name: "Player Me",
  symbol: "X",
};

const player2 = {
  name: "Player You",
  symbol: "O",
};

function App() {
  // Since we need the current player in both the Player and Gameboard components, we'll keep it here.
  // This is called 'lifting state', as its a shared state so will go to the next highest ancestor.
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, squareIndex) {
    // First, handle updating the current active player.
    setCurrentPlayer((current) => current.symbol === player1.symbol ? player2 : player1);
    // Lets go ahead and lift the gameboard state up to the App compoennt. Since we want to
    // Manage both the logs AND the game actions in one place as opposed to 2 (the gameboard and logger),
    // We will manage it right here.
    setGameTurns((prevTurns) => {
      let activePlayer = player1;
      // Use the state from the entire prevTurns array to determine who the last player was that just performed an action, 
      // so that we don't have issues with timing schedules. Since were using setGameTurns state here, we will use that to
      // then set state on the gameTurns array. Since weve already scheduled an update using setCurrentPlayer state, we want to
      // not depend on that state update even though it should happen pretty quickly....
      if (prevTurns.length && prevTurns[0].player.symbol === 'X') {
        activePlayer = player2;
      }
      const newTurns = [
        {
          square: { rowIndex, squareIndex },
          player: activePlayer,
        },
        ...prevTurns,
      ];
      return newTurns;
    });
    // Finally, we want to update the game board itself.
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerInfo={player1} currentPlayer={currentPlayer} />
          <Player playerInfo={player2} currentPlayer={currentPlayer} />
        </ol>
        <Gameboard onSquare={handleSelectSquare} gameTurns={gameTurns} />
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
