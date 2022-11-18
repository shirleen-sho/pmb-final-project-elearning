import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import FormItem from "../../../Components/FormItem";

const AddRuangan = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  const pilihan_status = [
    { label: "Aktif", value: "aktif" },
    { label: "Tidak Aktif", value: "nonaktif" },
  ];

  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleChangeStatus = (e) => setSelectedStatus(e.target.value);

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
            <InputFields
              type="text"
              placeholder="Kode Ruangan otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* NAMA GEDUNG */}
          <FormItem label="Nama Gedung" labelType="label-sm" labelWidth="w-1/4">
            <Selects
              list={tahun_akademik}
              style="w-full"
              description="Pilih Gedung"
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
            />
          </FormItem>

          {/* MAXIMUM PEOPLE */}
          <FormItem
            label="Maximum People"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="number" placeholder="0" size="w-1/3" />
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
                    checked={selectedStatus === i.value ? true : false}
                    onClick={handleChangeStatus}
                  />
                  <label>{i.label}</label>
                </div>
              ))}
            </div>
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button type="light" link="/data_master/ruangan">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddRuangan;
