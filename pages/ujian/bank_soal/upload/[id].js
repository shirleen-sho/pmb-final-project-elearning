import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import Selects from "../../../../Components/Selects";
import Tabs from "../../../../Components/Tabs";
import Uploader from "../../../../Components/Uploader";

const InputUploadBankSoal = () => {
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
            <div className="text-sm font-semibold">Menu Upload Soal</div>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default InputUploadBankSoal;
