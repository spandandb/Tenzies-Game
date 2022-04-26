import React from 'react';

export default function Dice(props) {
  return (
    <div className='component--die'>
      <h2 className='die--num'>{props.value}</h2>
    </div>
  );
}
