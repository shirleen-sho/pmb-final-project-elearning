import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditMataPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit MataPelajaran {id}</div>
    </Layout>
  );
};

export default EditMataPelajaran;
