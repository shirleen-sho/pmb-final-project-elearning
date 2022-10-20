import React ,{useState} from 'react'

const TextArea = ({placeholder}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <textarea value={value} onChange={handleValue} placeholder={placeholder} className='w-full border shadow bg-white m-2 h-fit px-2 py-2 rounded outline-none'/>
    </>
  )
}

export default TextArea