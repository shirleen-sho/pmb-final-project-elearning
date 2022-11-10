import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const Kelas = () => {
  const { dummy } = useAppContext();
  const { list_kelas } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_kelas}
          topNavigation={true}
          tableTitle="Daftar Kelas"
          actionArchive
          actionEdit
        />
      </div>
    </Layout>
  );
};

export default Kelas;
