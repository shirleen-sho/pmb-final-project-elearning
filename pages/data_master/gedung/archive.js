import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveGedung = () => {
  const { dummy } = useAppContext();
  const { list_gedung } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_gedung}
          tableTitle="Daftar Arsipan Gedung"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default ArchiveGedung;
