import { useState } from "react";

export function Player({ name, symbol, editFn }) {
  const [isEditing, setIsEditing] = useState(false);

  const onEditClicked = () => {
    setIsEditing((curr) => !curr);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">
            { isEditing ? 'im editing' : name }
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEditClicked}>Edit</button>
    </li>
  );
}
