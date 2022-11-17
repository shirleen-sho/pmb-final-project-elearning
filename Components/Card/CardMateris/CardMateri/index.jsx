import React, { useDebugValue } from "react";
import Image from "next/image";
import Button from "../../../Buttons";

export default function CardMateri({value,index}) {
    const entensiOK =/(\.MP4|\.AVI|\.MKV|\.3GP|\.DAT|\.MPG|\.MPEG|\.WEBM|\.FLV|\.WMV|\.GIFV)$/i;
  return (
    <>
      <div className="flex flex-col w-64 h-64 rounded">
        <div className="flex-1 bg-primary-100 rounded-t-xl flex justify-center items-center">
          <Image
            src="/images/logo.png"
            height={200}
            width={200}
            alt="icon school"
            className="w-32"
          />
        </div>
        <div className="flex-1 border rounded-b-xl p-2 flex flex-col justify-between ">
          <div>
            <div className="text-base font-semibold">{value.title}</div>
            <div className="text-xs">BAB : {value.bab}</div>
          </div>
          <Button style="w-full">
            <label>{entensiOK ? "Watch" : "Read"}</label>
          </Button>
        </div>
      </div>
    </>
  );
}
