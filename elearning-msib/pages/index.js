import Button from "../Components/Buttons";
import InputFields from "../Components/InputFields";
import Layout from "../Components/Layout";
import Notifikasi from "../Components/Notifikasi";
import Selects from "../Components/Selects";
import TextArea from "../Components/TextArea";
import { FaSearch } from "react-icons/fa";
import Search from "../Components/Search";
import Card from "../Components/Card";
import KalenderBulan from "../Components/KalenderBulan";

export default function Home() {
  const list = [{ name: "pendi" }, { name: "geovaldo" }, { name: "Joko" }];

  const users = [
    {
      name: "Pendi",
      image: "/images/profile.jpg",
      desc: "vercel",
      link: "/data_master/kalender_akademik",
    },
    {
      name: "Johan",
      image: "/images/profile.jpg",
      desc: "Logo",
      link: "/data_master/kalender_akademik",
    },
  ];

  const show = () => alert("Hellow");
  return (
    <>
      <Layout>
        <div className="flex flex-row gap-7 text-sm text-justify">
          <div className="flex-auto w-2/3 flex flex-col gap-7 h-fit">
            <div className="bg-white border rounded-xl h-16">
              <div
                id="component"
                className="py-2 sw-full h-full flex flex-row divide-x-2"
              >
                <div className="flex-auto w-full flex flex-row justify-center items-center">
                  A
                </div>
                <div className="flex-auto w-full flex flex-row justify-center items-center">
                  B
                </div>
                <div className="flex-auto w-full flex flex-row justify-center items-center">
                  C
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-7">
              <div className="flex-auto w-full flex justify-center bg-gray-100">
                <KalenderBulan />
              </div>
              <div className="flex-auto w-full flex justify-center bg-gray-100">
                <div className="bg-white border rounded-xl w-full h-full flex flex-col gap-5 p-5">
                  <div className="font-bold text-2xl">Information</div>
                  <p className="font-medium text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="font-medium text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <Button type="light" style="w-full">
                    View More
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">kiri bawah</div>
          </div>
          <div className="flex-auto w-1/3 bg-red-20 flex flex-col gap-7 h-fit">
            <div className="bg-gray-100 h-16">kiri atas</div>
            <div className="bg-gray-100 h-16">kiri tengah</div>
            <div className="bg-gray-100">kiri bawah</div>
          </div>
        </div>
      </Layout>
      <div className="m-5">
        <Card users={users} link="/data_master/kalender_akademik" />
      </div>
      <div className="m-5">
        <Notifikasi type="Success" />
        <Notifikasi type="Danger" />
        <Notifikasi type="Warning" />
        <Notifikasi type="Info" />
        <Notifikasi type="Dark" />
      </div>
      <div className="m-5">
        <Selects list={list} size="w-2/4" description="Home" />
        <Selects list={list} size="w-3/4" description="Home" />
        <Selects list={list} size="w-1/5" description="Home" />
        <Selects list={list} size="w-full" description="Home" />
      </div>
      <div className="m-5">
        <InputFields type="text" placeholder="Name" size="w-full" disabled />
        <InputFields type="text" placeholder="Name" size="w-3/4" />
        <InputFields type="text" placeholder="Name" size="w-1/5" />
        <InputFields type="text" placeholder="Name" size="w-2/4" />
        <InputFields type="date" size="w-full" />
        <TextArea placeholder="Massage" />
      </div>
      <div className="m-5">
        <Button
          type="primary"
          link="/data_master/kalender_akademik"
          handleClick={() => show()}
        >
          Primary
        </Button>
        <Button type="secondary">Secondary</Button>
        <Button type="light">Light</Button>
        <Button type="dark">Dark</Button>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Print</Button>
        <Button type="icon" variant="icon">
          <FaSearch />
        </Button>
      </div>
      <div className="m-5">
        <Search/>
      </div>
    </>
  );
}
