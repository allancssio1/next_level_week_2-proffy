import React, { InputHTMLAttributes } from 'react'
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Imput: React.FC<InputProps> = ({ label, name, ...rest }) => { 
  //a destruturação da propriedade props que em outras está sendo passada como props.aVariavel.
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  )
}

export default Imput