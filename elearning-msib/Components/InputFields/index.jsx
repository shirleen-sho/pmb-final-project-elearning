import React from 'react'

const InputFields = ({type="", placeholder=""}) => {
  return (
    <>
        <input type={type} className='border-2 border-black rounded px-2 text-lg w-full m-2' placeholder={placeholder} />
    </>
  )
}

export default InputFields