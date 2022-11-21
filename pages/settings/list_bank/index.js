import React from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import { useAppContext } from "../../../Hooks/useAppContext";
import TableBasic from "../../../Components/Table/TableBasic";

const ListBank = () => {
  const list = [
    { id: 1, name: "Level Staff", tab: "/level" },
    { id: 2, name: "Pengaturan Otorisasi", tab: "/otorisasi" },
    { id: 3, name: "List Bank", tab: "/list_bank" },
  ];

  const { dummy } = useAppContext();
  const { list_level_staff } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/settings">
        <div className="w-full h-full py-3">
          <TableBasic
            data={list_level_staff}
            actionArchive
            actionEdit
            buttonAdd
            buttonArchive
            fieldSearch
            tableTitle="Pengaturan Daftar Bank"
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ListBank;
