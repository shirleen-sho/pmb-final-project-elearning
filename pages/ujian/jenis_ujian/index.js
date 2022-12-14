import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const JenisUjian = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
  return (
    <Layout>
      <TableBasic
        actionArchive
        actionEdit
        buttonAdd
        buttonArchive
        fieldSearch
        tableTitle="Daftar Jenis Ujian"
        data={list_tingkatan}
      />
    </Layout>
  );
};

export default JenisUjian;
