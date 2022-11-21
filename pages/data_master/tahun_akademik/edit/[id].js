import React, { useEffect, useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import FormItem from "../../../../Components/FormItem";
import { useAppContext } from "../../../../Hooks/useAppContext";
import { serverProps } from "../../../../lib/serverProps";
import axios from "axios";

const EditTahunAkademik = (props) => {
  const { tahun_akademik } = useAppContext();
  const { form, setForm, resetForm, handleSubmitEdit } = tahun_akademik;
  const { data } = props.dataTahunAkademik;

  const pilihan_status = [
    { label: "Aktif", value: 1 },
    { label: "Tidak Aktif", value: 0 },
  ];

  useEffect(() => {
    setForm({
      year_code: data.id,
      year_name: data.year_name,
      semester: data.semester,
      status: data.status,
    });
  }, [data.id, data.semester, data.status, data.year_name, setForm]);

  return (
    <Layout>
      <div>
        <FormItem
          label="Edit Tahun Akademik details here!"
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE TAHUN */}
          <FormItem label="Kode Tahun" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Kode Tahun otomatis"
              size="w-full"
              disabled={true}
              value={form.year_code}
            />
          </FormItem>

          {/* NAMA TAHUN */}
          <FormItem label="Nama Tahun" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis nama tahun"
              size="w-full"
              value={form.year_name}
              setValue={(e) => setForm({ ...form, year_name: e.target.value })}
            />
          </FormItem>

          {/* SEMESTER */}
          <FormItem label="Semester" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="1"
              size="w-full"
              value={form.semester}
              setValue={(e) => setForm({ ...form, semester: e.target.value })}
            />
          </FormItem>

          {/* STATUS */}
          <FormItem label="Status" labelType="label-sm" labelWidth="w-1/4">
            <div className="flex flex-row gap-6 w-1/3">
              {pilihan_status.map((i, index) => (
                <div
                  className="radio flex flex-row gap-2"
                  key={"radio" + index}
                >
                  <input
                    type="radio"
                    value={i.value}
                    checked={form.status === i.value ? true : false}
                    onClick={(e) =>
                      setForm({ ...form, status: parseInt(e.target.value) })
                    }
                  />
                  <label>{i.label}</label>
                </div>
              ))}
            </div>
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button
            type="light"
            link="/data_master/tahun_akademik"
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
    `https://api.starling.kotasatelit.com/api/academic-year/${id}`
  );
  const dataTahunAkademik = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataTahunAkademik } };
}

export default EditTahunAkademik;
