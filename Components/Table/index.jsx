import React from "react";
import Link from "next/link";
import Button from "../Buttons";
import Search from "../Search";
import {
  HiOutlineArchive,
  HiOutlinePencil,
  HiOutlineEye,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { useRouter } from "next/router";

const Table = ({ data, action, tableTitle, topNavigation }) => {
  let table_head = [];
  let table_head_formatted = [];
  Object.keys(data[0]).forEach((key) => {
    const splitKey = key.split("_");
    const formattedKey = splitKey.join(" ");
    table_head.push(key);
    table_head_formatted.push(formattedKey);
  });

  const defaultCellStyle = "px-3 py-3 h-14";
  const fontHead = "font-semibold";
  let colorHead;

  if (!topNavigation) {
    colorHead = "top-6 bg-gradient-to-r from-primary-50/50 to-primary-100";
  } else {
    colorHead = "top-[68px] border-b";
  }

  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="relative border border-gray-200 top z-0 bg-white rounded-xl p-6 shadow-lg w-full">
      {/* top navigation table */}
      {topNavigation && (
        <div className="mb-3 flex flex-row justify-between items-center">
          <div className="font-semibold text-xl">{tableTitle || ""}</div>
          <div className="flex flex-row items-center gap-5">
            <Search />
            <Button type="primary" link={path + "/add"}>
              Add
            </Button>
          </div>
        </div>
      )}
      <table className={`table-auto text-xs w-full text-justify`}>
        <thead>
          <tr className="capitalize">
            <th className={`${fontHead} ${defaultCellStyle} text-center`}>
              No
            </th>
            {table_head_formatted.map((head) => (
              <th key={head} className={`${fontHead} ${defaultCellStyle}`}>
                {head}
              </th>
            ))}
            {action && (
              <th className={`${fontHead} ${defaultCellStyle} text-center`}>
                Aksi
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={"item" + index}>
              <td className={`${defaultCellStyle} border-b text-center`}>
                {index + 1}
              </td>
              {table_head.map((head) => (
                <td
                  key={"item" + head + index}
                  className={`${defaultCellStyle} border-b`}
                >
                  {item[head]}
                </td>
              ))}
              {action && (
                <td
                  className={`${defaultCellStyle} border-b text-center w-fit`}
                >
                  {action === "archive-edit" && (
                    <div className="w-full flex flex-row justify-center gap-4">
                      <Button type="link" title="View" link={path + "/view"}>
                        <HiOutlineEye
                          className="hover:text-primary-600"
                          size={18}
                        />
                      </Button>
                      <Button
                        type="link"
                        title="Archive"
                        link={path + "/archive"}
                      >
                        <HiOutlineArchive
                          size={18}
                          className="hover:text-primary-600"
                        />
                      </Button>
                      <Button type="link" title="Edit" link={path + "/edit"}>
                        <HiOutlinePencil
                          className="hover:text-primary-600"
                          size={18}
                        />
                      </Button>
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
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

export default Table;
