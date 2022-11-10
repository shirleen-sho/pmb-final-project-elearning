import React, { useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import Selects from "../../../../Components/Selects";
import Link from "next/link";
import FormItem from "../../../../Components/FormItem";

const AddKategoriMataPelajaran = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Kategori Mata Pelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE KATEGORI*/}
          <FormItem
            label="Kode Kategori"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Kategori otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* NAMA KATEGORI */}
          <FormItem
            label="Nama Kategori"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Nama Kategori"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/mata_pelajaran/kategori">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddKategoriMataPelajaran;
