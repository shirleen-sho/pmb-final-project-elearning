import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditJadwalPelajaran = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit JadwalPelajaran {id}</div>
    </Layout>
  );
};

export default EditJadwalPelajaran;
