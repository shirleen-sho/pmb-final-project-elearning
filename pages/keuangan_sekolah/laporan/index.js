import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import Selects from "../../../Components/Selects";
import InputFields from "../../../Components/InputFields";
import TableBasic from "../../../Components/Table/TableBasic";
import Button from "../../../Components/Buttons";
import { useAppContext } from "../../../Hooks/useAppContext";
import { FaRegCalendar } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Laporan = () => {
  const { dummy } = useAppContext();
  const { list_tingkatan } = dummy;

  const pilihan_dummy = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];

  const [data, setData] = useState(list_tingkatan);

  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* filter */}
        <div className="flex flex-row items-center gap-5 my-2 w-full">
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Tanggal Awal</span>
            <InputFields type="date" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Tanggal Akhir</span>
            <InputFields type="date" size="w-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <span className="font-medium text-xs">Kategori</span>
            <Selects list={pilihan_dummy} description="Pilih" size="w-full" />
          </div>
        </div>
        {/* result */}
        <div className="flex flex-col gap-6 w-full mt-1">
          {/* === judul ===*/}
          <div className="flex flex-row justify-between pb-4 border-b border-gray-200">
            <div className="text-sm font-semibold">
              Laporan Pemasukan & Pengeluaran
            </div>
          </div>
          {data ? (
            <>
              {/* === nav === */}
              <div className="flex flex-row items-center justify-between gap-16">
                <div className="flex flex-row items-center gap-6 w-full">
                  {/* tanggal */}
                  <div className="flex flex-row items-center gap-4 border border-gray-200 bg-white rounded-md shadow-sm w-full px-4 py-2">
                    <FaRegCalendar size={18} />
                    <div className="flex flex-col gap-1 text-2xs">
                      <div className="font-medium">Tanggal</div>
                      <div>14 November 2022 - 21 November 2022</div>
                    </div>
                  </div>
                  {/* kategori */}
                  <div className="flex flex-row items-center gap-4 border border-gray-200 bg-white rounded-md shadow-sm w-full px-4 py-2">
                    <RiDashboardFill size={18} />
                    <div className="flex flex-col gap-1 text-2xs">
                      <div className="font-medium">Kategori</div>
                      <div>Pemasukan</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  {/* button */}
                  <Button type="warning">Print</Button>
                </div>
              </div>
              {/* === table === */}
              <TableBasic data={list_tingkatan} />
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

export default Laporan;
