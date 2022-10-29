import React from "react";
import { useAppContext } from "../../../../../Hooks/useAppContext";
import Buttons from "../../../../Buttons";
import InputFields from "../../../../InputFields";
import Selects from "../../../../Selects";
import Table from "../../../../Table";

const ContentPengaturanOtorisasi = () => {
  const { dummy } = useAppContext();
  const { list_level_staff } = dummy;
  const level = list_level_staff.map((i) => {
    return { name: i["Level Staff"] };
  });
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div
        id="top-content-kalender"
        className="flex flex-row items-center gap-10"
      >
        <div className="flex flex-row items-center gap-4 px-4">
          <div className="">Staff Level</div>
          <Selects list={level} description="Pilih Staff Level" />
        </div>
        <Buttons type="primary">Simpan</Buttons>
      </div>
      <Table data={list_level_staff} />
    </div>
  );
};

export default ContentPengaturanOtorisasi;
