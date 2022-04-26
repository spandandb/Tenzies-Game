import './App.css';
import React, { useState, useEffect } from 'react';
import Dice from './Components/Dice';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDie());

  function allNewDie() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push({
        value: randomDice(),
        isSelected: false,
        id: nanoid()
      });
    }
    return randomArray;
  }

  function selectDie(id) {
    setDice((prevState) => {
      return prevState.map((die) => {
        return die.id === id ? { ...die, isSelected: !die.isSelected } : die;
      });
    });
  }

  const allDice = dice.map((die) => {
    return (
      <Dice
        key={die.id}
        value={die.value}
        isSelected={die.isSelected}
        selectDie={() => selectDie(die.id)}
      />
    );
  });

  function rollDice() {
    setDice((prevDie) => {
      return prevDie.map((die) => {
        return die.isSelected ? die : generateNewDie();
      });
    });
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isSelected: false,
      id: nanoid()
    };
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
