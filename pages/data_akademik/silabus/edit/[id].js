import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Selects from "../../../../Components/Selects";
import Uploader from "../../../../Components/Uploader";
import Button from "../../../../Components/Buttons";

const EditSilabus = () => {
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
        <FormItem label="Edit Silabus details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE SILABUS */}
          <FormItem
            label="Kode Silabus"
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
            labelNote="File must be in PDF & docs only"
          >
            <Uploader />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/silabus">
            Back
          </Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditSilabus;
