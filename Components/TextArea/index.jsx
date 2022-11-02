import React ,{useState} from 'react'

const TextArea = ({placeholder}) => {
  const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <textarea value={value} onChange={handleValue} placeholder={placeholder} className='w-full border shadow bg-white h-fit px-4 py-3 text-xs rounded outline-none capitalize inline-flex'/>
    </>
  )
}

export default TextArea