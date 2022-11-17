import React from 'react'
import CardMateri from './CardMateri'

export default function CardMateris({materi}) {
  return materi.map((value, index)=>(
    <>
        <CardMateri value={value} key={"Card" + index}/>
    </>
    ))
}
