import React from "react";
import Layout from "../../../../Components/Layout";
import TableBasic from "../../../../Components/Table/TableBasic";
import { useAppContext } from "../../../../Hooks/useAppContext";

const ArchivePengeluaran = () => {
  const { dummy } = useAppContext();
  const { list_ruangan } = dummy;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={list_ruangan}
          tableTitle="Daftar Arsipan Pengeluaran"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default ArchivePengeluaran;
