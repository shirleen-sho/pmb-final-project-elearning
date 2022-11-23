import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import FormItem from "../../../Components/FormItem";
import { useAppContext } from "../../../Hooks/useAppContext";

const AddGedung = () => {
  const { gedung } = useAppContext();
  const { form, setForm, resetForm, handleSubmitAdd } = gedung;

  const pilihan_status = [
    { label: "Aktif", value: 1 },
    { label: "Tidak Aktif", value: 0 },
  ];

  return (
    <Layout>
      <div>
        <FormItem label="Fill Gedung details here!" labelType="banner" />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE GEDUNG */}
          <FormItem label="Kode Gedung" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="text" size="w-full" disabled={true} />
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

export default AddGedung;
