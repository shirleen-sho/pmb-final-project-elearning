import React from "react";
import Layout from "../../../Components/Layout";
import Button from "../../../Components/Buttons";
import Selects from "../../../Components/Selects";
import TableMerge from "../../../Components/Table/TableMerge";
import { useAppContext } from "../../../Hooks/useAppContext";
import TableBasic from "../../../Components/Table/TableBasic";

const Pembayaran = () => {
  const { dummy } = useAppContext();
  const { list_ruangan, list_siswa } = dummy;
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* filter */}
        <div className="flex flex-row items-center gap-5 my-2">
          <div className="flex flex-col gap-2 w-1/2">
            <span className="font-medium text-xs">Jenis Pembayaran</span>
            <Selects list={list_siswa} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects list={list_siswa} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Kelas</span>
            <Selects list={list_siswa} description="Pilih" size="w-full" />
          </div>
        </div>
        {/* table */}
        <TableBasic
          data={list_ruangan}
          tableTitle="Daftar Pembayaran"
          actionDetail
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default Pembayaran;
