import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditRPP = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit RPP {id}</div>
    </Layout>
  );
};

export default EditRPP;
