import React from 'react';

import './Button.css';

/**
 * 
 * @param {Property} props Be the value of whatever being assigned by other component
 * @returns reusable Button
 */
const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
