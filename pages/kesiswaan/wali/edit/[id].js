import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditWali = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit Wali {id}</div>
    </Layout>
  );
};

export default EditWali;
