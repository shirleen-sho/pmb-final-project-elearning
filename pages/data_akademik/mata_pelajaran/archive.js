import React, { useEffect, useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Search from "../../../Components/Search";
import Tabs from "../../../Components/Tabs";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveMataPelajaran = () => {
  const list = [
    { id: 1, name: "Kategori Mata Pelajaran", tab: "/kategori" },
    { id: 2, name: "Mata Pelajaran", tab: "" },
  ];

  const { dummy } = useAppContext();
  const { list_mata_pelajaran } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik/mata_pelajaran">
        <div className="flex flex-col gap-5">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button type="warning" link="/data_akademik/mata_pelajaran">
              Active
            </Button>
          </div>
          {/* table */}
          <TableBasic data={list_mata_pelajaran} actionUnarchive />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveMataPelajaran;
