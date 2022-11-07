import { useState } from "react";

export const useMenuProvider = () => {
  const configMenu = {
    mainMenu: [
      {
        route: "/dashboard",
        name: "Dashboard",
        title: "Hello !",
        icon: "icon dashboard.png",
      },
      {
        route: "/data_master",
        name: "Data Master",
        title: "Data Master",
        icon: "icon data master.png",
        subMenu: [
          {
            route: "/data_master/identitas_sekolah",
            name: "Identitas Sekolah",
            title: "Identitas Sekolah",
            detail: "Update your photo and school details here!",
          },
          {
            route: "/data_master/tahun_akademik",
            name: "Tahun Akademik",
            title: "Tahun Akademik",
            detail: "See tahun akademik details here!",
            actionMenu: [
              {
                route: "/data_master/tahun_akademik/add",
                name: "Tahun Akademik",
                title: "Add Tahun Akademik",
              },
            ],
          },
          {
            route: "/data_master/gedung",
            name: "Gedung",
            title: "Gedung",
            detail: "See gedung details here!",
            actionMenu: [
              {
                route: "/data_master/gedung/add",
                name: "Gedung",
                title: "Add Gedung",
              },
            ],
          },
          {
            route: "/data_master/ruangan",
            name: "Ruangan",
            title: "Ruangan",
            detail: "See ruangan details here!",
            actionMenu: [
              {
                route: "/data_master/ruangan/add",
                name: "Ruangan",
                title: "Add Ruangan",
              },
            ],
          },
          {
            route: "/data_master/tingkatan",
            name: "Tingkatan",
            title: "Tingkatan",
            actionMenu: [
              {
                route: "/data_master/tingkatan/add",
                name: "Tingkatan",
                title: "Add Tingkatan",
              },
            ],
          },
          {
            route: "/data_master/kelas",
            name: "Kelas",
            title: "Kelas",
            detail: "See kelas details here!",
            actionMenu: [
              {
                route: "/data_master/kelas/add",
                name: "Kelas",
                title: "Add Kelas",
              },
            ],
          },
          {
            route: "/data_master/kalender_akademik",
            name: "Kalender Akademik",
            title: "Kalender Akademik",
            actionMenu: [
              {
                route: "/data_master/kalender_akademik/list_kegiatan",
                name: "Kegiatan",
                title: "Kegiatan",
                detail: "See Kegiatan details here!",
              },
              {
                route: "/data_master/kalender_akademik/add",
                name: "Kegiatan",
                title: "Add Kegiatan",
              },
            ],
          },
          {
            route: "/data_master/jam_pembelajaran",
            name: "Jam Pembelajaran",
            title: "Jam Pembelajaran",
            actionMenu: [
              {
                route: "/data_master/jam_pembelajaran/add",
                name: "Jam Pembelajaran",
                title: "Add Jam Pembelajaran",
              },
            ],
          },
        ],
      },
      {
        route: "/kepegawaian",
        name: "Kepegawaian",
        title: "Kepegawaian",
        icon: "icon kepegawaian.png",
        subMenu: [
          {
            route: "/kepegawaian/staff",
            name: "Staff",
            title: "Staff Management",
            detail: "See list of staff here!",
            actionMenu: [
              {
                route: "/kepegawaian/staff/add",
                name: "Staff",
                title: "Add Staff",
                detail: "See list of staff here!",
              },
            ],
          },
          {
            route: "/kepegawaian/guru",
            name: "Guru",
            title: "Guru Management",
            detail: "See list of teachers here!",
            actionMenu: [
              {
                route: "/kepegawaian/guru/add",
                name: "Guru",
                title: " Add Guru",
                detail: "See list of teachers here!",
              },
            ],
          },
        ],
      },
      {
        route: "/kesiswaan",
        name: "Kesiswaan",
        title: "Kesiswaan",
        icon: "icon kesiswaan.png",
        subMenu: [
          {
            route: "/kesiswaan/siswa",
            name: "Siswa",
            title: "Siswa Management",
            detail: "See list of Students here!",
            actionMenu: [
              {
                route: "/kesiswaan/siswa/view",
                name: "Data Siswa",
                title: "Data Siswa",
              },
              {
                route: "/kesiswaan/siswa/add",
                name: "Add Siswa",
                title: "Add Siswa",
              },
            ],
          },
          {
            route: "/kesiswaan/wali",
            name: "Wali Murid",
            title: "Wali Murid Management",
            detail: "See list of Wali Murid here!",
            actionMenu: [
              {
                route: "/kesiswaan/wali/view",
                name: "Data Wali Murid",
                title: "Data Wali Murid",
              },
              {
                route: "/kesiswaan/wali/add",
                name: "Add Wali Murid",
                title: "Add Wali Murid",
              },
            ],
          },
        ],
      },
      {
        route: "/data_akademik",
        name: "Data Akademik",
        title: "Data Akademik",
        icon: "icon data akademik.png",
        subMenu: [
          {
            route: "/data_akademik/mata_pelajaran",
            name: "Mata Pelajaran",
            title: "Mata Pelajaran",
            actionMenu: [
              {
                route: "/data_akademik/mata_pelajaran/kategori",
                name: "Kategori Mata Pelajaran",
                title: "Kategori Mata Pelajaran",
              },
              {
                route: "/data_akademik/mata_pelajaran/add",
                name: "Mata Pelajaran",
                title: "Add Mata Pelajaran",
              },
            ],
          },
          {
            route: "/data_akademik/jadwal_pelajaran",
            name: "Jadwal Pelajaran",
            title: "Jadwal Pelajaran",
            actionMenu: [
              {
                route: "/data_akademik/jadwal_pelajaran/add",
                name: "Jadwal Pelajaran",
                title: "Add Jadwal Pelajaran",
              },
            ],
          },
          {
            route: "/data_akademik/silabus",
            name: "Silabus",
            title: "Silabus",
            actionMenu: [
              {
                route: "/data_akademik/silabus/add",
                name: "Silabus",
                title: "Add Silabus",
              },
            ],
          },
          {
            route: "/data_akademik/rpp",
            name: "RPP",
            title: "Rencana Pelaksanaan Pembelajaran",
            actionMenu: [
              {
                route: "/data_akademik/rpp/add",
                name: "Rencana Pelaksanaan Pembelajaran",
                title: " Add Rencana Pelaksanaan Pembelajaran",
              },
            ],
          },
        ],
      },
      {
        route: "/elearning",
        name: "E-Learning",
        title: "E-Learning",
        icon: "icon elearning.png",
        subMenu: [
          {
            route: "/elearning/materi_pelajaran",
            name: "Materi Pelajaran",
            title: "Materi Pelajaran",
            actionMenu: [
              {
                route: "/elearning/materi_pelajaran/add",
                name: "Materi Pelajaran",
                title: "Add Materi Pelajaran",
              },
            ],
          },
          {
            route: "/elearning/tugas",
            name: "Tugas",
            title: "Tugas",
            actionMenu: [
              {
                route: "/elearning/tugas/add",
                name: "Tugas",
                title: "Add Tugas",
              },
            ],
          },
          {
            route: "/elearning/penyumpulan_tugas",
            name: "Penyumpulan Tugas",
            title: "Penyumpulan Tugas",
            actionMenu: [
              {
                route: "/elearning/penyumpulan_tugas/add",
                name: "Penyumpulan Tugas",
                title: "Add Penyumpulan Tugas",
              },
            ],
          },
          {
            route: "/elearning/nilai",
            name: "Penyumpulan Tugas",
            title: "Penyumpulan Tugas",
            actionMenu: [
              {
                route: "/elearning/penyumpulan_tugas/add",
                name: "Penyumpulan Tugas",
                title: "Add Penyumpulan Tugas",
              },
            ],
          },
        ],
      },
      {
        route: "/data_absensi",
        name: "Data Absensi",
        title: "Data Absensi",
        icon: "icon absensi.png",
      },
      {
        route: "/ujian",
        name: "Ujian",
        title: "Ujian",
        icon: "icon ujian.png",
      },
      {
        route: "/pengumuman",
        name: "Pengumuman",
        title: "Pengumuman",
        icon: "icon pengumuman.png",
      },
      {
        route: "/epayment",
        name: "E-Payment",
        title: "E-Payment",
        icon: "icon e-payment.png",
      },
      {
        route: "/raport",
        name: "Raport",
        title: "Raport",
        icon: "icon raport.png",
      },
      {
        route: "/keuangan_sekolah",
        name: "Keuangan Sekolah",
        title: "Keuangan Sekolah",
        icon: "icon keuangan sekolah.png",
      },
      {
        route: "/log_activity",
        name: "Log Activity",
        title: "Log Activity",
        icon: "icon log activity.png",
      },
      {
        route: "/logout",
        name: "Log Out",
        title: "Log Out",
        icon: "icon log out.png",
      },
      {
        route: "/settings",
        name: "Settings",
        title: "Settings",
        icon: "icon settings.png",
        subMenu: [
          {
            route: "/settings/level",
            name: "Level Staff",
            title: "Level Staff",
          },
          {
            route: "/settings/otorisasi",
            name: "Pengaturan Otorisasi",
            title: "Pengaturan Otorisasi",
          },
        ],
      },
    ],
    additionalMenu: [
      {
        route: "/profile",
        name: "Profile",
        title: "Your Profile",
        detail: "Update your photo and details here!",
      },
      {
        route: "/password",
        name: "Password",
        title: "Change Password",
        detail: "Update your Password here!",
      },
    ],
  };

  const [selectedMenu, setSelectedMenu] = useState("/dashboard");
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [selectedActionmenu, setSelectedActionmenu] = useState("");

  let header;
  const findSelectedMenuInMain = configMenu.mainMenu.find(
    (i) => selectedMenu === i.route
  );
  if (findSelectedMenuInMain) {
    header = {
      title: findSelectedMenuInMain.title,
      detail: findSelectedMenuInMain.detail,
    };
    if (selectedSubmenu) {
      const findSelectedSubmenuInMain = findSelectedMenuInMain.subMenu.find(
        (i) => selectedSubmenu === i.route
      );
      if (findSelectedSubmenuInMain) {
        header = {
          title: findSelectedSubmenuInMain.title,
          detail: findSelectedSubmenuInMain.detail,
        };
      }
      if (selectedActionmenu) {
        const findSelectedActionmenuInSub =
          findSelectedSubmenuInMain.actionMenu.find(
            (i) => selectedActionmenu === i.route
          );
        if (findSelectedActionmenuInSub) {
          header = {
            title: findSelectedActionmenuInSub.title,
            detail: findSelectedActionmenuInSub.detail,
          };
        }
      }
    } else {
      if (selectedActionmenu) {
        const findSelectedActionmenuInMain =
          findSelectedMenuInMain.actionMenu.find(
            (i) => selectedActionmenu === i.route
          );
        if (findSelectedActionmenuInMain) {
          header = {
            title: findSelectedActionmenuInMain.title,
            detail: findSelectedActionmenuInMain.detail,
          };
        }
      }
    }
  } else {
    const findSelectedMenuInAdditional = configMenu.additionalMenu.find(
      (i) => selectedMenu === i.route
    );
    if (findSelectedMenuInAdditional) {
      header = {
        title: findSelectedMenuInAdditional.title,
        detail: findSelectedMenuInAdditional.detail,
      };
    }
  }

  return {
    configMenu,
    header,
    selectedMenu,
    setSelectedMenu,
    selectedSubmenu,
    setSelectedSubmenu,
    selectedActionmenu,
    setSelectedActionmenu,
  };
};
