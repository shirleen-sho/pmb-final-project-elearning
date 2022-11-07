import React from "react";
import Layout from "../../../Components/Layout";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";

const JamPembelajaran = () => {
  const { dummy } = useAppContext();
  const { list_jam_pembelajaran } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <Table
          data={list_jam_pembelajaran}
          textAlign="center"
          action="archive-edit"
          topNavigation={true}
          tableTitle="Daftar Jam Pembelajaran"
        />
      </div>
    </Layout>
  );
};

export default JamPembelajaran;
