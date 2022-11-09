import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddJadwalPelajaran = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Jadwal Mata Pelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JADWAL */}
          <FormItem label="Kode Jadwal" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Kode Jadwal otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* TAHUN AKADEMIK */}
          <FormItem
            label="Tahun Akademik"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects list={tahun_akademik} description="Pilih Tahun Akademik" />
          </FormItem>

          {/* TINGKATAN */}
          <FormItem label="Tingkatan" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Tingkatan" />
          </FormItem>

          {/* KELAS */}
          <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Kelas" />
          </FormItem>

          {/* NAMA PELAJARAN */}
          <FormItem
            label="Nama Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects list={tahun_akademik} description="Pilih Nama Pelajaran" />
          </FormItem>

          {/* GURU */}
          <FormItem label="Guru" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Guru" />
          </FormItem>

          {/* HARI */}
          <FormItem label="Hari" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Hari" />
          </FormItem>

          {/* SESI */}
          <FormItem label="Sesi" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Sesi" />
          </FormItem>

          {/* JAM */}
          <FormItem label="Jam" labelType="label-sm" labelWidth="w-1/4">
            <div className="flex flex-row items-center gap-5">
              <InputFields type="time" size="w-1/6 h-fit" />
              <span className="font-semibold text-sm">s.d</span>
              <InputFields type="time" size="w-1/6 h-fit" />
            </div>
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/jadwal_pelajaran">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddJadwalPelajaran;
