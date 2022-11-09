import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditSilabus = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit Silabus {id}</div>
    </Layout>
  );
};

export default EditSilabus;
