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
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* === CARD MENU UPLOAD === */}
          <div className="flex flex-col gap-5 border border-gray-200 bg-white rounded-xl p-6 shadow-md w-full h-fit px-6 py-8 mt-2">
            {/* judul */}
            <div className="flex flex-row justify-between pb-7 border-b border-gray-200">
              <div className="text-sm font-semibold">Menu Upload Soal</div>
            </div>
            {/* Import Soal Excel */}
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">Import Soal Excel</div>
              <div className="flex flex-row divide-x divide-black">
                <div className="text-xs pr-4">Berhasil : 50</div>
                <div className="text-xs pl-2 pr-4">Gagal : 0</div>
                <div className="text-xs pl-2 pr-4">Dari : 50</div>
              </div>
            </div>
            {/* Nama Soal & Import */}
            <div className="flex flex-row justify-between items-center gap-5">
              <InputFields type="text" size="w-full" disabled value={id} />
              <Button type="primary">Import</Button>
            </div>
            {/* Pilih File */}
            <div className="w-full">
              <FormItem
                label="Pilih File"
                labelType="label-sm"
                formDirection="col"
              >
                <Uploader />
              </FormItem>
            </div>
            {/* Notes */}
            <div className="text-xs">
              Sebelum Upload pastikan file yang di-upload sudah dalam bentuk
              Ms.Excel Workbook (.xls) dan format penulisan harus sesuai dengan
              templete yang sudah ditentukan.
            </div>
            {/* Template */}
            <div className="text-xs">
              <button className="text-green-500 font-medium">
                Download Template/Panduan
              </button>
            </div>
          </div>

          {/* === CARD FILE PENDUKUNG === */}
          <div className="flex flex-col gap-5 border border-gray-200 bg-white rounded-xl p-6 shadow-md w-full h-fit px-6 py-8 mt-2">
            {/* judul */}
            <div className="flex flex-row justify-between pb-7 border-b border-gray-200">
              <div className="text-sm font-semibold">
                File Pendukung *nama soal*
              </div>
            </div>
            {/* Pilih File */}
            <div className="w-full">
              <FormItem
                label="Pilih File"
                labelType="label-sm"
                formDirection="col"
              >
                <Uploader />
              </FormItem>
            </div>
            {/* Notes */}
            <div className="text-xs">
              Upload file pendukung soal seperti gambar/audio dan pastikan
              penulisan nama file yang di-upload sesuai dengan nama file
              Ms.Excel Workbook (.xls) yang telah di Upload.
            </div>
            {/* Import */}
            <div className="flex flex-row">
              <Button type="primary">Import</Button>
            </div>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default InputUploadBankSoal;
