import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";

const EditJenisPembayaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>
        <FormItem
          label="Edit Jenis Pembayaran details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE JENIS PEMBAYARAN */}
          <FormItem
            label="Kode Jenis Pembayaran"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled={true} value={id} />
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

export default EditJenisPembayaran;
