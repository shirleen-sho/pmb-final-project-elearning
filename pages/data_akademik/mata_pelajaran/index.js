import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const MataPelajaran = () => {
  const list = [
    { id: 1, name: "Kategori Mata Pelajaran", tab: "/kategori" },
    { id: 2, name: "Mata Pelajaran", tab: "" },
  ];

  const { dummy } = useAppContext();
  const { list_mata_pelajaran } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik/mata_pelajaran">
        {/* table */}
        <TableBasic
          data={list_mata_pelajaran}
          actionArchive
          actionEdit
          actionDetail
          buttonAdd
          buttonArchive
          fieldSearch
          tableTitle="Daftar Mata Pelajaran"
        />
      </Tabs>
    </Layout>
  );
};

export default MataPelajaran;
