import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddJamPembelajaran = () => {
  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Jam Pembelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE */}
          <FormItem label="KD" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Kode"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* SESI */}
          <FormItem label="Sesi" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" placeholder="Sesi" size="w-full" />
          </FormItem>

          {/* JAM */}
          <FormItem label="Jam" labelType="label-sm" labelWidth="w-1/4">
            <div className="flex flex-row items-center gap-5">
              <InputFields type="time" size="w-1/6 h-fit" />
              <span className="font-semibold text-sm">s.d</span>
              <InputFields type="time" size="w-1/6 h-fit" />
            </div>
          </FormItem>

          {/* DURASI */}
          <FormItem label="Durasi" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" placeholder="45 menit" size="w-full" />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_master/jam_pembelajaran">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddJamPembelajaran;
