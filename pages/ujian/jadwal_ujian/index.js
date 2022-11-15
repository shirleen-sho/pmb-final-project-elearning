import React from "react";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const JadwalUjian = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        <div
          id="top-content"
          className="flex flex-row items-center justify-between my-2"
        >
          <div className="grid grid-cols-12 grid-flow-row gap-x-5 gap-y-3">
            <div className="col-start-1 col-span-2 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Tahun Akademik</span>
            </div>
            <div className="col-start-3 col-span-3 row-start-1">
              <Selects
                list={pilihan_dummy}
                description="Pilih Tahun Akademik"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-1 col-span-2 row-start-2 flex flex-row items-center">
              <span className="font-medium text-sm">Jenis Ujian</span>
            </div>
            <div className="col-start-3 col-span-3 row-start-2">
              <Selects
                list={pilihan_dummy}
                description="Pilih Jenis Ujian"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Tingkatan</span>
            </div>
            <div className="col-start-9 col-span-3 row-start-1">
              <Selects
                list={pilihan_dummy}
                description="Pilih Tingkatan"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-2 flex flex-row items-center">
              <span className="font-medium text-sm">Kelas</span>
            </div>
            <div className="col-start-9 col-span-3 row-start-2">
              <Selects
                list={pilihan_dummy}
                description="Pilih Kelas"
                size="w-[240px]"
              />
            </div>
          </div>
        </div>
        <TableBasic
          data={list_tingkatan}
          tableTitle="Daftar Jadwal Ujian"
          actionDetail
          actionEdit
          actionDelete
          buttonAdd
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default JadwalUjian;
