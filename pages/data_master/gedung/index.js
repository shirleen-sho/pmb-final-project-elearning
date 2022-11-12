import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const Gedung = () => {
  const { dummy } = useAppContext();
  const { list_gedung } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_gedung}
          tableTitle="Daftar Gedung"
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

export default Gedung;
