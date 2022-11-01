import React from "react";
import Layout from "../../Components/Layout";
import Tabs from "../../Components/Tabs";
import Button from "../../Components/Buttons";
import Table from "../../Components/Table";
import { useAppContext } from "../../Hooks/useAppContext";
import Search from "../../Components/Search";

const Settings = () => {
  const list = [
    { id: 1, name: "Level Staff", tab: "" },
    { id: 2, name: "Pengaturan Otorisasi", tab: "/otorisasi" },
  ];

  const { dummy } = useAppContext();
  const { list_level_staff } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/settings">
        <div className="w-full h-full py-3">
          <div className="flex flex-row justify-center items-center gap-3 absolute top-0 right-0">
            <Search />
            <Button type="primary" link="/settings/add">
              Add
            </Button>
          </div>
          <Table data={list_level_staff} action="archive-edit" />
        </div>
      </Tabs>
    </Layout>
  );
};

export default Settings;
