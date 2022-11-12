import React, { useEffect, useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import Search from "../../../../Components/Search";
import Tabs from "../../../../Components/Tabs";
import Table from "../../../../Components/Table";
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
        <div className="flex flex-col gap-5">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button
              type="warning"
              link="/data_akademik/mata_pelajaran/kategori"
            >
              Active
            </Button>
          </div>
          {/* table */}
          <Table data={list_kategori_mata_pelajaran} actionUnarchive />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveKategoriMataPelajaran;
