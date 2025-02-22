import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard({currentPlayer, onSquare}) {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    
    function handleSelectSquare(rowIndex, squareIndex) {
        if (gameBoard[rowIndex][squareIndex] === null) {
            setGameBoard((prevGameBoard) => {
                const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
                newGameBoard[rowIndex][squareIndex] = currentPlayer.symbol;
                return newGameBoard;
            });
            onSquare();
        } else {
            console.log('Square already selected, please make another selection!');
        }  
    }

    return  <ol id="game-board">
        {/** Remember angular's sort of *ngFor in React is just using javascript to .map() an array!  */}
        {gameBoard.map((row, rowIndex) => {
            return <li key={rowIndex+'row'}>
            <ol>
                {row.map((playerSymbol, squareIndex) => {
                    return <li key={squareIndex+'square'}>
                        <button onClick={() => handleSelectSquare(rowIndex, squareIndex)}>{playerSymbol}</button>
                    </li>
                })}
            </ol>
        </li>
        }
        )}
    </ol>;
}