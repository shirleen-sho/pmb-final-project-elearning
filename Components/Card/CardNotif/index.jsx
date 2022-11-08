import React from "react";
import Image from "next/image";
import Button from "../../Buttons";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../../../Hooks/useAppContext";
import { useRouter } from "next/router";

export default function CardNotif({ type, desc, title }) {
  const { user } = useAppContext();
  const { setShowLogout } = user;
  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="absolute z-50 backdrop-blur-sm bg-white/30 flex justify-center align-middle items-center w-full h-screen ">
      <div className="bg-white w-96 py-4 border shadow flex flex-col items-center justify-center rounded-xl space-y-3 m-2">
        {type ? null : (
          <div className="w-full flex justify-end px-5">
            <Button type="icon" link={path + "/dashboard"}>
              <AiOutlineClose />
            </Button>
          </div>
        )}
        <div className="w-28 h-28">
          <Image
            src={type ? "/images/icon/warning.png" : "/images/icon/correct.png"}
            width={2000}
            height={2000}
            alt="Notif"
            className="w-28 h-28"
          />
        </div>
        <div className="text-center">
          <div className="font-bold text-base">
            {type ? title || "Yakin Ingin Menghapus Data?" : "Data Deleted!"}
          </div>
          <div className="text-xs">
            {type
              ? desc ||
                "Setelah data dihapus, data ini tidak dapat dikembalikan!"
              : null}
          </div>
        </div>
        <div className="w-full flex justify-center items-center px-10">
          {type ? (
            <div className="w-full flex justify-evenly">
              <Button type="light" link={type === "logout" ? "/login" : path}>
                {type === "logout" ? "Logout" : "Delete"}
              </Button>
              <Button
                handleClick={
                  type === "logout" ? () => setShowLogout(false) : ""
                }
              >
                Cancel
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
