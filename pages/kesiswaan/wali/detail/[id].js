import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailWali = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail Wali {id}</div>
    </Layout>
  );
};

export default DetailWali;
