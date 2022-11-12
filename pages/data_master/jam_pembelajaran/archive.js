import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveJamPembelajaran = () => {
  const { dummy } = useAppContext();
  const { list_jam_pembelajaran } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_jam_pembelajaran}
          textAlign="center"
          tableTitle="Daftar Arsipan Jam Pembelajaran"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default ArchiveJamPembelajaran;
