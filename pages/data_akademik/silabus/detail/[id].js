import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailSilabus = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail Silabus {id}</div>
    </Layout>
  );
};

export default DetailSilabus;
