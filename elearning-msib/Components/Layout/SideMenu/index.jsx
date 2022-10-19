import React from "react";
import Link from "next/link";

const SideMenu = () => {
  const menus = [
    {
      menu: { route: "/dashboard", name: "Dashboard" },
    },
    {
      menu: { route: "/data_master", name: "Data Master" },
      sub_menu: [
        { route: "/identitas_sekolah", name: "Identitas Sekolah" },
        { route: "/tahun_akademik", name: "Tahun Akademik" },
        { route: "/gedung", name: "Gedung" },
        { route: "/ruangan", name: "Ruangan" },
        { route: "/tingkatan", name: "Tingkatan" },
        { route: "/kelas", name: "Kelas" },
        { route: "/kalender_akademik", name: "Kalender Akademik" },
        { route: "/jam_pembelajaran", name: "Jam Pembelajaran" },
      ],
    },
    {
      menu: { route: "/logout", name: "Log Out" },
    },
    {
      menu: { route: "/settings", name: "Settings" },
    },
  ];
  return (
    <div className="bg-primary-100 flex flex-col gap-1 px-2 py-16 rounded-3xl min-h-screen">
      {menus.map(({ menu }) => {
        return (
          <Link href={menu.route} key={menu.route}>
            <a className="font-semibold text-xs px-6 py-2 hover:bg-primary-200 hover:rounded-full">
              {menu.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
