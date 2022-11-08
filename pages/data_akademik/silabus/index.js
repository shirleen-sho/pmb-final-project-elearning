import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const Silabus = () => {
  const { dummy } = useAppContext();
  const { list_silabus } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_silabus}
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar Silabus"
        />
      </div>
    </Layout>
  );
};

export default Silabus;
