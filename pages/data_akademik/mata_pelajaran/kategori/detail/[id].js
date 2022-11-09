import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../Components/Layout";

const DetailKategoriMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail KategoriMataPelajaran {id}</div>
    </Layout>
  );
};

export default DetailKategoriMataPelajaran;
