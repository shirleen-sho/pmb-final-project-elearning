import React from "react";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveRPP = () => {
  const { dummy } = useAppContext();
  const { list_rpp, list_siswa } = dummy;
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* top nav */}
        <div className="flex flex-row items-center gap-5 my-2">
          <span className="font-medium text-sm">Tahun Akademik</span>
          <Selects
            list={list_siswa}
            description="Pilih Tahun Akademik"
            size="w-[240px]"
          />
        </div>
        {/* table */}
        <TableBasic
          data={list_rpp}
          actionUnarchive
          buttonActive
          fieldSearch
          tableTitle="Daftar Arsipan RPP"
        />
      </div>
    </Layout>
  );
};

export default ArchiveRPP;
