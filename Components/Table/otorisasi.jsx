import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Button from "../Buttons";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const TableOtorisasi = ({ data }) => {
  let table_head = [];
  Object.keys(data[0]).forEach((key) => table_head.push(key));

  const defaultCellStyle = "px-3 py-3 h-14";
  const fontHead = "font-semibold";
  let colorHead = "top-6 bg-gradient-to-r from-primary-50/50 to-primary-100";

  return (
    <div className="relative border border-gray-200 top z-0 bg-white rounded-xl p-6 shadow-lg w-full h-full">
      <table className={`table-auto text-xs w-full h-full text-justify`}>
        <thead>
          <tr>
            <th className={`${fontHead} ${defaultCellStyle} text-center`}></th>
            {table_head.map((head) => (
              <th key={head} className={`${fontHead} ${defaultCellStyle}`}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const [itemRow, setItemRow] = useState(item);
            const [checkAll, setCheckAll] = useState(false);
            const handleChecked = (head, e) => {
              const row = itemRow;
              Object.keys(row).forEach((key) => {
                if (key === head) {
                  row[key] = e.target.checked;
                }
              });
              setItemRow(row);
              console.log("itemRow updated !", itemRow);
            };
            const handleCheckedAll = () => {
              const row = itemRow;
              Object.keys(row).forEach((key) => {
                if (typeof row[key] !== "string") {
                  row[key] = !checkAll;
                }
              });
              setItemRow(row);
              setCheckAll(!checkAll);
              console.log("itemRow select all !", itemRow);
            };
            // note: masih ada bugs case misal tekan check1 = true trus tekan lagi = false,
            // trus checkAll true, yang sudah prnh ditekan check1 tadi akan tetap false
            // padahal harusnya jadi true stlh dicheckAll
            return (
              <tr key={"item" + index}>
                <td className={`${defaultCellStyle} border-b text-center`}>
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onClick={handleCheckedAll}
                  />
                </td>
                {table_head.map((head) => {
                  return (
                    <td
                      key={"item" + head + index}
                      className={`${defaultCellStyle} border-b`}
                    >
                      {typeof itemRow[head] === "string" ? (
                        itemRow[head]
                      ) : (
                        <input
                          type="checkbox"
                          defaultChecked={itemRow[head]}
                          onClick={(e) => handleChecked(head, e)}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* background table head */}
      <div
        className={`${colorHead} absolute w-[100%-24px] h-14 left-6 right-6 -z-10 rounded-l-2xl rounded-r-2xl`}
        id="thead-background"
      ></div>
      {/* bottom navigation table */}
      <div
        className="flex flex-row justify-between items-center mt-6"
        id="table-navigation"
      >
        <span className="text-xs text-gray-500">
          Showing data <span className="font-medium text-gray-700">1</span> to{" "}
          <span className="font-medium text-gray-700">{data.length}</span> of{" "}
          {data.length} entries
        </span>
        {/* pagination */}
        <div className="flex flex-row items-center gap-4 text-xs h-8">
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            <HiChevronLeft size={14} />
          </Link>
          <Link
            href="/"
            aria-current="page"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-primary-300 border border-primary-300 text-white"
          >
            1
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            2
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            3
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            ...
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            100
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 h-full flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            <HiChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableOtorisasi;
