import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../../Components/Layout";

const EditKategoriMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit KategoriMataPelajaran {id}</div>
    </Layout>
  );
};

export default EditKategoriMataPelajaran;
