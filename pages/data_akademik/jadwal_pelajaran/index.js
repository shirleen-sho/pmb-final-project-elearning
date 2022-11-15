import React from "react";
import Layout from "../../../Components/Layout";
import Button from "../../../Components/Buttons";
import Selects from "../../../Components/Selects";
import TableMerge from "../../../Components/Table/TableMerge";
import { useAppContext } from "../../../Hooks/useAppContext";
import Search from "../../../Components/Search";

const JadwalPelajaran = () => {
  const { dummy } = useAppContext();
  const { list_jadwal_pelajaran, list_siswa } = dummy;
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* filter */}
        <div className="flex flex-row items-center gap-5 my-2">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects list={list_siswa} description="Pilih" size="w-[280px]" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects list={list_siswa} description="Pilih" size="w-[120px]" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Kelas</span>
            <Selects list={list_siswa} description="Pilih" size="w-[120px]" />
          </div>
        </div>
        <TableMerge
          data={list_jadwal_pelajaran}
          tableTitle="Tabel Jadwal Pelajaran"
          buttonAdd
        />
      </div>
    </Layout>
  );
};

export default JadwalPelajaran;
