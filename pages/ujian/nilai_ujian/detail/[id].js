import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Button from "../../../../Components/Buttons";

const DetailNilaiUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>
        <FormItem label="View Nilai Ujian details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE NILAI UJIAN */}
          <FormItem
            label="Kode Nilai Ujian"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Nama Siswa */}
          <FormItem label="Nama Siswa" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Mata Pelajaran */}
          <FormItem
            label="Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Tanggal/Waktu Ujian */}
          <FormItem
            label="Tanggal/Waktu Ujian"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Nilai */}
          <FormItem label="Nilai" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/nilai_ujian">
            Back
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailNilaiUjian;
