import React from "react";
import Image from "next/image";
import Button from "../../Buttons";
import { AiOutlineClose } from "react-icons/ai";

export default function CardNotif({ type }) {
  return (
    <div className="flex ">
      <div className="w-96 py-4 border shadow flex flex-col items-center justify-center rounded-xl space-y-3 m-2">
        {type ? null : (
          <div className="w-full flex justify-end px-5">
            <Button type="icon">
              <AiOutlineClose />
            </Button>
          </div>
        )}
        <Image
          src={type ? "/images/icon/warning.png" : "/images/icon/correct.png"}
          width={2000}
          height={2000}
          alt="Notif"
          className="w-28 h-28"
        />
        <div className="text-center">
          <div className="font-bold text-base">
            {type ? "Yakin Ingin Menghapus Data?" : "Data Deleted!"}
          </div>
          <div className="text-xs">
            {type
              ? (
                  "Setelah data dihapus, data ini tidak dapat dikembalikan!")
              : null}
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-10">
          {type ? (
            <div className="w-full flex justify-evenly">
              <Button type="light">Delete</Button>
              <Button>Cancel</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
