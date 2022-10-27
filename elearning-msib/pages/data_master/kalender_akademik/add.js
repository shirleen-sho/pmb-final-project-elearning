import React from "react";
import Buttons from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";

const AddKegiatan = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-end gap-5">
        <Buttons classColor="btn-secondary" size="btn-xs m-0">
          Cancel
        </Buttons>
        <Buttons classColor="btn-primary" size="btn-xs m-0">
          Save
        </Buttons>
      </div>
    </Layout>
  );
};

export default AddKegiatan;
