import React from 'react';
import './Input.module.css';

type Props = {
  width : number;
  type : string;
};

const Input:React.FC<Props> = ({width, type}) => {
  return (
    <div className='box'>
      <input type={type} style={{width: `${width}mm`}} />
    </div>
  )
}

export default Input;