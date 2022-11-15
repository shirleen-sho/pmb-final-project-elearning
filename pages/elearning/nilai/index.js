import Layout from "../../../Components/Layout";
import React from "react";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";

const Nilai = () => {
  const { dummy } = useAppContext();
  const { list_nilai } = dummy;
  return (
    <Layout>
      <div>
        {/* filter */}
        <div className="flex flex-row items-center gap-5 mt-2 mb-8 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects list={list_nilai} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects list={list_nilai} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Kelas</span>
            <Selects list={list_nilai} description="Pilih" size="w-full" />
          </div>
        </div>

        <div className="w-full h-full">
          <TableBasic
            data={list_nilai}
            tableTitle="Nilai"
            actionArchive
            actionDetail
            fieldSearch
            buttonArchive
          />
        </div>
      </div>
    </Layout>
  );
};

export default Nilai;
