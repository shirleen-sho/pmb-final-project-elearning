import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveTingkatan = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_tingkatan}
          tableTitle="Daftar Arsipan Tingkatan"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default ArchiveTingkatan;
