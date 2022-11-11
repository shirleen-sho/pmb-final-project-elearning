import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TextArea from "../../../Components/TextArea";
import ImageUploader from "../../../Components/ImageUploader";
import { serverProps } from "../../../lib/serverProps";

const IdentitasSekolah = (props) => {
  console.log(props);
  const {
    NPSN,
    address,
    city,
    districts,
    email,
    id,
    level,
    name,
    phone_number,
    photo,
    postal_code,
    province,
    school_id,
    status,
    website,
  } = props.dataIdentitasSekolah.school_data;

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="See your School details here!" labelType="banner" />
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Account" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader />
            </FormItem>
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Nama"
                size="w-full"
                valueLock={name}
              />
            </FormItem>
            <FormItem label="NPSN" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="NPSN"
                size="w-full"
                valueLock={NPSN}
              />
            </FormItem>
            <FormItem label="NSS" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="NSS"
                size="w-full"
                valueLock={school_id}
              />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            <FormItem
              label="No.Telp/WA"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="No.Telp/WA"
                size="w-full"
                valueLock={phone_number}
              />
            </FormItem>
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Email"
                size="w-full"
                valueLock={email}
              />
            </FormItem>
            <FormItem label="Website" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Website"
                size="w-full"
                valueLock={website}
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Address" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-full mb-4">
            <FormItem
              label="Alamat"
              labelType="label-sm"
              labelWidth="w-[13.5%]"
            >
              <TextArea placeholder="Alamat" valueLock={address} />
            </FormItem>
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Kecamatan"
                size="w-full"
                valueLock={districts}
              />
            </FormItem>
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Kode Pos"
                size="w-full"
                valueLock={postal_code}
              />
            </FormItem>
          </div>
          <div className="col-start-6 col-span-4 flex flex-col gap-5">
            <FormItem
              label="Kabupaten / Kota"
              labelType="label-sm"
              labelWidth="w-1/3"
            >
              <InputFields
                type="text"
                placeholder="Kabupaten / Kota"
                size="w-full"
                valueLock={city}
              />
            </FormItem>
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Provinsi"
                size="w-full"
                valueLock={province}
              />
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

export async function getStaticProps() {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  const api = await fetch(
    "https://api.starling.kotasatelit.com/api/school-identity/1"
  );
  const res = await api.json();
  const dataIdentitasSekolah = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataIdentitasSekolah } };
}

export default IdentitasSekolah;
