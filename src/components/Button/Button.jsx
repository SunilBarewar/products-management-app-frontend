import React from 'react'

const Button = ({label,handleFunction,className,disabled}) => {
  return (
    <button className={className} onClick={handleFunction} disabled = {disabled} >{label}</button>
  )
}

export default Button