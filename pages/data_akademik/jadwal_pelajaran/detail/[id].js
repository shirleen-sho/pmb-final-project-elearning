import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailJadwalPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail JadwalPelajaran {id}</div>
    </Layout>
  );
};

export default DetailJadwalPelajaran;
