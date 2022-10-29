import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddTingkatan = () => {
  return (
    <Layout>
      <div>
        <FormItem label="Fill Tingkatan details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE TINGKATAN */}
          <FormItem
            label="Kode Tingkatan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Tingkatan otomatis"
              size="w-full"
            />
          </FormItem>

          {/* NAMA TINGKATAN */}
          <FormItem
            label="Nama Tingkatan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Tulis nama tingkatan"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_master/tingkatan">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddTingkatan;
