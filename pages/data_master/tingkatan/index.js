import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const Tingkatan = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_tingkatan}
          topNavigation={true}
          tableTitle="Daftar Tingkatan"
          actionArchive
          actionEdit
        />
      </div>
    </Layout>
  );
};

export default Tingkatan;
