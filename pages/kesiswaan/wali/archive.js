import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Search from "../../../Components/Search";
import Table from "../../../Components/Table";
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
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search />
            <Button type="warning" link="/kesiswaan/wali">
              Active
            </Button>
          </div>
          <Table data={list_siswa} actionUnarchive />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveWali;
