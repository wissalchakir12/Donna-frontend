import React from 'react';
import './Input.module.css';

type Props = {
  width : number;
  type : string;
  className ? : string ;
  placeholder : string;
};

const Input:React.FC<Props> = ({width, type,className,placeholder}) => {
  return (
    <div className='box'>
      <input placeholder={placeholder} type={type} style={{width: `${width}mm`}} className={className} />
    </div>
  )
}

export default Input;