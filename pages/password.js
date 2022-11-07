import React from "react";
import Button from "../Components/Buttons";
import Layout from "../Components/Layout";
import FormItem from "../Components/FormItem";
import InputFields from "../Components/InputFields";

const Password = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <FormItem label="Password Lama" labelType="label-sm" labelWidth="w-1/4">
          <InputFields
            type="text"
            placeholder="Tulis Password Lama"
            size="w-1/2"
          />
        </FormItem>
        <FormItem label="Password Baru" labelType="label-sm" labelWidth="w-1/4">
          <InputFields
            type="text"
            placeholder="Tulis Password Lama"
            size="w-1/2"
          />
        </FormItem>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          <Button type="light">Back</Button>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Password;
