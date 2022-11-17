import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../Components/Layout";
import TableMerge from "../../../Components/Table/TableMerge";
import { useAppContext } from "../../../Hooks/useAppContext";

const DetailRaport = () => {
  const router = useRouter();
  const { id } = router.query;

  const { dummy } = useAppContext();
  const { raport } = dummy;

  return (
    <Layout>
      <span>Raport Siswa {id}</span>
      <TableMerge data={raport} numbering />
    </Layout>
  );
};

export default DetailRaport;
