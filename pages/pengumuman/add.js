import React from "react";
import FormItem from "../../Components/FormItem";
import Layout from "../../Components/Layout";
import InputFields from "../../Components/InputFields";
import Selects from "../../Components/Selects";
import Button from "../../Components/Buttons";
import RichEditor from "../../Components/RichEditor"

const AddPengumuman = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="Fill Siswa details here!" labelType="banner" />
        <div>
          <RichEditor/>
        </div>
      </div>
    </Layout>
  );
};

export default AddPengumuman;
