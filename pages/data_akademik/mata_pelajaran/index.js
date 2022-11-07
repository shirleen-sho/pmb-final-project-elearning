import React, { useEffect, useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Search from "../../../Components/Search";
import Tabs from "../../../Components/Tabs";

const MataPelajaran = () => {
  const list = [
    { id: 1, name: "Kategori Mata Pelajaran", tab: "/kategori" },
    { id: 2, name: "Mata Pelajaran", tab: "" },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik/mata_pelajaran">
        <div className="flex flex-col">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button link="/data_akademik/mata_pelajaran/add">add</Button>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};
