import React from "react";
import Image from "next/image";
import Button from "../../Buttons";
import { FaAngleRight } from "react-icons/fa";

export default function CardMaPel({ study ,color}) {
  return (
    <>
      <div>
        <div className="flex">
        {study.map((value, index) => (
          <div className={`w-96 h-52 flex justify-center items-center rounded-xl shadow-xl bg-[${value.color}] m-2 bg-opacity-90`} key={index}>
            <div className={`w-40 h-32 flex justify-center items-center rounded-xl bg-[${value.color}]`}>
              <Image
                src={value.image}
                width={2000}
                height={2000}
                alt="Pelajaran"
                className="w-24 h-24"
              />
            </div>
            <div className="w-44 h-44 flex justify-center items-center  ">
              <div className="space-y-4 w-full mx-4">
                <div>
                  <h1 className="text-xl">{value.title}</h1>
                  <h1 className="text-xs">
                    {value.desc}
                  </h1>
                </div>
                <div className="w-full flex justify-end">
                  <Button >
                    <FaAngleRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
