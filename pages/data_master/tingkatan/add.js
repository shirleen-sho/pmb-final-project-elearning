import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import FormItem from "../../../Components/FormItem";
import { useAppContext } from "../../../Hooks/useAppContext";

const AddTingkatan = () => {
  const { tingkatan } = useAppContext();
  const { form, setForm, resetForm, handleSubmitAdd } = tingkatan;

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
              value={form.class_name}
              setValue={(e) => setForm({ ...form, class_name: e.target.value })}
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button
            type="light"
            link="/data_master/tingkatan"
            handleClick={resetForm}
          >
            Cancel
          </Button>
          <Button type="primary" handleClick={handleSubmitAdd}>
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddTingkatan;
