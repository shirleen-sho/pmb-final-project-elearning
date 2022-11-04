import React from "react";
import Image from "next/image";
import Button from "../../Buttons";

export default function CardNotif({type}) {
  return (
    <div>
      <div className="w-96 h-64 border shadow flex flex-col items-center justify-center rounded-xl space-y-3 m-2">
        <Image
          src={type ? "/images/profile.jpg" : "/images/logo.png"}
          width={2000}
          height={2000}
          alt="Notif"
          className="w-32 h-32"
        />
        <div className="text-center">
          <div className="font-bold text-base">
            {type ? "Yakin ingin menghapus data?" : "Data Deleted!"}
          </div>
          <div className="text-xs">
            {type
              ? (type =
                  "Setelah data dihapus, data ini tidak dapat dikembalikan!")
              : null}
          </div>
        </div>
        <div>
          {type ? (
            <>
              <Button type="light" style="mx-2">
                Delete
              </Button>
              <Button>Cancel</Button>
            </>
          ) : (
            <Button>Close</Button>
          )}
        </div>
      </div>
    </div>
  );
}
