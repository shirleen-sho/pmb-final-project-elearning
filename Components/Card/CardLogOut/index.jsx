import React from "react";
import Image from "next/image";
import Button from "../../Buttons";
import { useAppContext } from "../../../Hooks/useAppContext";

export default function CardLogOut({ type, desc, title }) {
  const { user } = useAppContext();
  const { setShowLogout } = user;

  return (
    <div className="absolute z-50 backdrop-blur-sm bg-white/30 flex justify-center align-middle items-center w-full h-screen ">
      <div className="bg-white w-96 py-4 border shadow flex flex-col items-center justify-center rounded-xl space-y-3 m-2">
        <div className="w-28 h-28">
          <Image
            src="/images/icon/warning.png"
            width={2000}
            height={2000}
            alt="Notif"
            className="w-28 h-28"
          />
        </div>
        <div className="text-center">
          <div className="font-bold text-base">Yakin ingin logout ?</div>
        </div>
        <div className="w-full flex justify-center items-center px-10">
          <div className="w-full flex justify-evenly">
            <Button type="light">LogOut</Button>
            <Button handleClick={() => setShowLogout(false)}>Kembali</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
