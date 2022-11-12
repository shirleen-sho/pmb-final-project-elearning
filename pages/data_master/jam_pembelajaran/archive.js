import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveJamPembelajaran = () => {
  const { dummy } = useAppContext();
  const { list_jam_pembelajaran } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
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
