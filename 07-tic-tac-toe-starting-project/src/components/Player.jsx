import { useState } from "react";

export function Player({ name, symbol, editFn }) {
  const [isEditing, setIsEditing] = useState(false);
  let nameValue = <span className="player-name">{ name }</span>

  const onEditClicked = () => {
    // Calling the state hook here actually schedules react to update/re-render DOM
    setIsEditing((curr) => !curr);
  }

  if (isEditing) {
    nameValue = <input type="text" required />
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{ nameValue }</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEditClicked}>{ isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
