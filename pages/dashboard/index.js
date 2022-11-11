import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "../../Components/Buttons";
import KalenderBulan from "../../Components/KalenderBulan";
import Layout from "../../Components/Layout";
import { useAppContext } from "../../Hooks/useAppContext";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineMail,
  HiOutlinePlus,
} from "react-icons/hi";
import Image from "next/image";
import { serverProps } from "../../lib/serverProps";

const Dashboard = (props) => {
  const { dummy } = useAppContext();
  const { list_belum_submit_tugas, list_belum_lunas } = dummy;

  // kalender
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2022);
  useEffect(() => {
    const today = moment();
    const bulan = today.format("MM");
    const tahun = today.format("YYYY");
    setSelectedMonth(parseInt(bulan));
    setSelectedYear(parseInt(tahun));
  }, []);

  console.log("props dashboard", props);
  return (
    <Layout>
      <div className="flex flex-row gap-7">
        <div className="flex-auto w-2/3 flex flex-col gap-7 h-fit">
          {/* active student, teacher, alumni */}
          <div className="custom-box h-full py-4">
            <div className="w-full h-full flex flex-row divide-x-2">
              <div className="flex-auto w-full flex flex-row items-center gap-4 px-4">
                <Image
                  src="/images/icon/Active Student Dashboard.png"
                  alt="active student icon"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-normal text-sm text-gray-400">
                    Active Students
                  </h3>
                  <h4 className="font-bold text-sm">932</h4>
                </div>
              </div>
              <div className="flex-auto w-full flex flex-row items-center gap-4 px-4">
                <Image
                  src="/images/icon/Teacher Dashboard.png"
                  alt="teacher icon"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-normal text-sm text-gray-400">
                    Teachers
                  </h3>
                  <h4 className="font-bold text-sm">754</h4>
                </div>
              </div>
              <div className="flex-auto w-full flex flex-row items-center gap-4 px-4">
                <Image
                  src="/images/icon/Alumni Dashboard.png"
                  alt="alumni icon"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-normal text-sm text-gray-400">Alumni</h3>
                  <h4 className="font-bold text-sm">3217</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-7">
            <div className="flex-auto w-full">
              {/* kalender */}
              <KalenderBulan bulan={selectedMonth} tahun={selectedYear} />
            </div>
            <div className="flex-auto w-full">
              {/* information */}
              <div className="custom-box w-full h-full flex flex-col justify-between gap-5 p-7">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="font-bold text-xl">Information</h2>
                    <Button type="icon" variant="icon" link="/pengumuman/add">
                      <HiOutlinePlus />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-medium text-gray-600 text-xs text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <p className="font-medium text-gray-600 text-xs text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <Button type="info" style="w-full" link="/pengumuman">
                    View More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* siswa belum lunas */}
          <div className="custom-box flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-sm">Siswa/i yang belum Lunas</h2>
              <h4 className="font-normal text-2xs">You have 189 students</h4>
            </div>
            <div className="flex flex-col gap-3.5">
              {list_belum_lunas
                .filter((i, index) => index < 3) // hanya memunculkan 3 data
                .map((i, index) => (
                  <div
                    className="border rounded-lg text-xs p-3 bg-white"
                    key={"siswaBelumLunas" + index}
                  >
                    <div className="grid grid-rows-2 grid-cols-12 gap-x-3 gap-y-0.5">
                      <div className="row-start-1 row-span-2 col-start-1 col-span-2 flex items-center">
                        <div className="rounded-lg min-h-6 min-w-6 h-10 w-10 relative">
                          <Image
                            src="/images/profile.jpg"
                            className="object-cover rounded-lg"
                            alt="profile"
                            fill
                          />
                        </div>
                      </div>
                      <div className="row-start-1 row-span-1 col-start-3 col-span-3 flex items-center">
                        <h5 className="text-xs font-semibold">{i.name}</h5>
                      </div>
                      <div className="row-start-2 row-span-1 col-start-3 col-span-3 flex items-center">
                        <h6 className="text-2xs font-normal">{i.nis}</h6>
                      </div>
                      <div className="row-start-1 row-span-1 col-start-6 col-span-2 flex items-center">
                        <h5 className="text-xs font-semibold">{i.class}</h5>
                      </div>
                      <div className="row-start-2 row-span-1 col-start-6 col-span-2 flex items-center">
                        Class
                      </div>
                      <div className="row-start-1 row-span-2 col-start-8 col-span-3 flex items-center">
                        <h5 className="text-xs font-semibold">
                          Rp. {i.nominal}
                        </h5>
                      </div>
                      <div className="row-start-1 row-span-2 col-start-11 col-span-2 flex items-center justify-end">
                        <Button type="light" variant="icon">
                          <HiOutlineMail className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex-auto w-1/3 bg-red-20 flex flex-col gap-7 h-fit">
          {/* total pembayaran nunggak */}
          <div className="custom-box px-6 py-3">
            <div className="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-0.5">
              <div className="row-start-1 col-start-1 flex items-center">
                <h5 className="text-xs font-semibold">Rp.45.850.000.000</h5>
              </div>
              <div className="row-start-2 col-start-1 flex items-center">
                <h6 className="text-2xs font-semibold text-gray-400">
                  Total Pembayaran Nunggak
                </h6>
              </div>
              <div className="row-start-1 col-start-2 flex items-center justify-end">
                <h5 className="text-xs font-medium">December</h5>
              </div>
              <div className="row-start-2 col-start-2 flex items-center justify-end">
                <Image
                  src="/images/icon/Grafik Nunggak Dashboard.png"
                  alt="grafik nunggak"
                  width={120}
                  height={24}
                />
              </div>
            </div>
          </div>
          {/* total pembayaran lunas */}
          <div className="custom-box px-6 py-3">
            <div className="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-0.5">
              <div className="row-start-1 col-start-1 flex items-center">
                <h5 className="text-xs font-semibold">Rp.5.850.000</h5>
              </div>
              <div className="row-start-2 col-start-1 flex items-center">
                <h6 className="text-2xs font-semibold text-gray-400">
                  Total Pembayaran Lunas
                </h6>
              </div>
              <div className="row-start-1 col-start-2 flex items-center justify-end">
                <h5 className="text-xs font-medium">December</h5>
              </div>
              <div className="row-start-2 col-start-2 flex items-center justify-end">
                <Image
                  src="/images/icon/Grafik Lunas Dashboard.png"
                  alt="grafik lunas"
                  width={120}
                  height={24}
                />
              </div>
            </div>
          </div>
          {/* siswa belum submit tugas */}
          <div className="custom-box flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-sm">
                Siswa/i yang belum submit tugas
              </h2>
              <h4 className="font-normal text-2xs">You have 189 students</h4>
            </div>
            <div className="flex flex-col gap-3.5">
              {list_belum_submit_tugas
                .filter((i, index) => index < 5) // hanya memunculkan 5 data
                .map((i, index) => (
                  <div
                    className="border rounded-lg text-xs p-3 bg-white"
                    key={"siswaBelumSubmit" + index}
                  >
                    <div className="grid grid-rows-2 grid-cols-8 gap-x-3 gap-y-0.5">
                      <div className="row-start-1 row-span-2 col-start-1 col-span-2 flex items-center">
                        <div className="rounded-lg min-h-6 min-w-6 h-10 w-10 relative">
                          <Image
                            src="/images/profile.jpg"
                            className="object-cover rounded-lg"
                            alt="profile"
                            fill
                          />
                        </div>
                      </div>
                      <div className="row-start-1 row-span-1 col-start-3 col-span-3 flex items-center">
                        <h5 className="text-xs font-semibold">{i.name}</h5>
                      </div>
                      <div className="row-start-2 row-span-1 col-start-3 col-span-3 flex items-center">
                        <h6 className="text-2xs font-normal">{i.class}</h6>
                      </div>
                      <div className="row-start-1 row-span-2 col-start-6 col-span-3 flex items-center">
                        <h5 className="text-xs font-medium">{i.tugas}</h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  // none

  // Pass data to the page via props
  return { props: { ...prevProps } };
}

export default Dashboard;
