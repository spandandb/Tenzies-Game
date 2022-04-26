import './App.css';
import React, { useState, useEffect } from 'react';
import Dice from './Components/Dice';

function App() {
  const [dice, setDice] = useState(allNewDie());

  function allNewDie() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push({ value: randomDice(), isSelected: false });
    }
    return randomArray;
  }

  const allDice = dice.map((die) => {
    return <Dice value={die.value} />;
  });

  function rollDice() {
    setDice(allNewDie());
  }

  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  return (
    <div className='main--container'>
      <div className='dice--container'>{allDice}</div>
      <div className='btn--container'>
        <button className='roll-btn' onClick={rollDice}>
          Roll
        </button>
      </div>
    </div>
  );
}

export default App;
