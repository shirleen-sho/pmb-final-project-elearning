import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const TahunAkademik = () => {
  const { dummy } = useAppContext();
  const { list_tahun_akademik } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_tahun_akademik}
          textAlign="center"
          action="archive-edit"
          topNavigation={true}
          buttonAddLink="/data_master/tahun_akademik/add"
          buttonAddText="Add Tahun Akademik"
        />
      </div>
    </Layout>
  );
};

export default TahunAkademik;
