import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditJadwalUjian = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit JadwalUjian {id}</div>
    </Layout>
  );
};

export default EditJadwalUjian;
