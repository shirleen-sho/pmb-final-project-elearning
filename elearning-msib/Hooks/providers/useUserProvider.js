import { useState } from "react";

export const useUserProvider = () => {
  const user = {
    name: "Shirleen",
    role: "Admin",
    photo: "profile.jpg",
  };

  const [user_info, setUserInfo] = useState(user);

  const list1 = [
    {
      route: "/",
      name: "Dashboard",
    },
    {
      route: "/data_master",
      name: "Data Master",
    },
    {
      route: "/kepegawaian",
      name: "Kepegawaian",
    },
    {
      route: "/kesiswaan",
      name: "Kesiswaan",
    },
    {
      route: "/data_akademik",
      name: "Data Akademik",
    },
    {
      route: "/elearning",
      name: "E-Learning",
    },
    {
      route: "/logout",
      name: "Log Out",
    },
    {
      route: "/settings",
      name: "Settings",
    },
  ];

  let list2 = [];
  for (let i = 1; i <= 10; i++) {
    list2.push({
      NIM: "19120200" + i,
      Nama: "Siswa " + i,
      Kelas: "XII-IA 2",
    });
  }

  return {
    user_info,
    list1,
    list2,
  };
};
