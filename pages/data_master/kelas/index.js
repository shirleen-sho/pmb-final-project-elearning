import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const Kelas = () => {
  const { dummy } = useAppContext();
  const { list_kelas } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_kelas}
          tableTitle="Daftar Kelas"
          actionArchive
          actionEdit
          buttonAdd
          buttonArchive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default Kelas;
