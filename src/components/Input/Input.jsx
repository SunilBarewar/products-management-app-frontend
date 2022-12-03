import React from 'react'

const Input = ({value,name,className,placeholder,type,reference,handleChange}) => {
  return (
    <input onChange={handleChange} type={type} placeholder = {placeholder}  className={className} name={name} value={value} ref = {reference?reference:null}      />
  )
}

export default Input