import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const DetailBankSoal = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Detail BankSoal {id}</div>
    </Layout>
  );
};

export default DetailBankSoal;
