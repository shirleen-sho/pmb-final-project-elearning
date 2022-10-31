import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCamera, FaPhone } from "react-icons/fa";

export default function Card({users , link}) {
  return (
    <>
    {users.map((value) => (
      <div key={value.name} className="bg-white shadow border w-1/5 h-1/5 rounded flex flex-col">
        <Image src={value.image} width={50} height={50} alt={value.desc} className="rounded-full"/>
        <div>{value.name}</div>
        <div>{value.name}</div>
        <div className="flex justify-evenly">
            <Link href={value.link} legacyBehavior>
                <a><FaPhone/></a> 
            </Link>
            <Link href={value.link} legacyBehavior>
                <a><FaCamera/></a> 
            </Link>
        </div>
      </div>
    ))}
    </>
  );
}
