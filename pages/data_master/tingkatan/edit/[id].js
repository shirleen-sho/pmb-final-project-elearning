import React, { useEffect, useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import FormItem from "../../../../Components/FormItem";
import { useAppContext } from "../../../../Hooks/useAppContext";
import { serverProps } from "../../../../lib/serverProps";
import axios from "axios";

const EditTingkatan = (props) => {
  const { tingkatan } = useAppContext();
  const { form, setForm, resetForm, handleSubmitEdit } = tingkatan;
  const { data } = props.dataTingkatan;

  useEffect(() => {
    setForm({
      class_code: data.id,
      class_name: data.name,
    });
  }, [data.id, data.name, setForm]);

  return (
    <Layout>
      <div>
        <FormItem label={`Edit Tingkatan details here!`} labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE TINGKATAN */}
          <FormItem
            label="Kode Tingkatan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Tingkatan otomatis"
              size="w-full"
              disabled={true}
              value={form.class_code}
            />
          </FormItem>

          {/* NAMA TINGKATAN */}
          <FormItem
            label="Nama Tingkatan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Tulis nama tingkatan"
              size="w-full"
              value={form.class_name}
              setValue={(e) => setForm({ ...form, class_name: e.target.value })}
            />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button
            type="light"
            link="/data_master/tingkatan"
            handleClick={resetForm}
          >
            Back
          </Button>
          <Button
            type="primary"
            handleClick={(e) => {
              e.preventDefault();
              handleSubmitEdit();
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  let id = ctx.query.id;
  const res = await axios.get(
    `https://api.starling.kotasatelit.com/api/class/${id}`
  );
  const dataTingkatan = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataTingkatan } };
}

export default EditTingkatan;
