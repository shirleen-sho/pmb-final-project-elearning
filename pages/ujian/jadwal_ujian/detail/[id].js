import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailJadwalUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail JadwalUjian {id}</div>
    </Layout>
  );
};

export default DetailJadwalUjian;
