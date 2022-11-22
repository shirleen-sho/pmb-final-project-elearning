import React from "react";
import { useRouter } from "next/router";
import TableTopNav from "./TableTopNav";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableBottomNav from "./TableBottomNav";
import TableHeadBg from "./TableHeadBg";

const TableBasic = ({
  data,
  tableTitle,
  actionDetail,
  actionArchive,
  actionUnarchive,
  actionEdit,
  actionDelete,
  buttonAdd,
  buttonArchive,
  buttonActive,
  fieldSearch,
}) => {
  let table_head = [];
  let table_head_formatted = [];
  Object.keys(data[0]).forEach((key) => {
    const splitKey = key.split("_");
    const formattedKey = splitKey.join(" ");
    if (
      key !== "id" &&
      key !== "created_at" &&
      key !== "deleted_at" &&
      key !== "updated_at"
    ) {
      table_head.push(key);
      table_head_formatted.push(formattedKey);
    }
  });

  const defaultCellStyle = "px-3 py-3 h-14";
  const fontHead = "font-semibold";
  let colorHead;

  if (fieldSearch || buttonAdd || buttonArchive || buttonActive) {
    colorHead = "top-[78px] bg-gradient-to-r from-primary-50/50 to-primary-100";
  } else {
    colorHead = "top-6 bg-gradient-to-r from-primary-50/50 to-primary-100";
  }

  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="relative border border-gray-200 top z-0 bg-white rounded-xl p-6 shadow-lg w-full">
      <TableTopNav
        fieldSearch={fieldSearch}
        buttonAdd={buttonAdd}
        buttonArchive={buttonArchive}
        buttonActive={buttonActive}
        tableTitle={tableTitle}
        path={path}
      />
      <table className="table-auto text-xs w-full text-justify">
        <TableHead
          fontHead={fontHead}
          defaultCellStyle={defaultCellStyle}
          table_head_formatted={table_head_formatted}
          actionDetail={actionDetail}
          actionArchive={actionArchive}
          actionUnarchive={actionUnarchive}
          actionEdit={actionEdit}
          actionDelete={actionDelete}
        />
        <TableBody
          defaultCellStyle={defaultCellStyle}
          data={data}
          table_head={table_head}
          path={path}
          actionDetail={actionDetail}
          actionArchive={actionArchive}
          actionUnarchive={actionUnarchive}
          actionEdit={actionEdit}
          actionDelete={actionDelete}
        />
      </table>
      <TableHeadBg colorHead={colorHead} />
      <TableBottomNav data={data} />
    </div>
  );
};

export default TableBasic;
