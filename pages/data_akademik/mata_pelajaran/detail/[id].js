import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";

const DetailMataPelajaran = () => {
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
          label="View Mata Pelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE MATA PELAJARAN */}
          <FormItem
            label="Kode Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* KATEGORI MATA PELAJARAN */}
          <FormItem
            label="Kategori Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* NAMA MATA PELAJARAN */}
          <FormItem
            label="Nama Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* GURU */}
          <FormItem
            label="Guru Pengampuh"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* KKM TUGAS*/}
          <FormItem label="KKM Tugas" labelType="label-sm" labelWidth="w-1/4">
            <FormItem label={id} labelType="read-only" />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/mata_pelajaran">
            Back
          </Button>
          <Button type="danger" link={"/data_akademik/mata_pelajaran/archive"}>
            Archive
          </Button>
          <Button
            type="warning"
            link={"/data_akademik/mata_pelajaran/edit/" + id}
          >
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMataPelajaran;
