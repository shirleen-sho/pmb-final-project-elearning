import React, { useState, useRef, useEffect } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import FormItem from "../../../../Components/FormItem";
import { useRouter } from "next/router";
import { useAppContext } from "../../../../Hooks/useAppContext";
import { serverProps } from "../../../../lib/serverProps";
import axios from "axios";

const EditGedung = (props) => {
  const { gedung } = useAppContext();
  const { form, setForm, resetForm, handleSubmitEdit } = gedung;
  const { data } = props.dataGedung;

  const pilihan_status = [
    { label: "Aktif", value: 1 },
    { label: "Tidak Aktif", value: 0 },
  ];

  useEffect(() => {
    setForm({
      building_code: data.id,
      name: data.name,
      number_of_floors: data.number_of_floors,
      long: data.long,
      tall: data.tall,
      wide: data.wide,
      status: data.status,
    });
  }, [
    data.id,
    data.long,
    data.name,
    data.number_of_floors,
    data.status,
    data.tall,
    data.wide,
    setForm,
  ]);

  return (
    <Layout>
      <div>
        <FormItem label="Edit Gedung details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE GEDUNG */}
          <FormItem label="Kode Gedung" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              size="w-full"
              disabled={true}
              value={form.building_code}
            />
          </FormItem>

          {/* NAMA GEDUNG */}
          <FormItem label="Nama Gedung" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis nama gedung"
              size="w-full"
              value={form.name}
              setValue={(e) => setForm({ ...form, name: e.target.value })}
            />
          </FormItem>

          {/* JUMLAH LANTAI */}
          <FormItem
            label="Jumlah Lantai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="number"
              placeholder="0"
              size="w-1/3"
              value={form.number_of_floors}
              setValue={(e) =>
                setForm({ ...form, number_of_floors: e.target.value })
              }
            />
          </FormItem>

          {/* PANJANG */}
          <FormItem label="Panjang" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="0"
              size="w-1/3"
              value={form.long}
              setValue={(e) => setForm({ ...form, long: e.target.value })}
            />
          </FormItem>

          {/* TINGGI */}
          <FormItem label="Tinggi" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="0"
              size="w-1/3"
              value={form.tall}
              setValue={(e) => setForm({ ...form, tall: e.target.value })}
            />
          </FormItem>

          {/* LEBAR */}
          <FormItem label="Lebar" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="number"
              placeholder="0"
              size="w-1/3"
              value={form.wide}
              setValue={(e) => setForm({ ...form, wide: e.target.value })}
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
            link="/data_master/gedung"
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
    `https://api.starling.kotasatelit.com/api/building/${id}`
  );
  const dataGedung = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataGedung } };
}

export default EditGedung;
