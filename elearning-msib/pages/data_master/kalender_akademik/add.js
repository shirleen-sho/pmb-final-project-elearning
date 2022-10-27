import React from "react";
import Buttons from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";

const AddKegiatan = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-end gap-5">
        <Buttons type="secondary">Cancel</Buttons>
        <Buttons type="primary">Save</Buttons>
      </div>
    </Layout>
  );
};

export default AddKegiatan;
