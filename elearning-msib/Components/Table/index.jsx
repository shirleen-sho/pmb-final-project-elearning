import React from "react";
import Link from "next/link";

const Table = ({ data, textAlign, borderCell, action }) => {
  let table_head = [];
  Object.keys(data[0]).forEach((key) => table_head.push(key));

  const paddingCell = "px-3 py-3";
  const heightCell = "h-14";
  const fontHead = "font-semibold";
  const colorHead = "bg-gradient-to-r from-primary-50/50 to-primary-100";

  return (
    <div className="relative border border-gray-200 z-0 bg-white rounded-[30px] p-6 shadow-lg w-full h-full">
      <table className={`table-auto text-xs w-full h-full text-${textAlign}`}>
        <thead>
          <tr>
            <th className={`${fontHead} ${paddingCell} ${heightCell} w-14`}>
              No
            </th>
            {table_head.map((head) => (
              <th
                key={head}
                className={`${fontHead} ${paddingCell} ${heightCell} ${borderCell}`}
              >
                {head}
              </th>
            ))}
            {action && (
              <th
                className={`${fontHead} ${paddingCell} ${heightCell} ${borderCell} w-28`}
              >
                Aksi
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={"item" + index}>
              <td className={`${paddingCell} ${heightCell}`}>{index + 1}</td>
              {table_head.map((head) => (
                <td
                  key={"item" + head + index}
                  className={`${paddingCell} ${heightCell} ${borderCell}`}
                >
                  {item[head]}
                </td>
              ))}
              {action && (
                <td className={`${paddingCell} ${heightCell} ${borderCell}`}>
                  {action === "archive-edit" && (
                    <div className="w-full flex flex-row gap-4 border bg-white shadow-md px-4 py-2 rounded-md">
                      <button>
                        <img
                          src="/images/icon/archive icon.png"
                          className="w-5"
                          alt="archive"
                        />
                      </button>
                      <button>
                        <img
                          src="/images/icon/Edit icon.png"
                          className="w-5"
                          alt="edit"
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
        className={`${colorHead} absolute w-[100%-24px] h-14 top-6 left-6 right-6 -z-10 rounded-l-2xl rounded-r-2xl`}
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
        <div className="flex flex-row items-center gap-4 text-xs">
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
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
            </a>
          </Link>
          <Link href="/">
            <a
              aria-current="page"
              className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-primary-300 border border-primary-300 text-white"
            >
              1
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
              2
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
              3
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
              ...
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
              100
            </a>
          </Link>
          <Link href="/">
            <a className="font-medium px-1.5 py-1.5 w-8 flex justify-center items-center rounded bg-gray-100 border border-gray-200 hover:bg-primary-100">
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
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Table;
