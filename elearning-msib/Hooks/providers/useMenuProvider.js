import { useState } from "react";

export const useMenuProvider = () => {
  const list_menu = [
    {
      menu: { route: "/", name: "Dashboard" },
    },
    {
      menu: { route: "/data_master", name: "Data Master" },
      sub_menu: [
        { route: "/data_master/identitas_sekolah", name: "Identitas Sekolah" },
        { route: "/data_master/tahun_akademik", name: "Tahun Akademik" },
        { route: "/data_master/gedung", name: "Gedung" },
        { route: "/data_master/ruangan", name: "Ruangan" },
        { route: "/data_master/tingkatan", name: "Tingkatan" },
        { route: "/data_master/kelas", name: "Kelas" },
        { route: "/data_master/kalender_akademik", name: "Kalender Akademik" },
        { route: "/data_master/jam_pembelajaran", name: "Jam Pembelajaran" },
      ],
    },
    {
      menu: { route: "/kepegawaian", name: "Kepegawaian" },
      sub_menu: [
        { route: "/kepegawaian/staff", name: "Staff" },
        { route: "/kepegawaian/guru", name: "Guru" },
      ],
    },
    {
      menu: { route: "/kesiswaan", name: "Kesiswaan" },
    },
    {
      menu: { route: "/data_akademik", name: "Data Akademik" },
      sub_menu: [
        { route: "/data_akademik/mata_pelajaran", name: "Mata Pelajaran" },
        { route: "/data_akademik/jadwal_pelajaran", name: "Jadwal Pelajaran" },
        { route: "/data_akademik/silabus", name: "Silabus" },
        { route: "/data_akademik/rpp", name: "RPP" },
      ],
    },
    {
      menu: { route: "/elearning", name: "E-Learning" },
    },
    {
      menu: { route: "/data_absensi", name: "Data Absensi" },
    },
    {
      menu: { route: "/ujian", name: "Ujian" },
    },
    {
      menu: { route: "/pengumuman", name: "Pengumuman" },
    },
    {
      menu: { route: "/epayment", name: "E-Payment" },
    },
    {
      menu: { route: "/raport", name: "Raport" },
    },
    {
      menu: { route: "/keuangan_sekolah", name: "Keuangan Sekolah" },
    },
    {
      menu: { route: "/logout", name: "Log Out" },
    },
    {
      menu: { route: "/settings", name: "Settings" },
    },
  ];

  const [menus, setMenus] = useState(list_menu);
  const [selectedMenu, setSelectedMenu] = useState("/");
  const [selectedSubmenu, setSelectedSubmenu] = useState("");

  const res1 = menus.find((i) => selectedMenu === i.menu.route);
  let currentMenu = {
    title: res1.menu.name,
    detail: res1.menu.name + " details here", // nanti diganti data langsung dari object
  };
  if (selectedSubmenu !== "") {
    const res2 = res1.sub_menu.find((i) => selectedSubmenu === i.route);
    currentMenu = {
      title: res2.name,
      detail: res2.name + " details here", // nanti diganti data langsung dari object
    };
  }

  return {
    menus,
    selectedMenu,
    setSelectedMenu,
    selectedSubmenu,
    setSelectedSubmenu,
    currentMenu,
  };
};
