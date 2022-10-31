import React from "react";
import Link from "next/link";
import Button from "../Buttons";
import InputFields from "../InputFields";

const Table = ({ data, action, tableTitle, topNavigation, buttonAddLink }) => {
  let table_head = [];
  Object.keys(data[0]).forEach((key) => table_head.push(key));

  const defaultCellStyle = "px-3 py-3 h-14";
  const fontHead = "font-semibold";
  let colorHead;

  if (!topNavigation) {
    colorHead = "top-6 bg-gradient-to-r from-primary-50/50 to-primary-100";
  } else {
    colorHead = "top-[68px] border-b";
  }

  return (
    <div className="relative border border-gray-200 top z-0 bg-white rounded-xl p-6 shadow-lg w-full h-full">
      {/* top navigation table */}
      {topNavigation && (
        <div className="mb-3 flex flex-row justify-between items-center">
          <div className="font-semibold text-xl">{tableTitle || ""}</div>
          <div className="flex flex-row items-center gap-5">
            <InputFields type="text" placeholder="Search" />
            <Button type="primary" link={buttonAddLink}>
              Add
            </Button>
          </div>
        </div>
      )}
      <table className={`table-auto text-xs w-full h-full text-justify`}>
        <thead>
          <tr>
            <th className={`${fontHead} ${defaultCellStyle} text-center`}>
              No
            </th>
            {table_head.map((head) => (
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
                <td className={`${defaultCellStyle} border-b text-center`}>
                  {action === "archive-edit" && (
                    <div className="w-full flex flex-row justify-center gap-4">
                      <button>
                        <img
                          src="/images/icon/archive icon.png"
                          className="w-[18px]"
                          alt="archive"
                        />
                      </button>
                      <button>
                        <img
                          src="/images/icon/edit icon.png"
                          className="w-[18px]"
                          alt="edit"
                        />
                      </button>
                      <button>
                        <img
                          src="/images/icon/view icon.png"
                          className="w-[18px]"
                          alt="view"
                        />
                      </button>
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
        <div className="flex flex-row items-center gap-4 text-xs">
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="/"
            aria-current="page"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-primary-300 border border-primary-300 text-white"
          >
            1
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            2
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            3
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            ...
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            100
          </Link>
          <Link
            href="/"
            className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
