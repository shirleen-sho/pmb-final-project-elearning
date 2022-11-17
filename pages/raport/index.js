import React from "react";
import Layout from "../../Components/Layout";
import Selects from "../../Components/Selects";
import TableMerge from "../../Components/Table/TableMerge";
import { useAppContext } from "../../Hooks/useAppContext";

const Raport = () => {
  const { dummy } = useAppContext();
  const { dataDummyTrial2 } = dummy;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* filter */}
        <div className="flex flex-row items-center gap-5 my-2 w-full">
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Jenis Ujian</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/6">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/6">
            <span className="font-medium text-xs">Kelas</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
        </div>
        <TableMerge
          data={dataDummyTrial2}
          fieldSearch
          numbering
          pagination
          actionDetail
          tableTitle="Daftar Raport Siswa"
        />
      </div>
    </Layout>
  );
};

export default Raport;
