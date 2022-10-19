import React from 'react'

const InputFields = ({type, size, placeholder, style}) => {

  return (
    <>
        <input type={type} className={`border border-gray-200 bg-white shadow rounded px-2 text-lg m-2 outline-none ${size} ${style}`} placeholder={placeholder}/>
    </>
  )
}

export default InputFields