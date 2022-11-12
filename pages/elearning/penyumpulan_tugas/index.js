import Layout from "../../../Components/Layout";
import React from "react";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";
import Button from "../../../Components/Buttons";
import TableBasic from "../../../Components/Table/TableBasic";

const PengumpulanTugas = () => {
  const { dummy } = useAppContext();
  const { pengumpulan_tugas } = dummy;
  return (
    <Layout>
      <div>
        <div
          id="top-content"
          className="flex flex-row items-center justify-between my-4"
        >
          <div className="grid grid-cols-12 grid-flow-row gap-x-5 gap-y-3">
            <div className="col-start-1 col-span-1  row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Tahun Akademik</span>
            </div>
            <div className="col-start-2 col-span-3 row-start-1">
              <Selects
                list={pengumpulan_tugas}
                description="Pilih Tahun Akademik"
                size="w-full"
              />
            </div>
            <div className="col-start-5 col-span-1 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Tingkatan</span>
            </div>
            <div className="col-start-6  col-span-3 row-start-1">
              <Selects
                list={pengumpulan_tugas}
                description="Pilih Tingkatan"
                size="w-full"
              />
            </div>
            <div className="col-start-9 col-span-1 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Kelas</span>
            </div>
            <div className="col-start-10 col-span-3 row-start-1">
              <Selects
                list={pengumpulan_tugas}
                description="Pilih Kelas"
                size="w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <TableBasic
            data={pengumpulan_tugas}
            topNavigation={true}
            tableTitle="Penyumpulan Tugas"
            actionArchive
            actionDetail
          />
        </div>
      </div>
    </Layout>
  );
};

export default PengumpulanTugas;
