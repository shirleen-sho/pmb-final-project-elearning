import React from "react";
import Layout from "../../Components/Layout";
import Table from "../../Components/Table";
import { useAppContext } from "../../Hooks/useAppContext";

const Settings = () => {
  const { dummy } = useAppContext();
  const { list1, list2 } = dummy;
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {/* <Table
          data={list1}
          textAlign="left"
          borderCell="border-l"
          action="archive-edit"
        />
        <Table
          data={list2}
          textAlign="center"
          borderCell="border-b"
          action=""
        /> */}
      </div>
    </Layout>
  );
};

export default Settings;
