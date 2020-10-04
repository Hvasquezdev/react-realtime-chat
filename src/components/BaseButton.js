import React from 'react';
import '../assets/css/BaseButton.css';

export const BaseButton = (props) => {
  return (
    <button
      className='base-button'
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
