import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../Components/Layout";

const EditBankSoal = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div>Edit BankSoal {id}</div>
    </Layout>
  );
};

export default EditBankSoal;
