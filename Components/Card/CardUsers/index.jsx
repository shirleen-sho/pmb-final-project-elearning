import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineArchive, HiOutlineDocumentText, HiOutlineDotsVertical, HiOutlinePencil } from "react-icons/hi";
import Button from "../../Buttons";

export default function CardUsers({ users }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {users.map((value, index) => (
        <div
          className="flex flex-col justify-center border w-52 h-64 shadow rounded-xl m-2 hover:border-blue-500 hover:border-2"
          key={index}
        >
          <div className="flex justify-end ">
            <Button
              variant="icon"
              type="icon"
              handleClick={() => setOpen(!open)}
            >
              <HiOutlineDotsVertical />
            </Button>
          </div>
          {open ? (
            <>
              <div className="relative">
                <div className="absolute top-0 right-5">
                  <div className="bg-white w-24 h-20 border rounded shadow px-4 ">
                    <Button type="link" link="/dashboard"><HiOutlinePencil className="absolute left-2 hover:text-primary-400" size={12}/>Edit</Button>
                    <Button type="link" link= "/dashboard"><HiOutlineDocumentText className="absolute left-2 hover:text-primary-400" size={12}/>Detail</Button>
                    <Button type="link" link= "/dashboard"><HiOutlineArchive className="absolute left-2 hover:text-primary-400" size={12}/>Archive</Button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <Image
            src={value.image}
            alt={value.desc}
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square hover:border-blue-500 hover:border-2"
            width={500}
            height={500}
          />
          <div className="space-y-2 text-center divide-y ">
            <div>
              <div className="text-2xl font-bold leading-8 tracking-widest">
                {value.name}
              </div>
              <div className="font-light text-xs text-gray-400">
                {value.nuptk}
              </div>
            </div>
            <div className="flex justify-center space-x-8 space-y pt-2 divide-y  ">
              <MdPhone />
              <MdEmail />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
