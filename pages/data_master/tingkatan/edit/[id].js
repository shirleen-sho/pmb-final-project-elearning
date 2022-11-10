import React, { useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import Link from "next/link";
import FormItem from "../../../../Components/FormItem";
import { useRouter } from "next/router";

const EditTingkatan = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleUpdateTingkatan = (e) => {
    e.preventDefault();
    // isi fungsi
  };

  return (
    <Layout>
      <div>
        <FormItem
          label={`Edit Tingkatan ID ${id} details here!`}
          labelType="banner"
        />
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
              disabled={true}
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
            Back
          </Button>
          <Button type="primary" handleClick={(e) => handleUpdateTingkatan(e)}>
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditTingkatan;
