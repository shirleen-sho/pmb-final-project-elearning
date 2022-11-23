import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import FormItem from "../../../Components/FormItem";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import axios from "axios";

const AddRuangan = (props) => {
  const { ruangan } = useAppContext();
  const { form, setForm, resetForm, handleSubmitAdd } = ruangan;

  const { pilihan_gedung } = props;

  const pilihan_status = [
    { label: "Aktif", value: 1 },
    { label: "Tidak Aktif", value: 0 },
  ];

  return (
    <Layout>
      <div>
        <FormItem label="Fill Ruangan details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE RUANGAN */}
          <FormItem
            label="Kode Ruangan"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="text" size="w-full" disabled={true} />
          </FormItem>

          {/* NAMA GEDUNG */}
          <FormItem label="Nama Gedung" labelType="label-sm" labelWidth="w-1/4">
            <Selects
              list={pilihan_gedung}
              size="w-full"
              description="Pilih Gedung"
              value={form.building_id}
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
            Cancel
          </Button>
          <Button type="primary" handleClick={handleSubmitAdd}>
            Save
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  const res = await axios.get(
    "https://api.starling.kotasatelit.com/api/building"
  );
  const dataPilihanGedung = res.data.data;
  const pilihan_gedung = dataPilihanGedung.map((d) => {
    return { label: d.name, value: d.id };
  });

  // Pass data to the page via props
  return { props: { ...prevProps, pilihan_gedung } };
}

export default AddRuangan;
