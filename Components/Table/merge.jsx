import React, { useState, useEffect } from "react";
import Button from "../Buttons";
import Search from "../Search";
import { useRouter } from "next/router";

const TableMerge = ({ data, tableTitle, topNavigation }) => {
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
          table_head.push(key);
          table_head_formatted.push(formattedKey);
          cols += 1;
        }
      });
      setTableHead(table_head);
      setTableHeadFormatted(table_head_formatted);
      setStyle({
        gridCols: `grid-cols-${cols}`,
        spanCols: `col-span-${colsChild}`,
      });
    };
    dataProcessing();
  }, [data]);

  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="border border-gray-200 bg-white rounded-xl p-6 shadow-lg w-full flex flex-col gap-6">
      {/* top navigation table */}
      {topNavigation && (
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-xl">{tableTitle || ""}</div>
          <div className="flex flex-row items-center gap-5">
            <Search />
            <Button type="primary" link={path + "/add"}>
              Add
            </Button>
          </div>
        </div>
      )}
      <table
        className={`border border-collapse border-gray-200 table-auto text-xs w-full h-full text-justify`}
      >
        <thead>
          <tr className={`grid ${style.gridCols} grid-rows-2 capitalize`}>
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
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={"itemTableTrial" + index}
              className={`grid ${style.gridCols} `}
            >
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMerge;
