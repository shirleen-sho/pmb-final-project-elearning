import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailRPP = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail RPP {id}</div>
    </Layout>
  );
};

export default DetailRPP;
