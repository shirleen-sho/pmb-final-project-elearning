import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import Button from "../../../Components/Buttons";
import KalenderBulan from "../../../Components/KalenderBulan";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import moment from "moment";
import Selects from "../../../Components/Selects";

const KalenderAkademik = () => {
  const list = [
    { id: 1, name: "Kalender", tab: "" },
    { id: 2, name: "List Kegiatan", tab: "/list_kegiatan" },
  ];

  const tahun_akademik = [
    { name: "Semester Ganjil 2022/2023", semester: "ganjil", tahun: 2022 },
    { name: "Semester Genap 2021/2022", semester: "genap", tahun: 2022 },
    { name: "Semester Ganjil 2021/2022", semester: "ganjil", tahun: 2021 },
  ];

  const [selectedTahunAkademik, setSelectedTahunAkademik] = useState(null);
  const [selectedBulan, setSelectedBulan] = useState([]);
  const [selectedTahun, setSelectedTahun] = useState(null);

  const handleSelectedTahunAkademik = (e) => {
    const terpilih = e.target.value;
    const semester = terpilih.split("-")[0];
    const tahun = terpilih.split("-")[1];
    setSelectedTahunAkademik(terpilih);
    if (semester === "ganjil") {
      setSelectedBulan([7, 8, 9, 10, 11, 12]);
    } else {
      setSelectedBulan([1, 2, 3, 4, 5, 6]);
    }
    setSelectedTahun(parseInt(tahun));
  };

  useEffect(() => {
    // default kalender akademik
    const today = moment();
    const bulan = today.format("MM");
    const tahun = today.format("YYYY");
    let semester;
    if (bulan >= 7 && bulan <= 12) {
      semester = "ganjil";
      setSelectedBulan([7, 8, 9, 10, 11, 12]);
    } else {
      semester = "genap";
      setSelectedBulan([1, 2, 3, 4, 5, 6]);
    }
    const terpilih = semester + "-" + tahun;
    setSelectedTahunAkademik(terpilih);
    setSelectedTahun(parseInt(tahun));
  }, []);

  const keterangan = [
    { color: "#FDE047", nama: "Pembelajaran" },
    { color: "#EF4444", nama: "Libur" },
    { color: "#4ADE80", nama: "Ujian Tengah Semester" },
    { color: "#F9A8D4", nama: "Ujian Akhir Semester" },
    { color: "#0891B2", nama: "Batas Pembayaran" },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/data_master/kalender_akademik">
        <div className="flex flex-col gap-5 py-2">
          {/* container top */}
          <div className="flex flex-row items-center gap-16 absolute top-0 right-0">
            <div className="flex flex-row items-center gap-4">
              <div className="">Tahun Akademik</div>
              {/* <Selects list={tahun_akademik} description="Pilih Tahun Akademik" size="w-64"/> */}
              <select
                className="outline-none px-4 py-2 font-normal border rounded transition ease-in-out inline-flex items-center text-xs shadow capitalize w-fit"
                onChange={handleSelectedTahunAkademik}
              >
                <option hidden>Pilih Tahun Akademik</option>
                {tahun_akademik.map(({ name, semester, tahun }, index) => {
                  const val = semester + "-" + tahun;
                  return (
                    <option key={"TA" + index} value={val}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <Button type="warning">Print</Button>
          </div>
          {selectedTahunAkademik && (
            <>
              {/* container isi */}
              <div className="grid grid-cols-3 grid-flow-row gap-8">
                {selectedBulan.map((bulan) => (
                  <div
                    className="flex justify-center items-center"
                    key={"kalender bulan " + bulan + " tahun " + selectedTahun}
                  >
                    <KalenderBulan bulan={bulan} tahun={selectedTahun} />
                  </div>
                ))}
              </div>

              {/* container bottom */}
              <div className="flex flex-row justify-between items-center py-4">
                {/* container bottom : keterangan */}
                <div className="flex flex-col gap-4">
                  <div className="text-2xs">Keterangan:</div>
                  <div className="grid w-[540px] grid-rows-3 grid-flow-col gap-x-4 gap-y-3">
                    {keterangan.map((ket, index) => (
                      <div
                        className="flex flex-row gap-4 items-center"
                        key={"keterangan" + index}
                      >
                        <div
                          className="h-7 w-7"
                          style={{ backgroundColor: ket.color }}
                        ></div>
                        <div className="text-2xs">{ket.nama}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* container bottom : buttons */}
                <div className="flex flex-row gap-4">
                  <Button type="light" variant="icon" name="page-previous">
                    <HiChevronLeft size={14} />
                  </Button>
                  <Button type="light" variant="icon" name="page-next">
                    <HiChevronRight size={14} />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Tabs>
    </Layout>
  );
};

export default KalenderAkademik;
