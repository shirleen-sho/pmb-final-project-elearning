import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCamera, FaPhone } from "react-icons/fa";

export default function Card({ users }) {
  return (
    <>
      {users.map((value) => (
      <div className="flex flex-col justify-center py-6 border w-64 h-64 shadow-xl rounded-xl m-5 ">
        <Image
              src={value.image}
              width={50}
              height={50}
              alt={value.desc}
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{value.name}</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {value.name}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
          <Link href={value.link} legacyBehavior>
                <a>
                  <FaPhone />
                </a>
              </Link>
              <Link href={value.link} legacyBehavior>
                <a>
                  <FaCamera />
                </a>
              </Link>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
