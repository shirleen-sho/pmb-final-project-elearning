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
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar Kelas"
          buttonAddLink="/data_master/kelas/add"
        />
      </div>
    </Layout>
  );
};

export default Kelas;
