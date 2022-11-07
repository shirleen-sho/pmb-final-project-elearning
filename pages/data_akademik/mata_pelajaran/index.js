import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";

const MataPelajaran = () => {
  const list = [
    { id: 1, name: "Kategori Mata Pelajaran", tab: "/kategori" },
    { id: 2, name: "Mata Pelajaran", tab: "" },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/data_akademik/mata_pelajaran">
        <div className="flex flex-col gap-5 py-2"></div>
      </Tabs>
    </Layout>
  );
};

export default MataPelajaran;
