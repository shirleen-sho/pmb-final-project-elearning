import React from "react";
import { useAppContext } from "../../../../../Hooks/useAppContext";
import Buttons from "../../../../Buttons";
import Table from "../../../../Table";

const ContentListKegiatan = () => {
  const { dummy } = useAppContext();
  const { list_kegiatan } = dummy;
  return (
    <div className="w-full h-full py-3">
      <div className="flex flex-row justify-center gap-3 absolute top-0 right-0">
        <Buttons type="secondary">O</Buttons>
        <Buttons type="primary" link="/data_master/kalender_akademik/add">
          Add Kegiatan
        </Buttons>
      </div>
      <Table data={list_kegiatan} action="archive-edit" />
    </div>
  );
};

export default ContentListKegiatan;
