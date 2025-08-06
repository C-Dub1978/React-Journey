import {useState, useRef  } from 'react';

export default function Player() {
  const inputtedValue = useRef();

  const [playerName, setPlayerName] = useState();

  const handleButtonClick = () => {
    setPlayerName(inputtedValue.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown Entity'}</h2>
      <p>
        { /** Ok using the useRef hook seems to be the same as tagging an Angular html element with a #name, and using viewchild */}
        <input ref={inputtedValue} type="text"  />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
