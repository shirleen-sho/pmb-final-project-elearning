import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailNilaiUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail NilaiUjian {id}</div>
    </Layout>
  );
};

export default DetailNilaiUjian;
