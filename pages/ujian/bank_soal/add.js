import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";

const AddBankSoal = () => {
  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const [showPilgan, setShowPilgan] = useState(false);
  const [showEssai, setShowEssai] = useState(false);

  return (
    <Layout>
      <div>
        <FormItem label="Fill Bank Soal details here!" labelType="banner" />
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

          {/* KKM */}
          <FormItem label="KKM" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="number" placeholder="Tulis KKM" size="w-full" />
          </FormItem>

          {/* Nama Bank Soal */}
          <FormItem
            label="Nama Bank Soal"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Tulis nama bank soal"
              size="w-full"
            />
          </FormItem>

          {/* Soal Pilihan Ganda */}
          <Button
            type="success"
            style="w-full"
            handleClick={() => setShowPilgan(!showPilgan)}
          >
            Soal Pilihan Ganda dan Bobot
          </Button>

          {showPilgan && (
            <div className="grid grid-cols-3 gap-x-10">
              <FormItem
                label="Jumlah Soal PG"
                labelType="label-sm"
                formDirection="col"
              >
                <InputFields
                  type="number"
                  placeholder="Jumlah Soal PG"
                  size="w-full"
                />
              </FormItem>
              <FormItem
                label="Bobot Soal (%)"
                labelType="label-sm"
                formDirection="col"
              >
                <InputFields
                  type="number"
                  placeholder="Bobot Soal (%)"
                  size="w-full"
                />
              </FormItem>
              <FormItem
                label="Opsi PG Default"
                labelType="label-sm"
                formDirection="col"
              >
                <Selects
                  list={pilihan_dummy}
                  size="w-full"
                  description="Pilih opsi"
                />
              </FormItem>
            </div>
          )}

          {/* Soal Essai / Uraian */}
          <Button
            type="info"
            style="w-full"
            handleClick={() => setShowEssai(!showEssai)}
          >
            Soal Essai atau Uraian
          </Button>

          {showEssai && (
            <div className="grid grid-cols-2 gap-x-10">
              <FormItem
                label="Jumlah Soal Essai"
                labelType="label-sm"
                formDirection="col"
              >
                <InputFields
                  type="number"
                  placeholder="Jumlah Soal Essai"
                  size="w-full"
                />
              </FormItem>
              <FormItem
                label="Bobot Soal (%)"
                labelType="label-sm"
                formDirection="col"
              >
                <InputFields
                  type="number"
                  placeholder="Bobot Soal (%)"
                  size="w-full"
                />
              </FormItem>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/bank_soal">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddBankSoal;
