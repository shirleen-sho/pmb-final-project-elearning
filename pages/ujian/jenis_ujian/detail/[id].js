import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailJenisUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail JenisUjian {id}</div>
    </Layout>
  );
};

export default DetailJenisUjian;
