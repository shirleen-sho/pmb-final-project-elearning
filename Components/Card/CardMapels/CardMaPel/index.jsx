import React from "react";
import Image from "next/image";
import Button from "../../../Buttons";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";

export default function CardMaPel({value,index}) {
  const location = useRouter();
  const path = location.asPath;
  return (
    <>
    {console.log(value.color)}
          <div
            className={`w-80 h-40 flex justify-center items-center rounded-xl shadow`}
            style ={{ backgroundColor : value.color}}
            key={index}
          >
            <div
              className={`w-32 h-32 flex justify-center items-center rounded`}
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
            <div className="w-44 h-32 flex justify-center items-center  ">
              <div className="space-y-4 w-full mx-4">
                <div>
                  <h1 className="text-lg">{value.title}</h1>
                  <h1 className="text-xs">{value.desc}</h1>
                </div>
                <div className="w-full flex justify-end">
                  <Button link={path + "/detail"}>
                    <FaAngleRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
