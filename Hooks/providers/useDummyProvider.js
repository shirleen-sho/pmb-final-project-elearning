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

  const list_tahun_akademik = [
    {
      "Kode Tahun Akademik": 202223,
      "Nama Tahun": "Semester Ganjil 2022/2023",
      Semester: 1,
      Status: "Aktif",
    },
    {
      "Kode Tahun Akademik": 202425,
      "Nama Tahun": "Semester Genap 2024/2025",
      Semester: 2,
      Status: "Tidak Aktif",
    },
    {
      "Kode Tahun Akademik": 202526,
      "Nama Tahun": "Semester Ganjil 2025/2026",
      Semester: 1,
      Status: "Tidak Aktif",
    },
    {
      "Kode Tahun Akademik": 202728,
      "Nama Tahun": "Semester Ganjil 2027/2028",
      Semester: 1,
      Status: "Tidak Aktif",
    },
  ];

  const list_gedung = [
    {
      "Kode Gedung": "G001",
      "Nama Gedung": "Gedung Alpha",
      "Jumlah Lantai": "8 lantai",
      Panjang: "50 m",
      Tinggi: "100 m",
      Lebar: "25 m",
      Status: "Aktif",
    },
    {
      "Kode Gedung": "G002",
      "Nama Gedung": "Gedung Beta",
      "Jumlah Lantai": "4 lantai",
      Panjang: "100 m",
      Tinggi: "200 m",
      Lebar: "50 m",
      Status: "Tidak Aktif",
    },
    {
      "Kode Gedung": "G003",
      "Nama Gedung": "Gedung Kuning",
      "Jumlah Lantai": "2 lantai",
      Panjang: "150 m",
      Tinggi: "300 m",
      Lebar: "75 m",
      Status: "Tidak Aktif",
    },
  ];

  const list_ruangan = [
    {
      "Kode Ruangan": "RG1",
      "Nama Gedung": "Gedung Alpha",
      "Nama Ruangan": "Ruang Guru",
      Kapasitas: "20 orang",
      Status: "Tidak Aktif",
    },
    {
      "Kode Ruangan": "RB1",
      "Nama Gedung": "Gedung Beta",
      "Nama Ruangan": "Ruang Guru",
      Kapasitas: "20 orang",
      Status: "Aktif",
    },
    {
      "Kode Ruangan": "RKS1",
      "Nama Gedung": "Gedung Kuning",
      "Nama Ruangan": "Yellow01",
      Kapasitas: "20 orang",
      Status: "Aktif",
    },
    {
      "Kode Ruangan": "RB2",
      "Nama Gedung": "Gedung Beta",
      "Nama Ruangan": "Beta01",
      Kapasitas: "20 orang",
      Status: "Aktif",
    },
    {
      "Kode Ruangan": "RG2",
      "Nama Gedung": "Gedung Alpha",
      "Nama Ruangan": "Alpha01",
      Kapasitas: "20 orang",
      Status: "Aktif",
    },
  ];

  const list_tingkatan = [
    {
      "Kode Tingkatan": "JU01",
      "Nama Tingkatan": "I",
    },
    {
      "Kode Tingkatan": "JU02",
      "Nama Tingkatan": "II",
    },
    {
      "Kode Tingkatan": "JU03",
      "Nama Tingkatan": "III",
    },
    {
      "Kode Tingkatan": "JU04",
      "Nama Tingkatan": "IV",
    },
  ];

  const list_kelas = [
    {
      "Kode Kelas": "K1",
      "Nama Kelas": "IV A",
      "Wali Kelas": "Wali Kelas",
      Ruangan: "Alpha01",
      Gedung: "Gedung Alpha",
      "Jumlah Siswa": 20,
      "Max Siswa": 30,
    },
    {
      "Kode Kelas": "K2",
      "Nama Kelas": "V C",
      "Wali Kelas": "Wali Kelas",
      Ruangan: "Yellow01",
      Gedung: "Gedung Kuning",
      "Jumlah Siswa": 15,
      "Max Siswa": 40,
    },
    {
      "Kode Kelas": "K3",
      "Nama Kelas": "VII B",
      "Wali Kelas": "Wali Kelas",
      Ruangan: "Yellow02",
      Gedung: "Gedung Kuning",
      "Jumlah Siswa": 23,
      "Max Siswa": 35,
    },
    {
      "Kode Kelas": "K4",
      "Nama Kelas": "I A",
      "Wali Kelas": "Wali Kelas",
      Ruangan: "Beta01",
      Gedung: "Gedung Beta",
      "Jumlah Siswa": 22,
      "Max Siswa": 25,
    },
  ];

  const list_kegiatan = [
    {
      "Tanggal Mulai": "18 August 2022",
      "Tanggal Akhir": "30 December 2022",
      Keterangan: "Program Magang MBKM",
    },
    {
      "Tanggal Mulai": "16 March 2022",
      "Tanggal Akhir": "28 April 2022",
      Keterangan: "Ujian Akhir Semester",
    },
    {
      "Tanggal Mulai": "5 January 2022",
      "Tanggal Akhir": "19 January 2022",
      Keterangan: "Ujian Akhir Semester",
    },
  ];

  const list_jam_pembelajaran = [
    {
      KD: "JP01",
      Sesi: "I",
      "Jam Mulai": "07.30",
      "Jam Selesai": "08.15",
      Durasi: "45 menit",
    },
    {
      KD: "JP02",
      Sesi: "II",
      "Jam Mulai": "08.15",
      "Jam Selesai": "08.50",
      Durasi: "45 menit",
    },
    {
      KD: "JP03",
      Sesi: "III",
      "Jam Mulai": "08.50",
      "Jam Selesai": "09.25",
      Durasi: "45 menit",
    },
    {
      KD: "JP04",
      Sesi: "Istirahat",
      "Jam Mulai": "09.25",
      "Jam Selesai": "10.00",
      Durasi: "45 menit",
    },
  ];

  const list_level_staff = [
    {
      kode_level: "S001",
      staff_level: "Staff TU",
    },
    {
      kode_level: "S002",
      staff_level: "Guru",
    },
  ];

  const list_pengaturan_otorisasi = [
    {
      kode_level: "S001",
      otorisasi: [
        {
          menu: "Data Master",
          tambah: false,
          lihat: false,
          edit: false,
          hapus: false,
        },
        {
          menu: "Kepegawaian",
          tambah: false,
          lihat: false,
          edit: false,
          hapus: false,
        },
        {
          menu: "Kesiswaan",
          tambah: false,
          lihat: false,
          edit: false,
          hapus: false,
        },
        {
          menu: "Data Akademik",
          tambah: false,
          lihat: false,
          edit: false,
          hapus: false,
        },
      ],
    },
    {
      kode_level: "S002",
      otorisasi: [
        {
          menu: "Data Master",
          tambah: false,
          lihat: true,
          edit: false,
          hapus: false,
        },
        {
          menu: "Kepegawaian",
          tambah: false,
          lihat: true,
          edit: false,
          hapus: false,
        },
        {
          menu: "Kesiswaan",
          tambah: false,
          lihat: true,
          edit: false,
          hapus: false,
        },
        {
          menu: "Data Akademik",
          tambah: true,
          lihat: true,
          edit: true,
          hapus: true,
        },
      ],
    },
  ];

  const dataDummyTrial1 = [
    {
      kode_ruangan: "RG1",
      nama_gedung: "Gedung Alpha 1",
      nama_ruangan: {
        nama_ruangan_1: "Kantin A",
      },
      kapasitas: 100,
    },
    {
      kode_ruangan: "RG2",
      nama_gedung: "Gedung Alpha 2",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Komputer 01",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG3",
      nama_gedung: "Gedung Alpha 3",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Biologi",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG4",
      nama_gedung: "Gedung Alpha 4",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Fisika",
      },
      kapasitas: 100,
    },
  ];

  const dataDummyTrial2 = [
    {
      kode_ruangan: "RG1",
      nama_gedung: "Gedung Alpha 1",
      nama_ruangan: {
        nama_ruangan_1: "Kantin A",
        nama_ruangan_2: "Kantin B",
      },
      kapasitas: 100,
    },
    {
      kode_ruangan: "RG2",
      nama_gedung: "Gedung Alpha 2",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Komputer 01",
        nama_ruangan_2: "Ruang Komputer 02",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG3",
      nama_gedung: "Gedung Alpha 3",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Biologi",
        nama_ruangan_2: "Ruang Lab Kimia",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG4",
      nama_gedung: "Gedung Alpha 4",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Fisika",
        nama_ruangan_2: "Ruang Serbaguna",
      },
      kapasitas: 100,
    },
  ];

  const dataDummyTrial3 = [
    {
      kode_ruangan: "RG1",
      nama_gedung: "Gedung Alpha 1",
      nama_ruangan: {
        nama_ruangan_1: "Kantin A",
        nama_ruangan_2: "Kantin B",
        nama_ruangan_3: "Ruang UKS",
      },
      kapasitas: 100,
    },
    {
      kode_ruangan: "RG2",
      nama_gedung: "Gedung Alpha 2",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Komputer 01",
        nama_ruangan_2: "Ruang Komputer 02",
        nama_ruangan_3: "Gudang",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG3",
      nama_gedung: "Gedung Alpha 3",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Biologi",
        nama_ruangan_2: "Ruang Lab Kimia",
        nama_ruangan_3: "Gudang",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG4",
      nama_gedung: "Gedung Alpha 4",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Fisika",
        nama_ruangan_2: "Ruang Serbaguna",
        nama_ruangan_3: "Gudang",
      },
      kapasitas: 100,
    },
  ];

  const dataDummyTrial4 = [
    {
      kode_ruangan: "RG1",
      nama_gedung: "Gedung Alpha 1",
      nama_ruangan: {
        nama_ruangan_1: "Kantin A",
        nama_ruangan_2: "Kantin B",
        nama_ruangan_3: "Dapur",
        nama_ruangan_4: "Ruang UKS",
      },
      kapasitas: 100,
    },
    {
      kode_ruangan: "RG2",
      nama_gedung: "Gedung Alpha 2",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Komputer 01",
        nama_ruangan_2: "Ruang Komputer 02",
        nama_ruangan_3: "Ruang Arsip",
        nama_ruangan_4: "Gudang",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG3",
      nama_gedung: "Gedung Alpha 3",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Biologi",
        nama_ruangan_2: "Ruang Lab Kimia",
        nama_ruangan_3: "Perpustakaan",
        nama_ruangan_4: "Gudang",
      },
      kapasitas: 50,
    },
    {
      kode_ruangan: "RG4",
      nama_gedung: "Gedung Alpha 4",
      nama_ruangan: {
        nama_ruangan_1: "Ruang Lab Fisika",
        nama_ruangan_2: "Ruang Serbaguna",
        nama_ruangan_3: "Ruang Serbaguna",
        nama_ruangan_4: "Gudang",
      },
      kapasitas: 100,
    },
  ];

  const users = [
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 1,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 2,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 3,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 4,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 5,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 6,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 7,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 8,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 9,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 10,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 11,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 12,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 13,
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
      id: 14,
    },
  ];

  const list_siswa = [
    {
      nim: "2569874",
      name: "Pendi",
      kelas: "XII-IA 2",
      jenis_kelamin: "pendi@gmail.com",
      tempat_lahir: "Batam",
      tanggal_lahir: "05/11/2003",
    },
    {
      nim: "2569875",
      name: "Poppy",
      kelas: "XII-IA 2",
      jenis_kelamin: "poppy@gmail.com",
      tempat_lahir: "Batam",
      tanggal_lahir: "01/03/2004",
    },
    {
      nim: "2569876",
      name: "Puput Lestari",
      kelas: "XII-IA 2",
      jenis_kelamin: "puput@gmail.com",
      tempat_lahir: "Batam",
      tanggal_lahir: "18/12/2003",
    },
    {
      nim: "2569877",
      name: "Refal",
      kelas: "XII-IA 2",
      jenis_kelamin: "refal@gmail.com",
      tempat_lahir: "Batam",
      tanggal_lahir: "20/05/2004",
    },
  ];

  const list_jadwal_pelajaran = [
    {
      sesi: "I",
      waktu: "07.30 - 08.15",
      nama_hari: {
        senin: "Matematika",
        selasa: "Matematika",
        rabu: "Bahasa Indonesia",
        kamis: "PPKn",
        jumat: "IPS",
        sabtu: "PPKn",
      },
    },
    {
      sesi: "II",
      waktu: "07.30 - 08.15",
      nama_hari: {
        senin: "Matematika",
        selasa: "Matematika",
        rabu: "Bahasa Indonesia",
        kamis: "PPKn",
        jumat: "IPS",
        sabtu: "PPKn",
      },
    },
    {
      sesi: "III",
      waktu: "07.30 - 08.15",
      nama_hari: {
        senin: "Matematika",
        selasa: "Matematika",
        rabu: "Bahasa Indonesia",
        kamis: "PPKn",
        jumat: "IPS",
        sabtu: "PPKn",
      },
    },
    {
      sesi: "IV",
      waktu: "07.30 - 08.15",
      nama_hari: {
        senin: "Matematika",
        selasa: "Matematika",
        rabu: "Bahasa Indonesia",
        kamis: "PPKn",
        jumat: "IPS",
        sabtu: "PPKn",
      },
    },
    {
      sesi: "V",
      waktu: "07.30 - 08.15",
      nama_hari: {
        senin: "Matematika",
        selasa: "Matematika",
        rabu: "Bahasa Indonesia",
        kamis: "PPKn",
        jumat: "IPS",
        sabtu: "PPKn",
      },
    },
  ];

  const list_silabus = [
    {
      nama_mata_pelajaran: "Bahasa Indonesia",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL001",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Bahasa Inggris",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL002",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Bahasa Mandarin",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL003",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Fisika",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL004",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Kimia",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL005",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Biologi",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_silabus: "SL006",
      file: "Nama File",
    },
  ];

  const list_rpp = [
    {
      nama_mata_pelajaran: "Bahasa Indonesia",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL001",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Bahasa Inggris",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL002",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Bahasa Mandarin",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL003",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Fisika",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL004",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Kimia",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL005",
      file: "Nama File",
    },
    {
      nama_mata_pelajaran: "Biologi",
      kelas: "VII B",
      tahun_akademik: "Semester Ganjil 2022/2023",
      kode_rpp: "SL006",
      file: "Nama File",
    },
  ];

  const list_kategori_mata_pelajaran = [
    { kode_kategori: "K001", nama_kategori: "Muatan Nasional" },
    { kode_kategori: "K002", nama_kategori: "Muatan Kewilayahan" },
  ];

  const list_mata_pelajaran = [
    {
      kode_mata_pelajaran: "MP0001",
      nama_mata_pelajaran: "Bahasa Inggris",
      guru_pengampuh: "Bu Eka",
      kkm: 85,
    },
    {
      kode_mata_pelajaran: "MP0002",
      nama_mata_pelajaran: "Bahasa Indonesia",
      guru_pengampuh: "Pak Hebron",
      kkm: 85,
    },
    {
      kode_mata_pelajaran: "MP0003",
      nama_mata_pelajaran: "Fisika",
      guru_pengampuh: "Pak Rajin",
      kkm: 85,
    },
    {
      kode_mata_pelajaran: "MP0004",
      nama_mata_pelajaran: "Biologi",
      guru_pengampuh: "Bu Ruth",
      kkm: 85,
    },
    {
      kode_mata_pelajaran: "MP0005",
      nama_mata_pelajaran: "Bahasa Indonesia",
      guru_pengampuh: "Pak Hebron",
      kkm: 85,
    },
  ];

  return {
    list1,
    list2,
    list_belum_submit_tugas,
    list_belum_lunas,
    list_tahun_akademik,
    list_gedung,
    list_ruangan,
    list_tingkatan,
    list_kelas,
    list_kegiatan,
    list_jam_pembelajaran,
    list_level_staff,
    list_pengaturan_otorisasi,
    dataDummyTrial1,
    dataDummyTrial2,
    dataDummyTrial3,
    dataDummyTrial4,
    users,
    list_siswa,
    list_jadwal_pelajaran,
    list_silabus,
    list_rpp,
    list_kategori_mata_pelajaran,
    list_mata_pelajaran,
  };
};
