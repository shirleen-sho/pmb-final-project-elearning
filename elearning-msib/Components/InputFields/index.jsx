import React, {useState} from 'react'

const InputFields = ({type, size, placeholder, style}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  return (
    <>
        <input type={type} value={value} onChange={handleValue} className={`border border-gray-200 bg-white shadow rounded px-3 last:text-base text-lg py-1.5 outline-none ${size} ${style}`} placeholder={placeholder}/>
    </>
  )
}

export default InputFields