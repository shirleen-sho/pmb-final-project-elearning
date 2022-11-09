import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddMataPelajaran = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Mata Pelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE MATA PELAJARAN */}
          <FormItem
            label="Kode Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Mata Pelajaran otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* KATEGORI MATA PELAJARAN */}
          <FormItem
            label="Kategori Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects list={tahun_akademik} description="Pilih Kategori" />
          </FormItem>

          {/* NAMA MATA PELAJARAN */}
          <FormItem
            label="Nama Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects
              list={tahun_akademik}
              description="Pilih Nama Mata Pelajaran"
            />
          </FormItem>

          {/* GURU */}
          <FormItem
            label="Guru Pengampuh"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects list={tahun_akademik} description="Pilih Guru Pengampuh" />
          </FormItem>

          {/* KKM TUGAS*/}
          <FormItem label="KKM Tugas" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="Tulis Nilai KKM"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/mata_pelajaran">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddMataPelajaran;
