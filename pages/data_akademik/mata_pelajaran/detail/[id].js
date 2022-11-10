import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail MataPelajaran {id}</div>
    </Layout>
  );
};

export default DetailMataPelajaran;
