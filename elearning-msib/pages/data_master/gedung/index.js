import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const Gedung = () => {
  const { dummy } = useAppContext();
  const { list_gedung } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_gedung}
          textAlign="center"
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar Gedung"
          buttonAddLink="/data_master/gedung/add"
          buttonAddText="Add Gedung"
        />
      </div>
    </Layout>
  );
};

export default Gedung;
