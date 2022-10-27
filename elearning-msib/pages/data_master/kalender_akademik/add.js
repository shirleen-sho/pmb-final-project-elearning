import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Buttons from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import FormBanner from "../../../Components/FormBanner";
import FormLabel from "../../../Components/FormLabel";
import InputFields from "../../../Components/InputFields";
import Selects from "../../../Components/Selects";
import Link from "next/link";
import FormRow from "../../../Components/FormRow";

const AddKegiatan = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];

  const [showPicker, setShowPicker] = useState(false);
  const [choosenColor, setChoosenColor] = useState({ hex: "#000000" });
  const handleShowPicker = () => setShowPicker(true);
  const handleClosePicker = () => setShowPicker(false);
  const handleChangeColor = (color, event) => setChoosenColor(color);

  return (
    <Layout>
      <div>
        <FormBanner>Fill Kegiatan details here!</FormBanner>
        <div className="flex flex-col py-5">
          {/* KODE KALENDER */}
          <FormRow label="Kode Kalender" span={3}>
            <InputFields
              type="text"
              placeholder="Kode Kalender otomatis"
              size="w-full"
            />
          </FormRow>

          {/* TAHUN AKADEMIK */}
          <FormRow label="Tahun Akademik" span={3}>
            <Selects
              list={tahun_akademik}
              size="w-full"
              description={tahun_akademik[0].name}
            />
          </FormRow>

          {/* KETERANGAN */}
          <FormRow label="Keterangan" span={3}>
            <InputFields
              type="text"
              placeholder="Tulis keterangan kegiatan"
              size="w-full"
            />
          </FormRow>

          {/* WARNA */}
          <FormRow label="Warna" span={3}>
            <div className="relative">
              {/* preview warna terpilih */}
              <div className="flex flex-row items-center gap-4">
                <div
                  className="h-7 w-7"
                  style={{ backgroundColor: choosenColor.hex }}
                ></div>
                <button
                  onClick={handleShowPicker}
                  className="uppercase text-xs hover:font-medium"
                >
                  {choosenColor.hex}
                </button>
              </div>
              {/* picker warna */}
              {showPicker && (
                <div className="absolute top-0 left-36">
                  <SketchPicker
                    color={choosenColor}
                    onChange={handleChangeColor}
                    className="relative"
                  />
                  <button
                    onClick={handleClosePicker}
                    className="absolute -top-3 -right-3 bg-white border shadow-sm w-6 h-6 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </FormRow>

          {/* TANGGAL MULAI */}
          <FormRow label="Tanggal Mulai" span={1}>
            <InputFields type="date" size="w-full" style="uppercase" />
          </FormRow>

          {/* TANGGAL SELESAI */}
          <FormRow label="Tanggal Selesai" span={1}>
            <InputFields type="date" size="w-full" style="uppercase" />
          </FormRow>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Buttons type="secondary">Cancel</Buttons>
          <Buttons type="primary">Save</Buttons>
        </div>
      </div>
    </Layout>
  );
};

export default AddKegiatan;
