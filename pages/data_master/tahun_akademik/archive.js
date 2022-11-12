import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveTahunAkademik = () => {
  const { dummy } = useAppContext();
  const { list_tahun_akademik } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_tahun_akademik}
          tableTitle="Daftar Arsipan Tahun Akademik"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default ArchiveTahunAkademik;
