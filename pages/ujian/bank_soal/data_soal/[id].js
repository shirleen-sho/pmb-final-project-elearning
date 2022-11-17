import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../Components/Buttons";
import FormItem from "../../../../Components/FormItem";
import InputFields from "../../../../Components/InputFields";
import Layout from "../../../../Components/Layout";
import Selects from "../../../../Components/Selects";
import Tabs from "../../../../Components/Tabs";

const DetailBankSoal = () => {
  const router = useRouter();
  const { id } = router.query;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const tabList = [
    { id: 1, name: "Data Soal", tab: `/data_soal/${id}` },
    { id: 2, name: "Edit", tab: `/edit/${id}` },
  ];

  return (
    <Layout>
      <Tabs list={tabList} pathName="/ujian/bank_soal">
        <div className="flex flex-col gap-10 border border-gray-200 bg-white rounded-xl p-6 shadow-md w-full px-6 py-8 mt-2">
          {/* judul */}
          <div className="flex flex-row justify-between pb-5 border-b border-gray-200">
            <div className="text-sm font-semibold">
              Detail Soal *nama bank soal*
            </div>
            <Button type="warning">Print</Button>
          </div>
          {/* info sekolah */}
          <div className="flex flex-col gap-3">
            {/* info - nama sekolah */}
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <div className="text-sm font-medium">Morning Roast School</div>
              <div className="text-xs font-medium">
                UAS | Semester Ganjil 2022/2023
              </div>
            </div>
            {/* info - logo sekolah */}
            <div className="flex flex-col items-center gap-2 w-fit">
              <div className="h-10 w-10 relative">
                <Image
                  src={"/images/icon/school.png"}
                  height={200}
                  width={200}
                  alt="icon school"
                />
              </div>
              <div className="text-2xs font-medium">Morning Roast School</div>
            </div>
          </div>
          {/* detail */}
          <div className="grid grid-cols-8 grid-rows-2 gap-x-5 gap-y-3">
            {/* Mata Pelajaran */}
            <div className="col-start-1 text-xs">Mata Pelajaran</div>
            <div className="col-start-2 col-span-2 text-xs">
              : Bahasa Indonesia
            </div>
            {/* Soal */}
            <div className="col-start-4 text-xs">Soal PG</div>
            <div className="col-start-5 col-span-2 text-xs">: 50 / 80%</div>
            <div className="col-start-4 row-start-2 text-xs">Soal Essai</div>
            <div className="col-start-5 row-start-2 col-span-2 text-xs">
              : 5 / 20%
            </div>
            {/* Bobot Keseluruhan */}
            <div className="col-start-7 text-xs">Bobot Keseluruhan</div>
            <div className="col-start-8 text-xs">: 100%</div>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default DetailBankSoal;
