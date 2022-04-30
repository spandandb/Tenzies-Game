import React from 'react';

function YouWinPopover(props) {
  return (
    <div className='popover--outer'>
      <div className='youwin--popover'>
        <nav className='youwin--popover--nav'>
          <h2> 😊 Congrats ! </h2>
          <button onClick={props.close}>
            <b>x</b>
          </button>
        </nav>
        <p className='you--win'>You have won the game.</p>
        <p className='roll--count'>
          <i> Number of rolls required to win :</i>
          <span style={{ color: 'yellow', fontWeight: 'bold' }}>
            {props.rollCount}
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default YouWinPopover;
