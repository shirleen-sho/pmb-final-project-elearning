import React, { useState } from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import InputFields from "../../../Components/InputFields";
import Link from "next/link";
import FormItem from "../../../Components/FormItem";

const AddTahunAkademik = () => {
  const pilihan_status = [
    { label: "Aktif", value: "aktif" },
    { label: "Tidak Aktif", value: "nonaktif" },
  ];

  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleChangeStatus = (e) => setSelectedStatus(e.target.value);

  return (
    <Layout>
      <div>
        <FormItem
          label="Fill Tahun Akademik details here!"
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
            />
          </FormItem>

          {/* NAMA TAHUN */}
          <FormItem label="Nama Tahun" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis nama tahun"
              size="w-full"
            />
          </FormItem>

          {/* SEMESTER */}
          <FormItem label="Semester" labelType="label-sm" labelWidth="w-1/4">
            <InputFields type="number" placeholder="1" size="w-full" />
          </FormItem>

          {/* STATUS */}
          <FormItem label="Status" labelType="label-sm" labelWidth="w-1/4">
            <div className="flex flex-row gap-6 w-1/3">
              {pilihan_status.map((i) => (
                <div className="radio flex flex-row gap-2">
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
          <Button type="light" link="/data_master/tahun_akademik">
            Cancel
          </Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AddTahunAkademik;
