import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import { useAppContext } from "../../../Hooks/useAppContext";
import TableMerge from "../../../Components/Table/TableMerge";

const AbsensiStaff = () => {
  const { dummy } = useAppContext();
  const { list_jadwal_pelajaran } = dummy;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const [data, setData] = useState(list_jadwal_pelajaran);

  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        <div className="px-3.5 py-2.5 border border-gray-300 text-xs font-semibold w-fit">
          Monthly Attendance
        </div>
        {/* filter */}
        <div className="flex flex-row items-center gap-5 my-2 w-full">
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Bulan</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Level</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
        </div>
        {/* result */}
        <div className="flex flex-col gap-3 w-full">
          {data ? (
            <>
              {/* === table === */}
              <TableMerge data={data} />
              {/* === keterangan === */}
              <div className="flex flex-row items-center gap-5 text-2xs font-semibold">
                <span className="text-green-500">H : Hadir</span>
                <span className="text-blue-500">I : Izin</span>
                <span className="text-red-500">A : Alpha</span>
                <span className="text-yellow-500">L : Late</span>
                <span className="text-orange-500">S : Sick/Sakit</span>
              </div>
            </>
          ) : (
            <div className="flex flex-row justify-center text-sm font-semibold text-gray-400">
              Belum ada data transaksi
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AbsensiStaff;
