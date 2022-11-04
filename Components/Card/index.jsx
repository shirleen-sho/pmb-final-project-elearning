import React from "react";
import CardNotif from "./CardNotif";
import CardMakul from "./CardMakul";
import CardUsers from "./CardUsers";

export default function Card({users, study ,color, colors}) {
  console.log(study)
  console.log(users)
  return (
    <>
      <CardUsers users={users}/>
      <CardNotif />
      <CardMakul  study={study} color={color} />
    </>
  );
}
