import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const Ruangan = () => {
  const { dummy } = useAppContext();
  const { list_ruangan } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_ruangan}
          textAlign="center"
          action="archive-edit"
          topNavigation={true}
          buttonAddLink="/data_master/ruangan/add"
          buttonAddText="Add Ruangan"
        />
      </div>
    </Layout>
  );
};

export default Ruangan;
