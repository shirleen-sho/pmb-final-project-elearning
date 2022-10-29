import React, {useState} from 'react'

const InputFields = ({type, size, placeholder, style, disabled}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  
  return (
    <>
        <input 
        type={type} 
        value={value}
        onChange={handleValue} 
        className={`border border-gray-200 bg-white shadow rounded px-4 text-xs py-2 outline-none ${size} ${style}`} 
        placeholder={placeholder || null}
        disabled={disabled || false}
        />
    </>
  )
}

export default InputFields