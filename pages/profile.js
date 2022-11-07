import React, { useState } from "react";
import Button from "../Components/Buttons";
import FormItem from "../Components/FormItem";
import InputFields from "../Components/InputFields";
import Layout from "../Components/Layout";
import Selects from "../Components/Selects";
import TextArea from "../Components/TextArea";
import ImageUploader from "../Components/ImageUploader";

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Account" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader />
            </FormItem>
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Nama" size="w-full" />
            </FormItem>
            <FormItem label="NPS" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="NPS" size="w-full" />
            </FormItem>
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
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields type="text" placeholder="No.Telp/WA" size="w-full" />
            </FormItem>
            <FormItem
              label="Tempat Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tempat lahir"
                size="w-full"
              />
            </FormItem>
            <FormItem
              label="Tanggal Lahir"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Tanggal lahir"
                size="w-full"
              />
            </FormItem>
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields type="text" placeholder="Email" size="w-full" />
            </FormItem>
            <FormItem label="Level" labelType="label-sm" labelWidth="w-1/3">
              <Selects
                list={[{ name: "Admin" }, { name: "Security" }]}
                style="w-full"
                description="Pilih Level"
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-full flex flex-col gap-5">
            <FormItem label="Alamat" labelType="label-sm" labelWidth="w-1/5">
              <TextArea placeholder="Alamat" />
            </FormItem>
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Kecamatan" size="w-1/3" />
            </FormItem>
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Kode Pos" size="w-1/3" />
            </FormItem>
            <FormItem
              label="Kabupaten / Kota"
              labelType="label-sm"
              labelWidth="w-1/5"
            >
              <InputFields
                type="text"
                placeholder="Kabupaten / Kota"
                size="w-1/3"
              />
            </FormItem>
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/5">
              <InputFields type="text" placeholder="Provinsi" size="w-1/3" />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Button type="light">Back</Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
