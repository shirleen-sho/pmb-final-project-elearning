import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Button from "../../../../Components/Buttons";

const DetailJadwalUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  return (
    <Layout>
      <div>
        <FormItem label="View Jadwal Ujian details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS UJIAN */}
          <FormItem
            label="Kode Bank Soal"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
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

          {/* Bank Soal */}
          <FormItem label="Bank Soal" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* KKM */}
          <FormItem label="KKM" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="number" size="w-full" disabled />
          </FormItem>

          {/* Ruangan */}
          <FormItem label="Ruangan" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Guru Pengawas */}
          <FormItem
            label="Guru Pengawas"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Tanggal / Waktu Mulai */}
          <FormItem
            label="Tanggal / Waktu Mulai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="datetime-local"
              size="w-1/3"
              style="uppercase"
              disabled
            />
          </FormItem>

          {/* Tanggal / Waktu Selesai */}
          <FormItem
            label="Tanggal / Waktu Selesai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="datetime-local"
              size="w-1/3"
              style="uppercase"
              disabled
            />
          </FormItem>

          {/* Lama Ujian */}
          <FormItem
            label="Lama Ujian (menit)"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="number" size="w-full" disabled />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/jadwal_ujian">
            Back
          </Button>
          <Button type="warning" link={"/ujian/jadwal_ujian/edit/" + id}>
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailJadwalUjian;
