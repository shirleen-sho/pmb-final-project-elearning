import React from "react";

const TableHead = ({
  fontHead,
  defaultCellStyle,
  table_head_formatted,
  actionDetail,
  actionArchive,
  actionUnarchive,
  actionEdit,
  actionDelete,
  linkToMataPelajaran,
  linkToInputSoal,
  linkToTransactionPayment,
  linkToTransactionHistory,
}) => {
  return (
    <thead>
      <tr className="capitalize">
        <th className={`${fontHead} ${defaultCellStyle} text-center`}>No</th>
        {table_head_formatted.map((head) => (
          <th key={head} className={`${fontHead} ${defaultCellStyle}`}>
            {head}
          </th>
        ))}
        {(actionDetail ||
          actionArchive ||
          actionUnarchive ||
          actionEdit ||
          actionDelete ||
          linkToMataPelajaran ||
          linkToInputSoal ||
          linkToTransactionPayment ||
          linkToTransactionHistory) && (
          <th className={`${fontHead} ${defaultCellStyle} text-center`}>
            Aksi
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
