import React from "react";
import Layout from "../../Components/Layout";
import TableMerge from "../../Components/Table/TableMerge";
import { useAppContext } from "../../Hooks/useAppContext";

const Raport = () => {
  const { dummy } = useAppContext();
  const { dataDummyTrial1, dataDummyTrial2, dataDummyTrial3, dataDummyTrial4 } =
    dummy;
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <span>Tabel Trial 1</span>
        <TableMerge data={dataDummyTrial1} />
        <span>Tabel Trial 2</span>
        <TableMerge data={dataDummyTrial2} />
        <span>Tabel Trial 3</span>
        <TableMerge data={dataDummyTrial3} />
        <span>Tabel Trial 4</span>
        <TableMerge data={dataDummyTrial4} />
      </div>
    </Layout>
  );
};

export default Raport;
