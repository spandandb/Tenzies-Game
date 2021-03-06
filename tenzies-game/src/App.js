import './App.css';
import React, { useState, useEffect } from 'react';
import Dice from './Components/Dice';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import YouWinPopover from './Components/YouWinPopover';

function App() {
  const [dice, setDice] = useState(allNewDie());
  const [popover, setPopover] = useState(false);
  const [tenzies, setTenzies] = useState(false);
  const [rollNo, setRollNo] = useState(0);
  const [btnView, setBtnView] = useState(false);

  useEffect(() => {
    const allDieSelected = dice.every((die) => die.isSelected);
    const firstValue = dice[0].value;
    const allDieValuesSame = dice.every((die) => die.value === firstValue);
    if (allDieSelected && allDieValuesSame) {
      setTenzies(true);
      setPopover(true);
    }
  }, [dice]);

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

  // function mouseOver() {
  //   setBtnView(true);
  // }

  // function mouseLeave() {
  //   setBtnView(false);
  // }

  function rollDice() {
    setBtnView(true);
    setTimeout(() => {
      setBtnView(false);
    }, 200);
    if (tenzies) {
      setDice(allNewDie());
      setTenzies(false);
      setRollNo(0);
    } else {
      setDice((prevDie) => {
        return prevDie.map((die) => {
          return die.isSelected ? die : generateNewDie();
        });
      });
    }
    setRollNo((prevRollNo) => prevRollNo + 1);
    // setBtnView(false);
  }

  function generateNewDie() {
    return {
      value: randomDice(),
      isSelected: false,
      id: nanoid()
    };
  }

  function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function closePopover() {
    setPopover(false);
  }

  return (
    <>
      <div className='main--outer'>
        <div className='main--container'>
          {tenzies && <Confetti />}
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className='dice--container'>{allDice}</div>
          {popover && <YouWinPopover close={closePopover} rollCount={rollNo} />}
          <div className='btn--container'>
            <button
              className={btnView ? 'roll-btn roll-btn-mouse' : 'roll-btn'}
              onClick={rollDice}
            >
              {tenzies ? 'New Game' : 'Roll'}
            </button>
          </div>
        </div>
      </div>
      <h2 className='made--by'>Created by ???? Spandan Das Barman</h2>
    </>
  );
}

export default App;
