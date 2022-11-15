import React from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import Button from "../../../Components/Buttons";
import { useAppContext } from "../../../Hooks/useAppContext";
import Search from "../../../Components/Search";
import TableBasic from "../../../Components/Table/TableBasic";

const Settings = () => {
  const list = [
    { id: 1, name: "Level Staff", tab: "/level" },
    { id: 2, name: "Pengaturan Otorisasi", tab: "/otorisasi" },
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
            fieldSearch
            tableTitle="Pengaturan Level Staff"
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default Settings;
