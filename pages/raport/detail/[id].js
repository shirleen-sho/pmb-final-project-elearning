import { useRouter } from "next/router";
import React from "react";
import Button from "../../../Components/Buttons";
import FormItem from "../../../Components/FormItem";
import InputFields from "../../../Components/InputFields";
import TextArea from "../../../Components/TextArea";
import Layout from "../../../Components/Layout";
import TableMerge from "../../../Components/Table/TableMerge";
import { useAppContext } from "../../../Hooks/useAppContext";

const DetailRaport = () => {
  const router = useRouter();
  const { id } = router.query;

  const { dummy } = useAppContext();
  const { raport } = dummy;

  return (
    <Layout>
      {/* === DATA SISWA === */}
      <div className="flex flex-col gap-8 border border-gray-300 bg-white rounded-xl p-6 shadow-sm w-2/3 px-6 py-8 mt-2 mb-7">
        <div className="flex flex-row justify-between pb-7 border-b border-gray-200">
          <div className="text-sm font-semibold">Data Siswa</div>
        </div>
        <div className="flex flex-col gap-y-4">
          <FormItem
            label="Tahun Akademik"
            labelType="label-sm"
            labelWidth="w-1/3"
          >
            <InputFields
              type="text"
              value="Semester Ganjil 2022/2023"
              size="w-full"
              disabled
            />
          </FormItem>
          <FormItem label="Nama Siswa" labelType="label-sm" labelWidth="w-1/3">
            <InputFields type="text" value="Sarah" size="w-full" disabled />
          </FormItem>
          <FormItem label="NIS" labelType="label-sm" labelWidth="w-1/3">
            <InputFields type="text" value="190703001" size="w-full" disabled />
          </FormItem>
          <FormItem label="Kelas" labelType="label-sm" labelWidth="w-1/3">
            <InputFields type="text" value="IX A" size="w-full" disabled />
          </FormItem>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {/* DATA AKADEMIK */}
        <div className="flex flex-col gap-1.5">
          <div className="text-sm font-bold">A. Data Akademik</div>
          <TableMerge data={raport} numbering />
        </div>
        {/* CATATAN AKADEMIK */}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-bold">B. Catatan Akademik</div>
          <div>
            <TextArea placeholder="Tulis catatan akademik di sini"></TextArea>
          </div>
        </div>
        {/* KETIDAKHADIRAN */}
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold">C. Ketidakhadiran</div>
          <div>
            <table className="table-auto border border-collapse border-gray-300 w-1/3 text-xs">
              <tr className="border border-collapse border-gray-300">
                <td className="px-5 py-2.5 font-semibold">Sakit</td>
                <td className="px-5 py-2.5">5</td>
              </tr>
              <tr className="border border-collapse border-gray-300">
                <td className="px-5 py-2.5 font-semibold">Izin</td>
                <td className="px-5 py-2.5">3</td>
              </tr>
              <tr className="border border-collapse border-gray-300">
                <td className="px-5 py-2.5 font-semibold">Absen</td>
                <td className="px-5 py-2.5">0</td>
              </tr>
            </table>
          </div>
        </div>
        {/* button */}
        <div className="flex flex-row justify-end gap-7">
          <Button type="light" link="/raport">
            Back
          </Button>
          <Button type="primary">Save</Button>
          <Button type="warning">Print</Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailRaport;
