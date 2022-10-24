import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Table";
import { useAppContext } from "../Hooks/useAppContext";

const Settings = () => {
  const { dummy } = useAppContext();
  const { list1, list2 } = dummy;
  return (
    <Layout>
      <div className="flex flex-row gap-6">
        <Table
          data={list1}
          className="text-xs w-full h-full"
          classNameHead="bg-red-100"
          classNameBody="bg-red-50"
          classNameCell="px-4 py-2"
        />
        <Table
          data={list2}
          className="text-xs w-full h-full"
          classNameHead="bg-sky-100"
          classNameBody="bg-sky-50"
          classNameCell="px-4 py-2"
        />
      </div>
    </Layout>
  );
};

export default Settings;
