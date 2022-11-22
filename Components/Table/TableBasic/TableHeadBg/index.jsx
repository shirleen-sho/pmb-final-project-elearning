import React from "react";

const TableHeadBg = ({ colorHead }) => {
  return (
    <div
      className={`${colorHead} absolute w-[100%-24px] h-14 left-6 right-6 -z-10 rounded-l-2xl rounded-r-2xl`}
    ></div>
  );
};

export default TableHeadBg;
