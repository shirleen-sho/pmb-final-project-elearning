import React, { useEffect, useState } from "react";
import Button from "../../../../Components/Buttons";
import Layout from "../../../../Components/Layout";
import InputFields from "../../../../Components/InputFields";
import Selects from "../../../../Components/Selects";
import FormItem from "../../../../Components/FormItem";
import { serverProps } from "../../../../lib/serverProps";
import axios from "axios";
import { useAppContext } from "../../../../Hooks/useAppContext";

const EditRuangan = (props) => {
  const { ruangan } = useAppContext();
  const { form, setForm, resetForm, handleSubmitEdit } = ruangan;
  const { data } = props.dataRuangan;

  const { pilihan_gedung, selected_gedung } = props;

  const pilihan_status = [
    { label: "Aktif", value: 1 },
    { label: "Tidak Aktif", value: 0 },
  ];

  useEffect(() => {
    setForm({
      room_code: data.id,
      room_name: data.room_name,
      maximum_people: data.maximum_people,
      status: data.status,
      building_id: data.building_id,
    });
  }, [
    data.building_id,
    data.id,
    data.maximum_people,
    data.room_name,
    data.status,
    setForm,
  ]);

  return (
    <Layout>
      <div>
        <FormItem label="Edit Ruangan details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE RUANGAN */}
          <FormItem
            label="Kode Ruangan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              size="w-full"
              disabled={true}
              value={form.room_code}
            />
          </FormItem>

          {/* NAMA GEDUNG */}
          <FormItem label="Nama Gedung" labelType="label-sm" labelWidth="w-1/4">
            <Selects
              list={pilihan_gedung}
              size="w-full"
              description="Pilih Gedung"
              value={selected_gedung}
              handleChange={(item) =>
                setForm({ ...form, building_id: item.value })
              }
            />
          </FormItem>

          {/* NAMA RUANGAN */}
          <FormItem
            label="Nama Ruangan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Tulis nama ruangan"
              size="w-full"
              value={form.room_name}
              setValue={(e) => setForm({ ...form, room_name: e.target.value })}
            />
          </FormItem>

          {/* MAXIMUM PEOPLE */}
          <FormItem
            label="Maximum People"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="number"
              placeholder="0"
              size="w-1/3"
              value={form.maximum_people}
              setValue={(e) =>
                setForm({ ...form, maximum_people: e.target.value })
              }
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
            link="/data_master/ruangan"
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
    `https://api.starling.kotasatelit.com/api/room/${id}`
  );
  const dataRuangan = res.data;

  const res2 = await axios.get(
    "https://api.starling.kotasatelit.com/api/building"
  );
  const dataPilihanGedung = res2.data.data;
  const pilihan_gedung = dataPilihanGedung.map((d) => {
    return { label: d.name, value: d.id };
  });
  const selected_gedung = pilihan_gedung.find(
    (d) => d.value === dataRuangan.data.building_id
  );

  // Pass data to the page via props
  return {
    props: {
      ...prevProps,
      dataRuangan,
      pilihan_gedung,
      selected_gedung: selected_gedung || null,
    },
  };
}

export default EditRuangan;
