import { Player } from "./components/Player";

function App() {
  function editName() {

  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={'Player Me'} symbol={'X'} />
          <Player name={'Player You'} symbol={'O'} />
        </ol>
      GAME BOARD
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
