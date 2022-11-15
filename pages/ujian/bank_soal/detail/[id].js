import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Selects from "../../../../Components/Selects";
import Button from "../../../../Components/Buttons";

const DetailBankSoal = () => {
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
        <FormItem label="View Bank Soal details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS UJIAN */}
          <FormItem
            label="Kode Bank Soal"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled value={id} />
          </FormItem>

          {/* Mata Pelajaran */}
          <FormItem
            label="Mata Pelajaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* KKM */}
          <FormItem label="KKM" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="number" size="w-full" disabled />
          </FormItem>

          {/* Nama Bank Soal */}
          <FormItem
            label="Nama Bank Soal"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled />
          </FormItem>

          {/* Soal Pilihan Ganda */}
          <Button
            type="success"
            style="w-full"
            handleClick={(e) => e.preventDefault()}
          >
            Soal Pilihan Ganda dan Bobot
          </Button>

          <div className="grid grid-cols-3 gap-x-10">
            <FormItem
              label="Jumlah Soal PG"
              labelType="label-sm"
              formDirection="col"
            >
              <InputFields type="number" size="w-full" disabled />
            </FormItem>
            <FormItem
              label="Bobot Soal (%)"
              labelType="label-sm"
              formDirection="col"
            >
              <InputFields type="number" size="w-full" disabled />
            </FormItem>
            <FormItem
              label="Opsi PG Default"
              labelType="label-sm"
              formDirection="col"
            >
              <InputFields type="text" size="w-full" disabled />
            </FormItem>
          </div>
          {/* Soal Essai / Uraian */}
          <Button
            type="info"
            style="w-full"
            handleClick={(e) => e.preventDefault()}
          >
            Soal Essai atau Uraian
          </Button>

          <div className="grid grid-cols-2 gap-x-10">
            <FormItem
              label="Jumlah Soal Essai"
              labelType="label-sm"
              formDirection="col"
            >
              <InputFields type="number" size="w-full" disabled />
            </FormItem>
            <FormItem
              label="Bobot Soal (%)"
              labelType="label-sm"
              formDirection="col"
            >
              <InputFields type="number" size="w-full" disabled />
            </FormItem>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/bank_soal">
            Back
          </Button>
          <Button type="warning" link={"/ujian/bank_soal/edit/" + id}>
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailBankSoal;
