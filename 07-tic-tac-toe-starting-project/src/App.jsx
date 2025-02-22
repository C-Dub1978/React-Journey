import { Player } from "./components/Player";
import Gameboard from "./components/GameBoard";
import { useState } from 'react';

const player1 = {
  name: 'Player Me',
  symbol: 'X'
};

const player2 = {
  name: 'Player You',
  symbol: 'O'
};

function App() {
  // Since we need the current player in both the Player and Gameboard components, we'll keep it here.
  // This is called 'lifting state', as its a shared state so will go to the next highest ancestor.
  const [currentPlayer, setCurrentPlayer] = useState(player1);

  function onSquareSuccess() {
    if (currentPlayer.symbol === player1.symbol) {
      setCurrentPlayer(player2);
    }
    else {
      setCurrentPlayer(player1);
    }
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerInfo={player1} currentPlayer={currentPlayer} />
          <Player playerInfo={player2} currentPlayer={currentPlayer} />
        </ol>
      <Gameboard currentPlayer={currentPlayer} onSquare={onSquareSuccess} />
      </div>
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
