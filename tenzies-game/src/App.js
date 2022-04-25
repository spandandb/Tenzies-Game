import './App.css';
import React from 'react';
import Dice from './Components/Dice';

function App() {
  return (
    <div className='main--container'>
      <div className='dice--container'>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>
      <div className='btn--container'>
        <button className='roll-btn'>Roll</button>
      </div>
    </div>
  );
}

export default App;
