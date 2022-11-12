import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import Button from "../../../../Components/Buttons";
import Uploader from "../../../../Components/Uploader";
import FormItem from "../../../../Components/FormItem";

const DetailRPP = () => {
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
        <FormItem label="View RPP details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE RPP */}
          <FormItem label="Kode RPP" labelType="label-sm" labelWidth="w-1/4">
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* TAHUN AKADEMIK */}
          <FormItem
            label="Tahun Akademik"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* SEMESTER */}
          <FormItem label="Semester" labelType="label-sm" labelWidth="w-1/4">
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* NAMA PELAJARAN */}
          <FormItem
            label="Nama Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <FormItem label={id} labelType="read-only" />
          </FormItem>

          {/* KELAS */}
          <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/4">
            <FormItem label={id} labelType="read-only" />
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
          <Button type="light" link="/data_akademik/rpp">
            Back
          </Button>
          <Button type="danger" link={"/data_akademik/rpp/archive"}>
            Archive
          </Button>
          <Button type="warning" link={"/data_akademik/rpp/edit/" + id}>
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailRPP;
