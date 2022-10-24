import { useState } from "react";

export const useDummyProvider = () => {
  const list1 = [
    {
      Route: "/",
      Name: "Dashboard",
      Keterangan: "Dashboard adalah landing page admin.",
    },
    {
      Route: "/data_master",
      Name: "Data Master",
      Keterangan:
        "Data master berisi identitas sekolah, tahun akademik, gedung, ruangan, tingkatan, kelas, kalender akademik, dan jam pembelajaran.",
    },
    {
      Route: "/kepegawaian",
      Name: "Kepegawaian",
      Keterangan: "Kepegawaian berisi staff dan guru.",
    },
    {
      Route: "/kesiswaan",
      Name: "Kesiswaan",
      Keterangan: "Kesiswaan berisi data siswa.",
    },
    {
      Route: "/data_akademik",
      Name: "Data Akademik",
      Keterangan: "Data akademik berisi data akademik siswa.",
    },
    {
      Route: "/elearning",
      Name: "E-learning",
      Keterangan:
        "E-learning merupakan gabungan dari 2 kata, yakni electronic dan learning. Secara harfiah, e-learning adalah pembelajaran secara elektronik atau proses belajar mengajar yang dilakukan secara online.",
    },
    {
      Route: "/logout",
      Name: "Logout",
      Keterangan: "Logout adalah menu untuk keluar dari akun admin.",
    },
    {
      Route: "/settings",
      Name: "Settings",
      Keterangan:
        "Settings adalah menu pengaturan dimana admin dapat mengatur level staff dan otorisasi.",
    },
  ];

  let list2 = [];
  for (let i = 1; i <= 10; i++) {
    list2.push({
      NIS: "19120200" + i,
      Nama: "Siswa " + i,
      Kelas: "XII-IA 2",
    });
  }

  const list_belum_submit_tugas = [
    {
      name: "Mary Jane",
      class: "VII-C",
      tugas: "Tugas Materi Aljabar",
    },
    {
      name: "Gregg",
      class: "VII-B",
      tugas: "Tugas Materi Aljabar",
    },
    {
      name: "John Doe",
      class: "VII-A",
      tugas: "Tugas Materi Aljabar",
    },
    {
      name: "Mary Jane",
      class: "VII-C",
      tugas: "Tugas Materi PPKn",
    },
    {
      name: "Gregg",
      class: "VII-B",
      tugas: "Tugas Materi PPKn",
    },
    {
      name: "John Doe",
      class: "VII-A",
      tugas: "Tugas Materi PPKn",
    },
  ];

  const list_belum_lunas = [
    {
      name: "Katherine",
      class: "VII-C",
      nominal: "565541",
      nis: "190703007",
    },
    {
      name: "Mary Jane",
      class: "VII-C",
      nominal: "565541",
      nis: "190703006",
    },
    {
      name: "Gregg",
      class: "VII-B",
      nominal: "565541",
      nis: "190702009",
    },
    {
      name: "James Barb",
      class: "VII-B",
      nominal: "565541",
      nis: "190702004",
    },
    {
      name: "John Doe",
      class: "VII-A",
      nominal: "565541",
      nis: "190701002",
    },
    {
      name: "Agnes Magnolia",
      class: "VII-A",
      nominal: "565541",
      nis: "190701001",
    },
  ];

  return {
    list1,
    list2,
  };
};
