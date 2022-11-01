import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCamera, FaPhone } from "react-icons/fa";

export default function Card({ users }) {
  return (
    <>
      {users.map((value) => (
      <div className="flex flex-col justify-center py-6 border w-80 h-96 shadow-xl rounded-xl m-5 ">
        <Image
              src={value.image}
              alt={value.desc}
              className="w-48 h-48 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              width={1000}
              height={1000}
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
