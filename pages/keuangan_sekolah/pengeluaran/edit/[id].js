import React, { useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import FormItem from "../../../../Components/FormItem";

const EditPengeluaran = () => {
  return (
    <Layout>
      <div>
        <FormItem label="Edit Pengeluaran details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE PENGELUARAN */}
          <FormItem
            label="Kode Pengeluaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled={true} />
          </FormItem>

          {/* KETERANGAN */}
          <FormItem label="Keterangan" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis keterangan"
              size="w-full"
            />
          </FormItem>

          {/* JUMLAH BARANG */}
          <FormItem
            label="Jumlah Barang"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="number" placeholder="0" size="w-1/2" />
          </FormItem>

          {/* JUMLAH RUPIAH */}
          <FormItem
            label="Jumlah Rupiah"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="number" placeholder="0" size="w-1/2" />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/keuangan_sekolah/pengeluaran">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditPengeluaran;
