import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import Tabs from "../../../Components/Tabs";
import { useAppContext } from "../../../Hooks/useAppContext";

const ArchiveWali = () => {
  const list = [
    { id: 1, name: "Siswa", tab: "/siswa" },
    { id: 2, name: "Wali Murid", tab: "/wali" },
  ];

  const { dummy } = useAppContext();
  const { list_siswa } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/kesiswaan">
        <div className="flex flex-col gap-5 py-2">
          <TableBasic
            data={list_siswa}
            actionUnarchive
            buttonActive
            fieldSearch
            tableTitle="Daftar Arsipan Wali Murid"
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveWali;
