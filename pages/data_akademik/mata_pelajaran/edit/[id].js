import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import Button from "../../../../Components/Buttons";
import InputFields from "../../../../Components/InputFields";
import Selects from "../../../../Components/Selects";
import FormItem from "../../../../Components/FormItem";

const EditMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  return (
    <Layout>
      <div>
        <FormItem
          label="Edit Mata Pelajaran details here!"
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
              size="w-full"
              disabled={true}
              defaultValue={id}
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
            Back
          </Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditMataPelajaran;
