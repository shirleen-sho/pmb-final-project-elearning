import React, { useState } from "react";
import Buttons from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import FormBanner from "../../../Components/FormBanner";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import Link from "next/link";
import FormRow from "../../../Components/FormRow";

const AddKelas = () => {
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
        <FormBanner>Fill Kelas details here!</FormBanner>
        <div className="flex flex-col py-5">
          {/* KODE KELAS */}
          <FormRow label="Kode Kelas" span="full">
            <InputFields
              type="text"
              placeholder="Kode Kelas otomatis"
              size="w-full"
            />
          </FormRow>

          {/* NAMA GEDUNG */}
          <FormRow label="Nama Gedung" span="full">
            <Selects
              list={tahun_akademik}
              size="w-full"
              description="Pilih Gedung"
            />
          </FormRow>

          {/* NAMA RUANGAN */}
          <FormRow label="Nama Ruangan" span="full">
            <Selects
              list={tahun_akademik}
              size="w-full"
              description="Pilih Ruangan"
            />
          </FormRow>

          {/* NAMA KELAS */}
          <FormRow label="Nama Kelas" span="full">
            <InputFields
              type="text"
              placeholder="Tulis nama kelas"
              size="w-full"
            />
          </FormRow>

          {/* MAXIMUM PEOPLE */}
          <FormRow label="Maximum People" span={1}>
            <InputFields type="number" placeholder="0" size="w-full" />
          </FormRow>

          {/* STATUS */}
          <FormRow label="Status" span={1}>
            <div className="flex flex-row gap-6">
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
          </FormRow>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Buttons type="secondary" link="/data_master/kelas">
            Cancel
          </Buttons>
          <Buttons type="primary">Save</Buttons>
        </div>
      </div>
    </Layout>
  );
};

export default AddKelas;
