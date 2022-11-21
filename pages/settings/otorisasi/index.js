import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import Button from "../../../Components/Buttons";
import Selects from "../../../Components/Selects";
import { useAppContext } from "../../../Hooks/useAppContext";
import TableOtorisasi from "../../../Components/Table/TableOtorisasi";

const PengaturanOtorisasi = () => {
  const list = [
    { id: 1, name: "Level Staff", tab: "/level" },
    { id: 2, name: "Pengaturan Otorisasi", tab: "/otorisasi" },
    { id: 3, name: "List Bank", tab: "/list_bank" },
  ];

  const { dummy } = useAppContext();
  const { list_level_staff, list_pengaturan_otorisasi } = dummy;
  const level = list_level_staff.map((i) => {
    return { value: i.kode_level, label: i.staff_level };
  });

  const [selectedData, setSelectedData] = useState(null);

  const handleChangeSelect = (item) => {
    const findSelected = list_pengaturan_otorisasi.find(
      (setting) => setting.kode_level === item.value
    );
    setSelectedData(findSelected);
    console.log("selected now", findSelected);
  };

  const handleSimpan = (e) => {
    e.preventDefault();
    console.log("submit data", selectedData);
  };

  return (
    <Layout>
      <Tabs list={list} pathName="/settings">
        <div className="w-full h-full flex flex-col gap-5">
          <div
            id="top-content-kalender"
            className="flex flex-row items-center justify-between"
          >
            <div className="flex flex-row items-center w-full">
              <span className="h-8 flex flex-row items-center font-medium mx-5">
                Staff Level
              </span>
              <Selects
                list={level}
                description="Pilih Staff Level"
                size="w-96"
                handleChange={(item) => handleChangeSelect(item)}
              />
            </div>
            {selectedData && (
              <Button type="primary" handleClick={(e) => handleSimpan(e)}>
                Simpan
              </Button>
            )}
          </div>
          {selectedData && (
            <TableOtorisasi
              data={selectedData.otorisasi}
              key="tableOtorisasi"
            />
          )}
        </div>
      </Tabs>
    </Layout>
  );
};

export default PengaturanOtorisasi;
