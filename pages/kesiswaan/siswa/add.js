import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TextArea from "../../../Components/TextArea";
import ImageUploader from "../../../Components/ImageUploader";

const AddSiswa = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="Fill Siswa details here!" labelType="banner" />
        <div className="border-b border-neutral-2" />
        {/* start form */}
        <h3 className="font-bold underline underline-offset-2 mb-1">
          DATA DIRI
        </h3>
        <div className="grid grid-cols-9 grid-rows-11 gap-x-7 gap-y-4">
          <div className="col-start-1 col-span-4 row-start-1 row-span-2">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-3 row-span-1">
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Nama" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-4 row-span-1">
            <FormItem label="NUPTK" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="NUPTK" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-5 row-span-1">
            <FormItem
              label="Jenis Kelamin"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <Selects
                list={[{ name: "Pria" }, { name: "Wanita" }]}
                style="w-full"
                description="Pilih Jenis Kelamin"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-6 row-span-1">
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tempat Lahir"
                size="w-full"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-7 row-span-1">
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="date"
                placeholder="Tanggal Lahir"
                size="w-full"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-8 row-span-1">
            <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/3">
              <Selects
                list={[{ name: "A" }, { name: "B" }]}
                style="w-full"
                description="Pilih Kelas"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-9 row-span-1">
            <FormItem label="Agama" labelType="label-sm" labelWidth="w-1/3">
              <Selects
                list={[
                  { name: "Islam" },
                  { name: "Protestan" },
                  { name: "Katolik" },
                  { name: "Hindu" },
                  { name: "Buddha" },
                  { name: "Konghucu" },
                ]}
                style="w-full"
                description="Pilih Agama"
              />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-10 row-span-1">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields type="text" placeholder="No.Telp/WA" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-1 col-span-4 row-start-11 row-span-1">
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Email" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-5 col-span-1 row-start-1 row-span-6">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-6 col-span-4 row-start-1 row-span-1">
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Provinsi" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-2 row-span-1">
            <FormItem
              label="Kabupaten / Kota"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Kabupaten / Kota"
                size="w-full"
              />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-3 row-span-1">
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Kecamatan" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-4 row-span-1">
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Kode Pos" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-5 row-span-2">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/3">
              <TextArea placeholder="Alamat" />
            </FormItem>
          </div>
          <div className="col-start-5 col-span-5 row-start-6 border-b border-neutral-2"></div>
          <div className="col-start-5 col-span-1 row-start-7 row-span-2">
            <FormItem label="Password" labelType="label-md" />
          </div>
          <div className="col-start-6 col-span-4 row-start-7 row-span-1">
            <FormItem label="Password" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Password" size="w-full" />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 row-start-8 row-span-1">
            <FormItem
              label="Confirm Password"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Confirm Password"
                size="w-full"
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        {/* end form */}
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/kesiswaan/siswa">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddSiswa;
