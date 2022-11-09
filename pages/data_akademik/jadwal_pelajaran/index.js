import React from "react";
import Layout from "../../../Components/Layout";
import Button from "../../../Components/Buttons";
import Selects from "../../../Components/Selects";
import TableMerge from "../../../Components/Table/merge";
import { useAppContext } from "../../../Hooks/useAppContext";
import Search from "../../../Components/Search";

const JadwalPelajaran = () => {
  const { dummy } = useAppContext();
  const { list_jadwal_pelajaran, list_siswa } = dummy;
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
                list={list_siswa}
                description="Pilih Tahun Akademik"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-1 col-span-2 row-start-2 flex flex-row items-center">
              <span className="font-medium text-sm">Tingkatan</span>
            </div>
            <div className="col-start-3 col-span-3 row-start-2">
              <Selects
                list={list_siswa}
                description="Pilih Tingkatan"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Kelas</span>
            </div>
            <div className="col-start-9 col-span-3 row-start-1">
              <Selects
                list={list_siswa}
                description="Pilih Kelas"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-2">
              <Button type="success">Simpan</Button>
            </div>
          </div>
        </div>
        {/* container top */}
        <div className="flex flex-row items-center justify-end gap-8">
          <Search></Search>
          <Button link="/data_akademik/jadwal_pelajaran/add">add</Button>
        </div>
        <TableMerge data={list_jadwal_pelajaran} />
      </div>
    </Layout>
  );
};

export default JadwalPelajaran;
