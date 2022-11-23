import React, { useEffect, useState } from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TextArea from "../../../Components/TextArea";
import ImageUploader from "../../../Components/ImageUploader";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import axios from "axios";
import Notifikasi from "../../../Components/Notifikasi";

const IdentitasSekolah = (props) => {
  const { identitas_sekolah } = useAppContext();
  const {
    form,
    setForm,
    resetForm,
    handleSubmitEdit,
    notification,
    handleShowNotification,
  } = identitas_sekolah;
  const { data } = props.dataIdentitasSekolah;
  const { school_data } = data;

  useEffect(() => {
    setForm({
      photo: school_data.photo,
      name: school_data.name,
      NPSN: school_data.NPSN,
      NSS: school_data.NSS,
      phone_number: school_data.phone_number,
      email: school_data.email,
      website: school_data.website,
      address: school_data.address,
      districts: school_data.districts,
      city: school_data.city,
      postal_code: school_data.postal_code,
      province: school_data.province,
    });
  }, [
    school_data.NPSN,
    school_data.NSS,
    school_data.address,
    school_data.city,
    school_data.districts,
    school_data.email,
    school_data.name,
    school_data.phone_number,
    school_data.photo,
    school_data.postal_code,
    school_data.province,
    school_data.website,
    setForm,
  ]);

  useEffect(() => {
    if (notification.show) {
      handleShowNotification();
    }
  }, [handleShowNotification, notification]);

  return (
    <Layout>
      {notification.show && (
        <Notifikasi
          type={notification.type}
          description={notification.message}
        />
      )}
      <div className="flex flex-col gap-5">
        <FormItem label="See your School details here!" labelType="banner" />
        <div className="border-b border-neutral-2" />
        <div className="grid grid-cols-9 gap-x-7">
          <div className="col-start-1 col-span-1">
            <FormItem label="Account" labelType="label-md" />
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Foto" labelType="label-sm" labelWidth="w-1/3">
              <ImageUploader
                value={form.photo}
                handleValue={(image) => setForm({ ...form, photo: image })}
              />
            </FormItem>
            <FormItem label="Nama" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Nama"
                size="w-full"
                value={form.name}
                setValue={(e) => setForm({ ...form, name: e.target.value })}
              />
            </FormItem>
            <FormItem label="NPSN" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="NPSN"
                size="w-full"
                value={form.NPSN}
                setValue={(e) => setForm({ ...form, NPSN: e.target.value })}
              />
            </FormItem>
            <FormItem label="NSS" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="NSS"
                size="w-full"
                value={form.NSS}
                setValue={(e) => setForm({ ...form, NSS: e.target.value })}
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
                value={form.phone_number}
                setValue={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
              />
            </FormItem>
            <FormItem label="Email" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Email"
                size="w-full"
                value={form.email}
                setValue={(e) => setForm({ ...form, email: e.target.value })}
              />
            </FormItem>
            <FormItem label="Website" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Website"
                size="w-full"
                value={form.website}
                setValue={(e) => setForm({ ...form, website: e.target.value })}
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
              <TextArea
                placeholder="Alamat"
                value={form.address}
                setValue={(e) => setForm({ ...form, address: e.target.value })}
              />
            </FormItem>
          </div>
          <div className="col-start-2 col-span-4 flex flex-col gap-5">
            <FormItem label="Kecamatan" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Kecamatan"
                size="w-full"
                value={form.districts}
                setValue={(e) =>
                  setForm({ ...form, districts: e.target.value })
                }
              />
            </FormItem>
            <FormItem label="Kode Pos" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Kode Pos"
                size="w-full"
                value={form.postal_code}
                setValue={(e) =>
                  setForm({ ...form, postal_code: e.target.value })
                }
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
                value={form.city}
                setValue={(e) => setForm({ ...form, city: e.target.value })}
              />
            </FormItem>
            <FormItem label="Provinsi" labelType="label-sm" labelWidth="w-1/3">
              <InputFields
                type="text"
                placeholder="Provinsi"
                size="w-full"
                value={form.province}
                setValue={(e) => setForm({ ...form, province: e.target.value })}
              />
            </FormItem>
          </div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Button
            type="primary"
            handleClick={(e) => {
              e.preventDefault();
              handleSubmitEdit();
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  const res = await axios.get(
    "https://api.starling.kotasatelit.com/api/school-identity/1"
  );
  const dataIdentitasSekolah = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataIdentitasSekolah } };
}

export default IdentitasSekolah;
