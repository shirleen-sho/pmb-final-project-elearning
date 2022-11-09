import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditJenisUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit JenisUjian {id}</div>
    </Layout>
  );
};

export default EditJenisUjian;
