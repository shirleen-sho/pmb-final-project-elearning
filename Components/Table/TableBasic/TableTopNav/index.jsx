import { useRouter } from "next/router";
import React from "react";
import Button from "../../../Buttons";
import Search from "../../../Search";

const TableTopNav = ({
  fieldSearch,
  buttonAdd,
  buttonArchive,
  buttonActive,
  tableTitle,
  path,
}) => {
  const location = useRouter();
  return (
    (fieldSearch || buttonAdd || buttonArchive || buttonActive) && (
      <div className="mb-5 flex flex-row justify-between items-center">
        <div className="font-semibold text-xl">{tableTitle || ""}</div>
        <div className="flex flex-row items-center gap-5">
          {fieldSearch && <Search />}
          {buttonArchive ? (
            <Button type="warning" link={path + "/archive"}>
              Archive
            </Button>
          ) : (
            buttonActive && (
              <Button type="warning" handleClick={location.back}>
                Active
              </Button>
            )
          )}
          {buttonAdd && (
            <Button type="primary" link={path + "/add"}>
              Add
            </Button>
          )}
        </div>
      </div>
    )
  );
};

export default TableTopNav;
