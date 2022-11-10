import React from 'react'
import CardUser from './CardUser'

export default function CardUsers({users}) {
  return users.map((value, index)=>(
    <>
        <CardUser value={value} key={"Card" + index}/>
    </>
    ))
}
