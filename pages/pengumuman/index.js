import React from "react";
import { useAppContext } from "../../Hooks/useAppContext";
import Layout from "../../Components/Layout";
import TableBasic from "../../Components/Table/TableBasic";

const Pengumuman = () => {
  const { dummy } = useAppContext();
  const { pengumuman } = dummy;
  return (
    <Layout>
      <TableBasic
            data={pengumuman}
            tableTitle="Materi Pelajaran"
            actionEdit
            actionDelete
            actionDetail
            buttonAdd
            fieldSearch
          />
    </Layout>
  );
};

export default Pengumuman;
