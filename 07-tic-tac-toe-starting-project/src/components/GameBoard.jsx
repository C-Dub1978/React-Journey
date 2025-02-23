
// By using a single object (the gameturns array) in the parent component (App), by lifting state up, we now
// are able to use the gameTurns array to build a game board in this component, as well as output the list in the logger
// component without having to manage 2 different states. Previously we were managing game board state in here, and we would have
// had to manage the game turns state inside the logger, but since its really just the same data, we are now managing state
// in the parent component rather than 2 separate states. Cleaner and more efficient.
export default function Gameboard({ onSquare, gameTurns }) {
    console.log('Game turns: ', gameTurns);
    let gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    gameTurns.forEach((turn) => {
        const { square, player } = turn;
        const { rowIndex, squareIndex } = square;
        gameBoard[rowIndex][squareIndex] = player.symbol;
    });
    
    function checkSquareSelectValidity(rowIndex, squareIndex) {
        if (gameBoard[rowIndex][squareIndex] === null) {
            onSquare(rowIndex, squareIndex);
        } else {
            console.log('Square already selected, please choose another');
        }
    }

    return  <ol id="game-board">
        {/** Remember angular's sort of *ngFor in React is just using javascript to .map() an array!  */}
        {gameBoard.map((row, rowIndex) => {
            return <li key={rowIndex+'row'}>
            <ol>
                {row.map((playerSymbol, squareIndex) => {
                    return <li key={squareIndex+'square'}>
                        <button onClick={() => checkSquareSelectValidity(rowIndex, squareIndex)}>{playerSymbol}</button>
                    </li>
                })}
            </ol>
        </li>
        }
        )}
    </ol>;
}