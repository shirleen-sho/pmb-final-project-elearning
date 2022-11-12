import React from "react";
import Layout from "../../../../Components/Layout";
import Tabs from "../../../../Components/Tabs";
import Button from "../../../../Components/Buttons";
import { useAppContext } from "../../../../Hooks/useAppContext";
import Search from "../../../../Components/Search";
import TableBasic from "../../../../Components/Table/TableBasic";

const ArchiveListKegiatan = () => {
  const list = [
    { id: 1, name: "Kalender", tab: "" },
    { id: 2, name: "List Kegiatan", tab: "/list_kegiatan" },
  ];

  const { dummy } = useAppContext();
  const { list_kegiatan } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/data_master/kalender_akademik">
        <div className="w-full h-full py-3">
          <div className="flex flex-row justify-center items-center gap-3 absolute top-0 right-0">
            <Search />
            <Button
              type="warning"
              link="/data_master/kalender_akademik/list_kegiatan"
            >
              Active
            </Button>
          </div>
          <TableBasic data={list_kegiatan} actionUnarchive />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveListKegiatan;
