import { useState } from "react";

export const useMenuProvider = () => {
  const list_menu = [
    {
      menu: {
        route: "/",
        name: "Dashboard",
        icon: "icon dashboard.png",
      },
    },
    {
      menu: {
        route: "/data_master",
        name: "Data Master",
        icon: "icon data master.png",
      },
      sub_menu: [
        {
          route: "/data_master/identitas_sekolah",
          name: "Identitas Sekolah",
          detail: "Update your photo and school details here!",
        },
        {
          route: "/data_master/tahun_akademik",
          name: "Tahun Akademik",
          detail: "See tahun akademik details here!",
        },
        {
          route: "/data_master/gedung",
          name: "Gedung",
          detail: "See gedung details here!",
        },
        {
          route: "/data_master/ruangan",
          name: "Ruangan",
          detail: "See ruangan details here!",
        },
        { route: "/data_master/tingkatan", name: "Tingkatan" },
        {
          route: "/data_master/kelas",
          name: "Kelas",
          detail: "See kelas details here!",
        },
        { route: "/data_master/kalender_akademik", name: "Kalender Akademik" },
        { route: "/data_master/jam_pembelajaran", name: "Jam Pembelajaran" },
      ],
    },
    {
      menu: {
        route: "/kepegawaian",
        name: "Kepegawaian",
        icon: "icon kepegawaian.png",
      },
      sub_menu: [
        {
          route: "/kepegawaian/staff",
          name: "Staff Management",
          detail: "See list of staff here!",
        },
        {
          route: "/kepegawaian/guru",
          name: "Guru Management",
          detail: "See list of teachers here!",
        },
      ],
    },
    {
      menu: {
        route: "/kesiswaan",
        name: "Kesiswaan",
        icon: "icon kesiswaan.png",
      },
    },
    {
      menu: {
        route: "/data_akademik",
        name: "Data Akademik",
        icon: "icon data akademik.png",
      },
      sub_menu: [
        { route: "/data_akademik/mata_pelajaran", name: "Mata Pelajaran" },
        { route: "/data_akademik/jadwal_pelajaran", name: "Jadwal Pelajaran" },
        { route: "/data_akademik/silabus", name: "Silabus" },
        { route: "/data_akademik/rpp", name: "RPP" },
      ],
    },
    {
      menu: {
        route: "/elearning",
        name: "E-Learning",
        icon: "icon elearning.png",
      },
    },
    {
      menu: {
        route: "/data_absensi",
        name: "Data Absensi",
        icon: "icon absensi.png",
      },
    },
    {
      menu: {
        route: "/ujian",
        name: "Ujian",
        icon: "icon ujian.png",
      },
    },
    {
      menu: {
        route: "/pengumuman",
        name: "Pengumuman",
        icon: "icon pengumuman.png",
      },
    },
    {
      menu: {
        route: "/epayment",
        name: "E-Payment",
        icon: "icon e-payment.png",
      },
    },
    {
      menu: {
        route: "/raport",
        name: "Raport",
        icon: "icon raport.png",
      },
    },
    {
      menu: {
        route: "/keuangan_sekolah",
        name: "Keuangan Sekolah",
        icon: "icon keuangan sekolah.png",
      },
    },
    {
      menu: {
        route: "/log_activity",
        name: "Log Activity",
        icon: "icon log activity.png",
      },
    },
    {
      menu: {
        route: "/logout",
        name: "Log Out",
        icon: "icon log out.png",
      },
    },
    {
      menu: {
        route: "/settings",
        name: "Settings",
        icon: "icon settings.png",
      },
    },
  ];

  const additional_menu = [
    {
      menu: {
        route: "/profile",
        name: "Your Profile",
        detail: "Update your photo and details here!",
      },
    },
    {
      menu: {
        route: "/password",
        name: "Password",
        detail: "Update your Password here!",
      },
    },
  ];

  const [menus, setMenus] = useState(list_menu);
  const [selectedMenu, setSelectedMenu] = useState("/");
  const [selectedSubmenu, setSelectedSubmenu] = useState("");

  let currentMenu;

  const res1 = menus.find((i) => selectedMenu === i.menu.route);

  console.log("res1", res1);

  if (res1 === undefined) {
    const res = additional_menu.find((i) => selectedMenu === i.menu.route);
    currentMenu = {
      title: res.menu.name,
      detail: res.menu.detail,
    };
  } else {
    currentMenu = {
      title: res1.menu.name,
      detail: res1.menu.detail,
    };
    if (selectedSubmenu !== "") {
      const res2 = res1.sub_menu.find((i) => selectedSubmenu === i.route);
      currentMenu = {
        title: res2.name,
        detail: res2.detail,
      };
    }
  }

  console.log(currentMenu);

  return {
    menus,
    selectedMenu,
    setSelectedMenu,
    selectedSubmenu,
    setSelectedSubmenu,
    currentMenu,
  };
};
