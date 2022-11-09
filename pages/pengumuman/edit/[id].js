import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../Components/Layout";

const EditPengumuman = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit Pengumuman {id}</div>
    </Layout>
  );
};

export default EditPengumuman;
