import React from "react";

const Table = ({
  data,
  className,
  classNameHead,
  classNameBody,
  classNameCell,
}) => {
  let table_head = [];
  Object.keys(data[0]).forEach((key) => table_head.push(key));

  return (
    <table className={className}>
      <thead className={classNameHead}>
        <tr>
          {table_head.map((head) => (
            <th key={head} className={"font-bold" + classNameCell}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classNameBody}>
        {data.map((item, index) => (
          <tr key={"item" + index}>
            {table_head.map((head) => (
              <td key={"item" + head + index} className={classNameCell}>
                {item[head]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
