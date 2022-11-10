import { useState } from "react";
import {
  RiBookReadFill,
  RiCurrencyFill,
  RiDashboardFill,
  RiFolderKeyholeFill,
  RiGitRepositoryFill,
  RiMacFill,
  RiSettings5Fill,
  RiWallet3Fill,
} from "react-icons/ri";
import {
  FaBookReader,
  FaUserTie,
  FaGraduationCap,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { HiSpeakerphone } from "react-icons/hi";

export const useMenuProvider = () => {
  const configMenu = {
    mainMenu: [
      {
        route: "/dashboard",
        name: "Dashboard",
        title: "Hello !",
        icon: <RiDashboardFill size={20} />,
      },
      {
        route: "/data_master",
        name: "Data Master",
        title: "Data Master",
        icon: <RiFolderKeyholeFill size={18} />,
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
        icon: <FaUserTie size={15} />,
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
        icon: <FaBookReader size={15} />,
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
        icon: <FaGraduationCap size={18} />,
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
        icon: <RiMacFill size={18} />,
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
            name: "Nilai",
            title: "Nilai",
            actionMenu: [
              {
                route: "/elearning/nilai/add",
                name: "Nilai",
                title: "Add Nilai",
              },
            ],
          },
        ],
      },
      {
        route: "/data_absensi",
        name: "Data Absensi",
        title: "Data Absensi",
        icon: <FaUserCheck size={17} />,
      },
      {
        route: "/ujian",
        name: "Ujian",
        title: "Ujian",
        icon: <FaClipboardList size={16} />,
        subMenu: [
          {
            route: "/ujian/jenis_ujian",
            name: "Jenis Ujian",
            title: "Jenis Ujian",
            actionMenu: [
              {
                route: "/ujian/jenis_ujian/add",
                name: "Jenis Ujian",
                title: "Add Jenis Ujian",
              },
              {
                route: "/ujian/jenis_ujian/detail",
                name: "Jenis Ujian",
                title: "Detail Jenis Ujian",
              },
              {
                route: "/ujian/jenis_ujian/edit",
                name: "Jenis Ujian",
                title: "Edit Jenis Ujian",
              },
            ],
          },
          {
            route: "/ujian/bank_soal",
            name: "Bank Soal",
            title: "Bank Soal",
            actionMenu: [
              {
                route: "/ujian/bank_soal/add",
                name: "Bank Soal",
                title: "Add Bank Soal",
              },
              {
                route: "/ujian/bank_soal/detail",
                name: "Bank Soal",
                title: "Detail Bank Soal",
              },
              {
                route: "/ujian/bank_soal/edit",
                name: "Bank Soal",
                title: "Edit Bank Soal",
              },
            ],
          },
          {
            route: "/ujian/jadwal_ujian",
            name: "Jadwal Ujian",
            title: "Jadwal Ujian",
            actionMenu: [
              {
                route: "/ujian/jadwal_ujian/add",
                name: "Jadwal Ujian",
                title: "Add Jadwal Ujian",
              },
              {
                route: "/ujian/jadwal_ujian/detail",
                name: "Jadwal Ujian",
                title: "Detail Jadwal Ujian",
              },
              {
                route: "/ujian/jadwal_ujian/edit",
                name: "Jadwal Ujian",
                title: "Edit Jadwal Ujian",
              },
            ],
          },
          {
            route: "/ujian/nilai_ujian",
            name: "Nilai Ujian",
            title: "Nilai Ujian",
            actionMenu: [
              {
                route: "/ujian/nilai_ujian/add",
                name: "Nilai Ujian",
                title: "Add Nilai Ujian",
              },
              {
                route: "/ujian/nilai_ujian/detail",
                name: "Nilai Ujian",
                title: "Detail Nilai Ujian",
              },
              {
                route: "/ujian/nilai_ujian/edit",
                name: "Nilai Ujian",
                title: "Edit Nilai Ujian",
              },
            ],
          },
        ],
      },
      {
        route: "/pengumuman",
        name: "Pengumuman",
        title: "Pengumuman",
        icon: <HiSpeakerphone size={16} />,
      },
      {
        route: "/epayment",
        name: "E-Payment",
        title: "E-Payment",
        icon: <RiWallet3Fill size={16} />,
      },
      {
        route: "/raport",
        name: "Raport",
        title: "Raport",
        icon: <RiBookReadFill size={17} />,
      },
      {
        route: "/keuangan_sekolah",
        name: "Keuangan Sekolah",
        title: "Keuangan Sekolah",
        icon: <RiCurrencyFill size={17} />,
      },
      {
        route: "/log_activity",
        name: "Log Activity",
        title: "Log Activity",
        icon: <RiGitRepositoryFill size={18} />,
      },
      {
        route: "/logout",
        name: "Log Out",
        title: "Log Out",
        icon: <GoSignOut size={17} />,
      },
      {
        route: "/settings",
        name: "Settings",
        title: "Settings",
        icon: <RiSettings5Fill size={18} />,
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
