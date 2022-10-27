import React ,{useState} from 'react'

const TextArea = ({placeholder}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <textarea value={value} onChange={handleValue} placeholder={placeholder} className='w-full border shadow bg-white h-fit px-3 py-1.5 rounded outline-none'/>
    </>
  )
}

export default TextArea