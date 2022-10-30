import React from "react";
import Layout from "../../Components/Layout";
import Tabs from "../../Components/Tabs";
import Button from "../../Components/Buttons";
import Selects from "../../Components/Selects";
import Table from "../../Components/Table";
import { useAppContext } from "../../Hooks/useAppContext";

const PengaturanOtorisasi = () => {
  const list = [
    { id: 1, name: "Level Staff", tab: "" },
    { id: 2, name: "Pengaturan Otorisasi", tab: "/otorisasi" },
  ];

  const { dummy } = useAppContext();
  const { list_level_staff } = dummy;
  const level = list_level_staff.map((i) => {
    return { name: i["Level Staff"] };
  });

  return (
    <Layout>
      <Tabs list={list} pathName="/settings">
        <div className="w-full h-full flex flex-col gap-5">
          <div
            id="top-content-kalender"
            className="flex flex-row items-center gap-10"
          >
            <div className="flex flex-row items-center gap-4 px-4">
              <div className="">Staff Level</div>
              <Selects list={level} description="Pilih Staff Level" />
            </div>
            <Button type="primary">Simpan</Button>
          </div>
          <Table data={list_level_staff} />
        </div>
      </Tabs>
    </Layout>
  );
};

export default PengaturanOtorisasi;
