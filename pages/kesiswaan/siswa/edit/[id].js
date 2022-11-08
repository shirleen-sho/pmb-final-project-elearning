import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditSiswa = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit Siswa {id}</div>
    </Layout>
  );
};

export default EditSiswa;
