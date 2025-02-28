export default function Logger({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.square.rowIndex}-${turn.square.squareIndex}`}>
          {turn.player.name} selected row {turn.square.rowIndex + 1}, square{" "}
          {turn.square.squareIndex + 1}
        </li>
      ))}
    </ol>
  );
}
