import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Button from "../Buttons";
import CardNotif from "./CardNotif";
import CardMakul from "./CardMakul";

export default function Card({ users }) {
  return (
    <>
    <div className="flex">
      {users.map((value, index) => (
        <div
          className="flex flex-col justify-center border w-52 h-64 shadow rounded-xl m-2 hover:border-blue-500 hover:border-2"
          key={index}
        >
          <div className="flex justify-end ">
            <Button variant="icon" type="icon">
              <HiOutlineDotsVertical/>
            </Button>
          </div>
          <Image
            src={value.image}
            alt={value.desc}
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square hover:border-blue-500 hover:border-2"
            width={1000}
            height={1000}
          />
          <div className="space-y-2 text-center divide-y ">
            <div>
              <div className="text-2xl font-bold leading-8 tracking-widest">{value.name}</div>
              <div className="font-light text-xs text-gray-400">{value.nuptk}</div>
            </div>
            <div className="flex justify-center space-x-4 space-y pt-2 divide-y  ">
              <FaPhone/>
              <MdEmail/>
              <FaInstagram/>
              <FaTwitter/>
            </div>
          </div>
        </div>
      ))}
      </div>
      <CardNotif />
      <CardMakul />
    </>
  );
}
