import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import Table from "../../../Components/Table";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";

const Siswa = () => {
  const list = [
    { id: 1, name: "Siswa", tab: "/siswa" },
    { id: 2, name: "Wali Murid", tab: "/wali" },
  ];

  const { dummy } = useAppContext();
  const { list_siswa } = dummy;

  return (
    <Layout>
      <Tabs list={list} pathName="/kesiswaan">
        <div className="w-full h-full flex flex-col gap-5">
          {/* top navigation */}
          <div className="flex flex-row items-center justify-between my-2">
            <div className="grid grid-cols-12 grid-flow-row gap-x-5 gap-y-3">
              <div className="col-start-1 col-span-2 row-start-1 flex flex-row items-center">
                <span className="font-medium text-sm">Tahun Akademik</span>
              </div>
              <div className="col-start-3 col-span-3 row-start-1">
                <Selects
                  list={list_siswa}
                  description="Pilih Tahun Akademik"
                  size="w-[240px]"
                />
              </div>
              <div className="col-start-1 col-span-2 row-start-2 flex flex-row items-center">
                <span className="font-medium text-sm">Tingkatan</span>
              </div>
              <div className="col-start-3 col-span-3 row-start-2">
                <Selects
                  list={list_siswa}
                  description="Pilih Tingkatan"
                  size="w-[240px]"
                />
              </div>
              <div className="col-start-7 col-span-2 row-start-1 flex flex-row items-center">
                <span className="font-medium text-sm">Kelas</span>
              </div>
              <div className="col-start-9 col-span-3 row-start-1">
                <Selects
                  list={list_siswa}
                  description="Pilih Kelas"
                  size="w-[240px]"
                />
              </div>
              <div className="col-start-7 col-span-2 row-start-2">
                <Button type="success">Simpan</Button>
              </div>
            </div>
          </div>
          {/* table */}
          <Table
            data={list_siswa}
            topNavigation={true}
            tableTitle="Daftar Siswa"
            actionArchive
            actionEdit
            actionDetail
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default Siswa;
