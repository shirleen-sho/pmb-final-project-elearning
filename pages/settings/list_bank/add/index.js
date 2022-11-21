import React, { useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import FormItem from "../../../../Components/FormItem";
import Uploader from "../../../../Components/Uploader";

const AddListBank = () => {
  return (
    <Layout>
      <div>
        <FormItem label="Fill Bank details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE BANK */}
          <FormItem label="Kode Bank" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled={true} />
          </FormItem>

          {/* NAMA BANK */}
          <FormItem label="Nama Bank" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis nama bank"
              size="w-full"
            />
          </FormItem>

          {/* FILE */}
          <FormItem
            label="Logo Bank"
            labelType="label-sm"
            labelWidth="w-1/4"
            labelNote="File must be in JPG, JPEG, & PNG only"
          >
            <Uploader />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/settings/list_bank">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddListBank;
