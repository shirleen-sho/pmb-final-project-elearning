import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const RPP = () => {
  const { dummy } = useAppContext();
  const { list_ruangan } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_ruangan}
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar RPP"
        />
      </div>
    </Layout>
  );
};

export default RPP;
