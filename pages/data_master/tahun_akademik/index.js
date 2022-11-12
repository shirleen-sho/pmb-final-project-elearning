import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const TahunAkademik = () => {
  const { dummy } = useAppContext();
  const { list_tahun_akademik } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_tahun_akademik}
          tableTitle="Daftar Tahun Akademik"
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

export default TahunAkademik;
