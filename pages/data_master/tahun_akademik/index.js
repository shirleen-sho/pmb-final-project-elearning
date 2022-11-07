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
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar Tahun Akademik"
        />
      </div>
    </Layout>
  );
};

export default TahunAkademik;
