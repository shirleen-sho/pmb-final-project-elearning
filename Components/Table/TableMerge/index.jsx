import React, { useState, useEffect } from "react";
import Button from "../../Buttons";
import Search from "../../Search";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineArchive,
  HiOutlineEye,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";

const TableMerge = ({
  data,
  tableTitle,
  numbering,
  pagination,
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
  const [tableHead, setTableHead] = useState([]);
  const [tableHeadFormatted, setTableHeadFormatted] = useState([]);
  const [style, setStyle] = useState({
    gridCols: "",
    spanCols: "",
  });

  const defaultCellStyle =
    "px-3 py-3 border border-collapse border-gray-200 flex justify-center items-center";
  const fontHead = "font-semibold";

  useEffect(() => {
    const dataProcessing = () => {
      let table_head = [];
      let table_head_formatted = [];
      let cols = 0;
      let colsChild = 0;
      Object.keys(data[0]).forEach((key) => {
        const splitKey = key.split("_");
        const formattedKey = splitKey.join(" ");
        if (typeof data[0][key] === "object") {
          let head = [];
          let head_formatted = [];
          Object.keys(data[0][key]).forEach((k) => {
            const splitK = k.split("_");
            const formattedK = splitK.join(" ");
            head.push(k);
            head_formatted.push(formattedK);
            cols += 1;
            colsChild += 1;
          });
          table_head.push({
            top: key,
            bottom: head,
          });
          table_head_formatted.push({
            top: formattedKey,
            bottom: head_formatted,
          });
        } else {
          if (
            key !== "id" &&
            key !== "created_at" &&
            key !== "deleted_at" &&
            key !== "updated_at"
          ) {
            table_head.push(key);
            table_head_formatted.push(formattedKey);
            cols += 1;
          }
        }
      });
      setTableHead(table_head);
      setTableHeadFormatted(table_head_formatted);
      if (
        (actionDetail ||
          actionArchive ||
          actionUnarchive ||
          actionEdit ||
          actionDelete) &&
        numbering
      ) {
        setStyle({
          gridCols: `grid-cols-${cols + 2}`,
          spanCols: `col-span-${colsChild}`,
        });
      } else if (
        actionDetail ||
        actionArchive ||
        actionUnarchive ||
        actionEdit ||
        actionDelete ||
        numbering
      ) {
        setStyle({
          gridCols: `grid-cols-${cols + 1}`,
          spanCols: `col-span-${colsChild}`,
        });
      } else {
        setStyle({
          gridCols: `grid-cols-${cols}`,
          spanCols: `col-span-${colsChild}`,
        });
      }
    };
    dataProcessing();
  }, [
    actionArchive,
    actionDelete,
    actionDetail,
    actionEdit,
    actionUnarchive,
    data,
    numbering,
  ]);

  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="bg-white w-full flex flex-col gap-6 py-3">
      {/* top navigation table */}
      {(fieldSearch || buttonAdd || buttonArchive || buttonActive) && (
        <div className="mb-1 flex flex-row justify-between items-center">
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
      )}
      {/* table */}
      <table className="table-auto border border-collapse border-gray-200 text-xs w-full h-full">
        <thead>
          <tr className={`grid ${style.gridCols} grid-rows-2 capitalize`}>
            {numbering && (
              <th
                className={`${fontHead} ${defaultCellStyle} row-start-1 row-span-2 text-center`}
              >
                No
              </th>
            )}
            {tableHeadFormatted.length > 0 &&
              tableHeadFormatted.map((head) =>
                typeof head === "object" ? (
                  <>
                    <th
                      key={head.top}
                      className={`${fontHead} ${defaultCellStyle} row-start-1 ${style.spanCols}`}
                    >
                      {head.top}
                    </th>
                    {head.bottom.map((h) => (
                      <th
                        key={h}
                        className={`${fontHead} ${defaultCellStyle} row-start-2`}
                      >
                        {h}
                      </th>
                    ))}
                  </>
                ) : (
                  <th
                    key={head}
                    className={`${fontHead} ${defaultCellStyle} row-start-1 row-span-2`}
                  >
                    {head}
                  </th>
                )
              )}
            {(actionDetail ||
              actionArchive ||
              actionUnarchive ||
              actionEdit ||
              actionDelete) && (
              <th
                className={`${fontHead} ${defaultCellStyle} row-start-1 row-span-2 text-center`}
              >
                Aksi
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={"itemTableTrial" + index}
              className={`grid ${style.gridCols} `}
            >
              {numbering && (
                <td className={`${defaultCellStyle}`}>{index + 1}</td>
              )}

              {tableHead.length > 0 &&
                tableHead.map((head, i) =>
                  typeof head === "object" ? (
                    head.bottom.map((h) => (
                      <td
                        key={
                          "itemHead-" +
                          index +
                          "-" +
                          i +
                          "-" +
                          item[head.top][h]
                        }
                        className={`${defaultCellStyle}`}
                      >
                        {item[head.top][h]}
                      </td>
                    ))
                  ) : (
                    <td
                      key={"itemHead-" + index + "-" + i + "-" + item[head]}
                      className={`${defaultCellStyle}`}
                    >
                      {item[head]}
                    </td>
                  )
                )}

              {(actionDetail ||
                actionArchive ||
                actionUnarchive ||
                actionEdit ||
                actionDelete) && (
                <td className={`${defaultCellStyle}`}>
                  <div className="flex flex-row items-center">
                    {actionDetail && (
                      <Button
                        type="link"
                        title="View"
                        link={path + "/detail/" + item.id}
                      >
                        <HiOutlineEye
                          className="hover:text-primary-600"
                          size={18}
                        />
                      </Button>
                    )}
                    {actionArchive && (
                      <Button type="link" title="Archive">
                        <HiOutlineArchive
                          size={18}
                          className="hover:text-primary-600"
                        />
                      </Button>
                    )}
                    {actionUnarchive && (
                      <Button type="link" title="Unarchive">
                        <HiOutlineArchive
                          size={18}
                          className="hover:text-primary-600"
                        />
                      </Button>
                    )}
                    {actionEdit && (
                      <Button
                        type="link"
                        title="Edit"
                        link={path + "/edit/" + item.id}
                      >
                        <HiOutlinePencil
                          className="hover:text-primary-600"
                          size={18}
                        />
                      </Button>
                    )}
                    {actionDelete && (
                      <Button type="link" title="Delete">
                        <HiOutlineTrash
                          className="hover:text-primary-600"
                          size={18}
                        />
                      </Button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* bottom navigation table */}
      {pagination && (
        <div
          className="flex flex-row justify-between items-center mt-1"
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
      )}
    </div>
  );
};

export default TableMerge;
