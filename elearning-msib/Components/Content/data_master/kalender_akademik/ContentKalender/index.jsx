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
    <div className="flex flex-col gap-5">
      <div id="top-content-kalender" className="flex flex-row justify-between">
        <Buttons type="primary" link="/data_master/kalender_akademik/add">
          Add Kegiatan
        </Buttons>
        <div className="flex flex-row items-center absolute top-0 right-40">
          <div className="">Tahun Akademik</div>
          <Selects
            list={tahun_akademik}
            size="w-full"
            description={tahun_akademik[0].name}
          />
        </div>
        <div className="flex flex-col items-end gap-3 absolute top-0 right-0">
          <Buttons type="link">Print</Buttons>
          <Buttons type="info">Download</Buttons>
        </div>
      </div>
      <div
        id="middle-content-kalender"
        className="flex flex-row justify-between items-center gap-7 flex-wrap"
      >
        <KalenderBulan bulan="January" tahun="2022" />
        <KalenderBulan bulan="February" tahun="2022" />
        <KalenderBulan bulan="March" tahun="2022" />
        <KalenderBulan bulan="April" tahun="2022" />
        <KalenderBulan bulan="May" tahun="2022" />
        <KalenderBulan bulan="June" tahun="2022" />
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
        <div className="">
          <Buttons type="light">{"<"}</Buttons>
          <Buttons type="light">{">"}</Buttons>
        </div>
      </div>
    </div>
  );
};

export default ContentKalender;
