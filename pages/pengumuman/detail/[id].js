import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../Components/Layout";

const DetailPengumuman = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail Pengumuman {id}</div>
    </Layout>
  );
};

export default DetailPengumuman;
