import React from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import Layout from "../../../Components/Layout";

const AddJenisUjian = () => {
  return (
    <Layout>
      <div>
        <FormItem label="Fill Jenis Ujian details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS UJIAN */}
          <FormItem
            label="Kode Jenis Ujian"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Silabus otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* Jenis Ujian */}
          <FormItem label="Jenis Ujian" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis jenis ujian"
              size="w-full"
            />
          </FormItem>

          {/* Bobot */}
          <FormItem label="Bobot (%)" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="Tulis bobot"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/ujian/jenis_ujian">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddJenisUjian;
