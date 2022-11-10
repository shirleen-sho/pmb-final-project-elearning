import React from "react"
import CardMaPel from "./CardMaPel"

export default function CardMapels({study}) {
    return study.map((value, index)=>(
      <>
          <CardMaPel value={value} key={"Card" + index}/>
      </>
      ))
  }
  