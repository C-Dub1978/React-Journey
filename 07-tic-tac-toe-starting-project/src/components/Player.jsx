import { useState } from "react";

export function Player({ initialName, symbol, editFn }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let nameElement = <span className="player-name">{playerName}</span>;

  const onEditClicked = () => {
    // Calling the state hook here actually schedules react to update/re-render DOM
    // Also, if you ever need to get the previous value, always use the callback function
    setIsEditing((curr) => !curr);
  };

  const onUpdateName = (e) => {
    setPlayerName(e.target.value);
  }

  if (isEditing) {
    nameElement = <input
                  type="text"
                  required
                  value={playerName}
                  onChange={onUpdateName}
                  />;
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{nameElement}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEditClicked}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
