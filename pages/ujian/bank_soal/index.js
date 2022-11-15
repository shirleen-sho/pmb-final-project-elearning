import React from "react";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const BankSoal = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;
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
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects
              list={pilihan_dummy}
              description="Pilih"
              size="w-[280px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Jenis Ujian</span>
            <Selects
              list={pilihan_dummy}
              description="Pilih"
              size="w-[280px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects
              list={pilihan_dummy}
              description="Pilih"
              size="w-[120px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-xs">Kelas</span>
            <Selects
              list={pilihan_dummy}
              description="Pilih"
              size="w-[120px]"
            />
          </div>
        </div>
        <TableBasic
          data={list_tingkatan}
          tableTitle="Data Bank Soal"
          actionDetail
          actionEdit
          actionDelete
          buttonAdd
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export default BankSoal;
