import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";

const AddJenisPembayaran = () => {
  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Jenis Pembayaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS PEMBAYARAN */}
          <FormItem
            label="Kode Jenis Pembayaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled={true} />
          </FormItem>

          {/* NAMA JENIS PEMBAYARAN */}
          <FormItem
            label="Jenis Pembayaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Tulis jenis pembayaran"
              size="w-full"
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/epayment/jenis_pembayaran">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddJenisPembayaran;
