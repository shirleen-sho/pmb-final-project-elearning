import React from "react";
import Image from "next/image";
import Button from "../../Buttons";
import { FaAngleRight } from "react-icons/fa";

export default function CardMakul({ matakuliah, desc ,color = "bg-orange-200"} , colors = "bg-orange-900") {
  return (
    <>
      <div>
        <div className="flex">
          <div className={`w-96 h-52 flex justify-center items-center rounded-xl shadow bg-orange-200 m-2`}>
            <div className={`w-40 h-32 flex justify-center items-center rounded-xl bg-orange-400`}>
              <Image
                src="/images/logo.png"
                width={2000}
                height={2000}
                alt="Pelajaran"
                className="w-24 h-24"
              />
            </div>
            <div className="w-44 h-44 flex justify-center items-center mx-2">
              <div className="space-y-4">
                <div>
                  <h1 className="text-xl">{matakuliah || "Bahasa Indonesia"}</h1>
                  <h1 className="text-xs">
                    {desc || "Handout Bahasa Indonesia"}
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
          <div></div>
        </div>
      </div>
    </>
  );
}
