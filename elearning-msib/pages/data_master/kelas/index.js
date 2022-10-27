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
          textAlign="center"
          action="archive-edit"
          topNavigation={true}
          buttonAddLink="/data_master/kelas/add"
          buttonAddText="Add Kelas"
        />
      </div>
    </Layout>
  );
};

export default Kelas;
