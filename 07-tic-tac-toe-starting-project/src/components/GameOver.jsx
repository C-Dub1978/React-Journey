export default function GameOver({ winner, restart }) {
    return <div id="game-over">
        <h2>GAME OVER!!</h2>
        { winner && <p>{ winner.name } won!</p>}
        { !winner && <p>Its a draw =(</p> }
        <p><button onClick={restart}>Rematch!</button></p>
    </div>
}