import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveJenisUjian = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
  return (
    <Layout>
      <TableBasic
        actionUnarchive
        buttonActive
        fieldSearch
        tableTitle="Daftar Arsipan Jenis Ujian"
        data={list_tingkatan}
      />
    </Layout>
  );
};

export default ArchiveJenisUjian;
