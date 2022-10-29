import React from "react";
import Buttons from "../../../../Buttons";
import Selects from "../../../../Selects";
import KalenderBulan from "./KalenderBulan";

const ContentKalender = () => {
  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023" },
    { name: "Semester Genap 2021/2022" },
    { name: "Semester Ganjil 2021/2022" },
  ];
  return (
    <div className="flex flex-col gap-5 py-2">
      <div
        id="top-content-kalender"
        className="flex flex-row items-center gap-20 absolute top-0 right-0"
      >
        <div className="flex flex-row items-center gap-4">
          <div className="">Tahun Akademik</div>
          <Selects
            list={tahun_akademik}
            size="w-full"
            description={tahun_akademik[0].name}
          />
        </div>
        <Buttons type="warning">Print</Buttons>
      </div>
      <div
        id="middle-content-kalender"
        className="grid grid-cols-3 grid-flow-row gap-8"
      >
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="January" tahun="2022" />
        </div>
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="February" tahun="2022" />
        </div>
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="March" tahun="2022" />
        </div>
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="April" tahun="2022" />
        </div>
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="May" tahun="2022" />
        </div>
        <div className="flex justify-center items-center">
          <KalenderBulan bulan="June" tahun="2022" />
        </div>
      </div>
      <div
        id="bottom-content-kalender"
        className="flex flex-row justify-between items-center"
      >
        <div className="grid w-[540px] grid-cols-12 grid-rows-4 gap-x-4 gap-y-3 text-2xs">
          <div className="col-start-1 col-span-full row-start-1 row-span-1">
            <div className="h-full w-full flex items-center">Keterangan:</div>
          </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-1">
            <div className="h-7 w-7 bg-yellow-300"></div>
          </div>
          <div className="col-start-1 col-span-1 row-start-3 row-span-1">
            <div className="h-7 w-7  bg-red-500"></div>
          </div>
          <div className="col-start-1 col-span-1 row-start-4 row-span-1">
            <div className="h-7 w-7 bg-green-400"></div>
          </div>
          <div className="col-start-2 col-span-5 row-start-2 row-span-1">
            <div className="h-full w-full flex items-center">Pembelajaran</div>
          </div>
          <div className="col-start-2 col-span-5 row-start-3 row-span-1">
            <div className="h-full w-full flex items-center">Libur</div>
          </div>
          <div className="col-start-2 col-span-5 row-start-4 row-span-1">
            <div className="h-full w-full flex items-center">
              Ujian Tengah Semester
            </div>
          </div>
          <div className="col-start-7 col-span-1 row-start-2 row-span-1">
            <div className="h-7 w-7 bg-pink-300"></div>
          </div>
          <div className="col-start-7 col-span-1 row-start-3 row-span-1">
            <div className="h-7 w-7 bg-cyan-600"></div>
          </div>
          <div className="col-start-8 col-span-5 row-start-2 row-span-1">
            <div className="h-full w-full flex items-center">
              Ujian Akhir Semester
            </div>
          </div>
          <div className="col-start-8 col-span-5 row-start-3 row-span-1">
            <div className="h-full w-full flex items-center">
              Batas Pembayaran
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Buttons type="light" variant="icon" name="page-previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Buttons>
          <Buttons type="light" variant="icon" name="page-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default ContentKalender;
