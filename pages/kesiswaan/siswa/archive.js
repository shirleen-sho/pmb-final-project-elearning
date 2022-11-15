import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";

const ArchiveSiswa = () => {
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
          {/* filter */}
          <div className="flex flex-row items-center gap-5 my-2 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <span className="font-medium text-xs">Tingkatan</span>
              <Selects list={list_siswa} description="Pilih" size="w-full" />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <span className="font-medium text-xs">Kelas</span>
              <Selects list={list_siswa} description="Pilih" size="w-full" />
            </div>
          </div>
          {/* table */}
          <TableBasic
            data={list_siswa}
            tableTitle="Daftar Arsipan Siswa"
            actionUnarchive
            buttonActive
            fieldSearch
          />
        </div>
      </Tabs>
    </Layout>
  );
};

export default ArchiveSiswa;
