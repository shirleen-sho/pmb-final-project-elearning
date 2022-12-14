import React, { useState } from "react";
import Button from "../../../../../Components/Buttons";
import Layout from "../../../../../Components/Layout";
import InputFields from "../../../../../Components/InputFields";
import Selects from "../../../../../Components/Selects";
import FormItem from "../../../../../Components/FormItem";
import ColorPicker from "../../../../../Components/ColorPicker";
import { useRouter } from "next/router";

const EditKegiatan = () => {
  const router = useRouter();
  const { id } = router.query;

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

  const handleUpdateKegiatan = (e) => {
    e.preventDefault();
    // isi fungsi
  };

  return (
    <Layout>
      <div>
        <FormItem
          label={`Edit Kegiatan ID ${id} details here!`}
          labelType="banner"
        />
        <div className="flex flex-col py-5 gap-5">
          {/* KODE KALENDER */}
          <FormItem
            label="Kode Kalender"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields
              type="text"
              placeholder="Kode Kalender otomatis"
              size="w-full"
              disabled={true}
            />
          </FormItem>

          {/* TAHUN AKADEMIK */}
          <FormItem
            label="Tahun Akademik"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <Selects
              list={tahun_akademik}
              style="w-full"
              description={tahun_akademik[0].name}
            />
          </FormItem>

          {/* KETERANGAN */}
          <FormItem label="Keterangan" labelType="label-sm" labelWidth="w-1/4">
            <InputFields
              type="text"
              placeholder="Tulis keterangan kegiatan"
              size="w-full"
            />
          </FormItem>

          {/* WARNA */}
          <FormItem label="Warna" labelType="label-sm" labelWidth="w-1/4">
            <div className="relative py-2">
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
                <ColorPicker
                  choosenColor={choosenColor}
                  handleChangeColor={handleChangeColor}
                  handleClosePicker={handleClosePicker}
                />
              )}
            </div>
          </FormItem>

          {/* TANGGAL MULAI */}
          <FormItem
            label="Tanggal Mulai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="date" size="w-1/3" style="uppercase" />
          </FormItem>

          {/* TANGGAL SELESAI */}
          <FormItem
            label="Tanggal Selesai"
            labelType="label-sm"
            labelWidth="w-1/4"
          >
            <InputFields type="date" size="w-1/3" style="uppercase" />
          </FormItem>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button
            type="light"
            link="/data_master/kalender_akademik/list_kegiatan"
          >
            Back
          </Button>
          <Button type="primary" handleClick={(e) => handleUpdateKegiatan(e)}>
            Update
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default EditKegiatan;
