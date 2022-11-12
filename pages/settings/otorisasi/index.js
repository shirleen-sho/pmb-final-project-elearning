import React from "react";
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
  ];

  const { dummy } = useAppContext();
  const { list_level_staff, list_pengaturan_otorisasi } = dummy;
  const level = list_level_staff.map((i) => {
    return { name: i.staff_level };
  });

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
              />
            </div>
            <Button type="primary">Simpan</Button>
          </div>
          {list_pengaturan_otorisasi.map((setting, index) => (
            <TableOtorisasi
              data={setting.otorisasi}
              key={"tableOtorisasi" + index}
            />
          ))}
        </div>
      </Tabs>
    </Layout>
  );
};

export default PengaturanOtorisasi;
