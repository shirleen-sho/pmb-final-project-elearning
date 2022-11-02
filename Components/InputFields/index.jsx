import React, {useState} from 'react'

const InputFields = ({type, size, placeholder, disabled , style, valueLock}) => {
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
    default:
      style=''
      break;
  }


  return (
    <>
        <input 
        type={type} 
        value={value || valueLock}
        onChange={handleValue} 
        className={`border border-gray-200 bg-white shadow rounded px-4 text-xs py-2 outline-none  ${size} ${style}`} 
        placeholder={placeholder || null}
        disabled={disabled || false}
        />
    </>
  )
}

export default InputFields