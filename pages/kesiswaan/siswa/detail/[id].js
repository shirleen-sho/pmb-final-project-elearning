import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailSiswa = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail Siswa {id}</div>
    </Layout>
  );
};

export default DetailSiswa;
