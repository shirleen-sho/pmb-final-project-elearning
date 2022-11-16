import React from "react";
import FormItem from "../../../Components/FormItem";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Button from "../../../Components/Buttons";
import RichEditor from "../../../Components/RichEditor";
import RadioButton from "../../../Components/RadioButton";
import Uploader from "../../../Components/Uploader";

const AddPengumuman = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="Fill Siswa details here!" labelType="banner" />
        <div className="grid grid-cols-6 grid-rows-20 gap-x-7 gap-y-4 flex-1">
          <div className="col-start-1 col-span-9 row-start-1">
            <FormItem
              label="Dikirim Ke"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <InputFields type="text" placeholder="Select" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-9 row-start-2">
            <FormItem label="Judul" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Judul" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-9 row-start-3">
            <FormItem label="tanggal" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="date" placeholder="Semua" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-9 row-start-4">
            <FormItem
              label="Muncul Notifikasi"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <RadioButton />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-9 row-start-5">
            <FormItem
              label="lampiran pengumuman"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <Uploader />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-9 row-start-6">
            <FormItem
              label="Deskripsi pengumuman"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <RichEditor />
            </FormItem>
          </div>
        </div>
        <div className="flex gap-5 justify-end">
          <Button type="light" link="/pengumuman">
            Cancel
          </Button>
          <Button type="primary" link="/pengumuman">
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddPengumuman;

