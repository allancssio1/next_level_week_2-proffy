import React, { TextareaHTMLAttributes } from 'react'
import './style.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => { 
  //a destruturação da propriedade props que em outras está sendo passada como props.aVariavel.
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  )
}

export default Textarea