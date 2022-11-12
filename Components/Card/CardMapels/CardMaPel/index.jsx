import React from "react";
import Image from "next/image";
import Button from "../../../Buttons";
import { FaAngleRight } from "react-icons/fa";

export default function CardMaPel({value,index}) {
  return (
    <>
    {console.log(value.color)}
          <div
            className={`w-96 h-52 flex justify-center border items-center rounded-xl shadow m-2`}
            style ={{ backgroundColor : value.color}}
            key={index}
          >
            <div
              className={`w-40 h-32 flex justify-center items-center rounded border `}
              style ={{ backgroundColor : value.color }}
            >
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
                  <h1 className="text-xs">{value.desc}</h1>
                </div>
                <div className="w-full flex justify-end">
                  <Button>
                    <FaAngleRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
