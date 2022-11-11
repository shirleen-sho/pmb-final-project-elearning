import React, {useState} from 'react'

const InputFields = ({type, size, placeholder, disabled, readOnly , style, label, valueLock, defaultValue}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  
  switch (type) {
    case "date":
      style='uppercase'
      break;
    default:
      style='capitalize'
      break;
  }

  switch (disabled) {
    case true:
      style='bg-gray-200'
      placeholder = null
      break;
  }

  return (
    <>
        <input 
        type={type} 
        value={value || valueLock}
        onChange={handleValue} 
        className={`border border-gray-200 bg-white shadow rounded px-4 text-xs py-2 outline-none  ${size} ${style}`} 
        placeholder={placeholder}
        label = {label || placeholder}
        disabled={disabled}
        readOnly={readOnly}
        defaultValue={defaultValue}
        />
    </>
  )
}



export default InputFields