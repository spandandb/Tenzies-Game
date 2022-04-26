import React from 'react';

export default function Dice(props) {
  const selected = props.isSelected ? 'selected--die' : '';
  return (
    <div className={'component--die ' + selected} onClick={props.selectDie}>
      <h2 className='die--num'>{props.value}</h2>
    </div>
  );
}
