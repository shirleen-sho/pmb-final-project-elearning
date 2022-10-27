import React from "react";
import Buttons from "../../Components/Buttons";
import FormLabel from "../../Components/FormLabel";
import Layout from "../../Components/Layout";
import { useRouter } from "next/router";

const Password = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-5 grid-rows-2 gap-x-7 gap-y-5 py-3">
          <FormLabel className="col-start-1 col-span-1 row-start-1 row-span-1">
            Password Lama
          </FormLabel>
          <FormLabel className="col-start-1 col-span-1 row-start-2 row-span-1">
            Password Baru
          </FormLabel>
          <div className="col-start-2 col-span-2 row-start-1 row-span-1 bg-primary-50"></div>
          <div className="col-start-2 col-span-2 row-start-2 row-span-1 bg-primary-50"></div>
        </div>
        <div className="border-b border-neutral-2" />
        <div className="flex flex-row justify-end gap-5">
          {/* <button
            onClick={() => router.back()}
            className="bg-primary-50 px-4 py-2 text-xs"
          >
            Back
          </button> */}
          <Buttons type="secondary">Back</Buttons>
          <Buttons type="primary">Update</Buttons>
        </div>
      </div>
    </Layout>
  );
};

export default Password;
