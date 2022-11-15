import React, { useEffect, useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import Search from "../../../../Components/Search";
import Tabs from "../../../../Components/Tabs";
import TableBasic from "../../../../Components/Table/TableBasic";
import { useAppContext } from "../../../../Hooks/useAppContext";

const KategoriMataPelajaran = () => {
  const list = [
    { id: 1, name: "Kategori Mata Pelajaran", tab: "/kategori" },
    { id: 2, name: "Mata Pelajaran", tab: "" },
  ];

  const { dummy } = useAppContext();
  const { list_kategori_mata_pelajaran } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik/mata_pelajaran">
        {/* table */}
        <TableBasic
          data={list_kategori_mata_pelajaran}
          actionArchive
          actionEdit
          buttonAdd
          buttonArchive
          fieldSearch
          tableTitle="Daftar Kategori Mata Pelajaran"
        />
      </Tabs>
    </Layout>
  );
};

export default KategoriMataPelajaran;
