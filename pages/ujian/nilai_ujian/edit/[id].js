import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditNilaiUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit NilaiUjian {id}</div>
    </Layout>
  );
};

export default EditNilaiUjian;
