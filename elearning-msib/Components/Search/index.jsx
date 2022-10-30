import React, {useState} from 'react'
import Button from '../Buttons'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
    const[value , setValue] = useState('')
  const handleValue= (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className='flex w-fit border rounded-full'>
        <input value={value}onChange={handleValue} className={`rounded-full outline-none px-4 capitalize`} placeholder={"Search . . ."} />
        <Button type="icon" variant="icon"><FaSearch/></Button>
    </div>
  )
}
