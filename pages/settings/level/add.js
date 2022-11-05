import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddLevelStaff = () => {
  return (
    <Layout>
      <div>
        <FormItem label="Fill Level Staff details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE LEVEL */}
          <FormItem label="Kode" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Kode otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* LEVEL STAFF */}
          <FormItem label="Level Staff" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis level staff"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/settings">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddLevelStaff;
