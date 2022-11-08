import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddSilabus = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  const pilihan_status = [
    { label: "Aktif", value: "aktif" },
    { label: "Tidak Aktif", value: "nonaktif" },
  ];

  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleChangeStatus = (e) => setSelectedStatus(e.target.value);

  return (
    <Layout>
      <div>
        <FormItem label="Fill Silabus details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE SILABUS */}
          <FormItem
            label="Kode Silabus"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Silabus otomatis"
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

          {/* SEMESTER */}
          <FormItem label="Semester" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Semester" />
          </FormItem>

          {/* NAMA PELAJARAN */}
          <FormItem
            label="Nama Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects list={tahun_akademik} description="Pilih Nama Pelajaran" />
          </FormItem>

          {/* KELAS */}
          <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/4">
            <Selects list={tahun_akademik} description="Pilih Kelas" />
          </FormItem>

          {/* FILE */}
          <FormItem
            label="File"
            labelType="label-sm"
            labelWidth="w-1/4"
            helper={true}
          >
            <InputFields type="file" placeholder="File Silabus" size="w-full" />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/silabus">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddSilabus;
