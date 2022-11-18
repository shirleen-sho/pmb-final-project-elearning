import React, { useEffect, useState } from "react";
import Layout from "../../../../Components/Layout";
import Tabs from "../../../../Components/Tabs";
import TableBasic from "../../../../Components/Table/TableBasic";
import { useAppContext } from "../../../../Hooks/useAppContext";

const ArchiveKategoriMataPelajaran = () => {
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
          actionUnarchive
          buttonActive
          fieldSearch
          tableTitle="Daftar Arsipan Kategori Mata Pelajaran"
        />
      </Tabs>
    </Layout>
  );
};

export default ArchiveKategoriMataPelajaran;
