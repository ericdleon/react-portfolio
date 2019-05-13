import React from 'react';
import '../App.css';

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      Theme
    </button>
  );
}
export default Button;
