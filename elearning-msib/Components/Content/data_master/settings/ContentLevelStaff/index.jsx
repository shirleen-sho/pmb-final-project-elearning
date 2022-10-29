import React from "react";
import { useAppContext } from "../../../../../Hooks/useAppContext";
import Buttons from "../../../../Buttons";
import InputFields from "../../../../InputFields";
import Table from "../../../../Table";

const ContentLevelStaff = () => {
  const { dummy } = useAppContext();
  const { list_level_staff } = dummy;
  return (
    <div className="w-full h-full py-3">
      <div className="flex flex-row justify-center items-center gap-3 absolute top-0 right-0">
        <InputFields type="text" placeholder="Search" />
        <Buttons type="primary" link="/settings/add">
          Add
        </Buttons>
      </div>
      <Table data={list_level_staff} action="archive-edit" />
    </div>
  );
};

export default ContentLevelStaff;
