import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import Selects from "../../../../Components/Selects";
import Tabs from "../../../../Components/Tabs";
import Uploader from "../../../../Components/Uploader";

const InputManualBankSoal = () => {
  const router = useRouter();
  const { id } = router.query;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const tabList = [
    { id: 1, name: "Manual", tab: `/manual/${id}` },
    { id: 2, name: "Upload", tab: `/upload/${id}` },
  ];

  return (
    <Layout>
      <Tabs list={tabList} pathName="/ujian/bank_soal">
        <div className="flex flex-col gap-8 border border-gray-200 bg-white rounded-xl p-6 shadow-md w-full px-6 py-8 mt-2">
          {/* judul */}
          <div className="flex flex-row justify-between pb-7 border-b border-gray-200">
            <div className="text-sm font-semibold">Soal *nama bank soal*</div>
          </div>
          <div className="grid grid-cols-8 gap-x-10">
            {/* Mata Pelajaran */}
            <div className="col-start-1 col-span-2 w-full">
              <FormItem
                label="Pilih Opsi"
                labelType="label-sm"
                formDirection="col"
              >
                <Selects
                  list={pilihan_dummy}
                  size="w-full"
                  description="Pilih opsi"
                />
              </FormItem>
            </div>
            {/* Gambar */}
            <div className="col-start-3 col-span-3 bg-yellow-100">
              <FormItem
                label="Gambar 1"
                labelType="label-sm"
                formDirection="col"
              >
                <Uploader />
              </FormItem>
            </div>
            {/* Keterangan */}
            <div className="col-start-6 col-span-3 bg-yellow-100">
              <FormItem
                label="Keterangan Gambar"
                labelType="label-sm"
                formDirection="col"
              >
                <InputFields
                  type="text"
                  placeholder="Tulis keterangan gambar"
                  size="w-full"
                />
              </FormItem>
            </div>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default InputManualBankSoal;
