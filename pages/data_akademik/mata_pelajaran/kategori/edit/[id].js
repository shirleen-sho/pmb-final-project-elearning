import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../Components/Layout";
import Button from "../../../../../Components/Buttons";
import InputFields from "../../../../../Components/InputFields";
import FormItem from "../../../../../Components/FormItem";

const EditKategoriMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>
        <FormItem
          label="Edit Kategori Mata Pelajaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE KATEGORI*/}
          <FormItem
            label="Kode Kategori"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              size="w-full"
              disabled={true}
              defaultValue={id}
            />
          </FormItem>

          {/* NAMA KATEGORI */}
          <FormItem
            label="Nama Kategori"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Nama Kategori"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_akademik/mata_pelajaran/kategori">
            Back
          </Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditKategoriMataPelajaran;
