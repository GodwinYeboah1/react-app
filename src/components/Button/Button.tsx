import {ReactNode, useState} from 'react'
import Alert from '../Alert';
import styled from './Button.module.css';

interface Props {
    children: ReactNode;
    // Union type
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'told';
    onCLick: () => void;
}



const Button = ({children, color = 'primary', onCLick}: Props) => {
  return (
  <>
    <button 
      type="button"
      className={[styled.btn , 'btn-' + color].join(' ')}
      onClick={()=> onCLick()}>
      {children}
      </button>
  </>
  )
}

export default Button