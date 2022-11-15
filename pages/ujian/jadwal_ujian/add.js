import React from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";

const AddJadwalUjian = () => {
  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  return (
    <Layout>
      <div>
        <FormItem label="Fill Jadwal Ujian details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS UJIAN */}
          <FormItem
            label="Kode Bank Soal"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Bank Soal otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* Mata Pelajaran */}
          <FormItem
            label="Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects
              list={pilihan_dummy}
              size="w-full"
              description="Pilih mata pelajaran"
            />
          </FormItem>

          {/* Bank Soal */}
          <FormItem label="Bank Soal" labelType="label-sm" labelWidth="w-1/4">
            <Selects
              list={pilihan_dummy}
              size="w-full"
              description="Pilih bank soal"
            />
          </FormItem>

          {/* KKM */}
          <FormItem label="KKM" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="number" placeholder="Tulis KKM" size="w-full" />
          </FormItem>

          {/* Ruangan */}
          <FormItem label="Ruangan" labelType="label-sm" labelWidth="w-1/4">
            <Selects
              list={pilihan_dummy}
              size="w-full"
              description="Pilih ruangan"
            />
          </FormItem>

          {/* Guru Pengawas */}
          <FormItem
            label="Guru Pengawas"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects
              list={pilihan_dummy}
              size="w-full"
              description="Pilih guru pengawas"
            />
          </FormItem>

          {/* Tanggal / Waktu Mulai */}
          <FormItem
            label="Tanggal / Waktu Mulai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="datetime-local" size="w-1/3" style="uppercase" />
          </FormItem>

          {/* Tanggal / Waktu Selesai */}
          <FormItem
            label="Tanggal / Waktu Selesai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="datetime-local" size="w-1/3" style="uppercase" />
          </FormItem>

          {/* Lama Ujian */}
          <FormItem
            label="Lama Ujian (menit)"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="number"
              placeholder="Tulis lama ujian"
              size="w-1/3"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/jadwal_ujian">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddJadwalUjian;
