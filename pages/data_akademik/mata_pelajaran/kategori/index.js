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
        <div className="flex flex-col gap-5">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button
              type="warning"
              link="/data_akademik/mata_pelajaran/kategori/archive"
            >
              Archive
            </Button>
            <Button
              type="primary"
              link="/data_akademik/mata_pelajaran/kategori/add"
            >
              Add
            </Button>
          </div>
          {/* table */}
          <TableBasic
            data={list_kategori_mata_pelajaran}
            actionArchive
            actionEdit
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default KategoriMataPelajaran;