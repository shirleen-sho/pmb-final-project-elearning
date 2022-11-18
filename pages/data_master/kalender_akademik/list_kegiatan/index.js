import React from "react";
import Layout from "../../../../Components/Layout";
import Tabs from "../../../../Components/Tabs";
import { useAppContext } from "../../../../Hooks/useAppContext";
import TableBasic from "../../../../Components/Table/TableBasic";

const ListKegiatan = () => {
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
          <TableBasic
            data={list_kegiatan}
            actionArchive
            actionEdit
            buttonAdd
            buttonArchive
            fieldSearch
            tableTitle="Daftar Kegiatan"
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ListKegiatan;
