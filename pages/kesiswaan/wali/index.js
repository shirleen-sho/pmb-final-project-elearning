import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Search from "../../../Components/Search";
import TableBasic from "../../../Components/Table/TableBasic";
import Tabs from "../../../Components/Tabs";
import { useAppContext } from "../../../Hooks/useAppContext";

const Wali = () => {
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
            actionArchive
            actionEdit
            actionDetail
            buttonArchive
            buttonAdd
            fieldSearch
            tableTitle="Daftar Wali Murid"
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default Wali;
