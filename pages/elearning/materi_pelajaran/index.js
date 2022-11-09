import Layout from "../../../Components/Layout";
import React from "react";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";
import Button from "../../../Components/Buttons";

const MateriPelajaran = () => {
  const { dummy } = useAppContext();
  const { materi_pelajaran } = dummy;
  return (
    <Layout>
      <div>
        <div
          id="top-content"
          className="flex flex-row items-center justify-between my-2"
        >
          <div className="grid grid-cols-12 grid-flow-row gap-x-5 gap-y-3">
            <div className="col-start-1 col-span-2 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Tahun Akademik</span>
            </div>
            <div className="col-start-3 col-span-3 row-start-1">
              <Selects
                list={materi_pelajaran}
                description="Pilih Tahun Akademik"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-1 col-span-2 row-start-2 flex flex-row items-center">
              <span className="font-medium text-sm">Tingkatan</span>
            </div>
            <div className="col-start-3 col-span-3 row-start-2">
              <Selects
                list={materi_pelajaran}
                description="Pilih Tingkatan"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-1 flex flex-row items-center">
              <span className="font-medium text-sm">Kelas</span>
            </div>
            <div className="col-start-9 col-span-3 row-start-1">
              <Selects
                list={materi_pelajaran}
                description="Pilih Kelas"
                size="w-[240px]"
              />
            </div>
            <div className="col-start-7 col-span-2 row-start-2">
              <Button type="success">Simpan</Button>
            </div>
          </div>
        </div>
        <Table
          data={materi_pelajaran}
          topNavigation={true}
          tableTitle="Daftar Gedung"
          actionArchive
          actionEdit
          actionDetail
        />
      </div>
    </Layout>
  );
};

export default MateriPelajaran;
