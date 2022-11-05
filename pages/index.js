import Button from "../Components/Buttons";
import InputFields from "../Components/InputFields";
import Notifikasi from "../Components/Notifikasi";
import Selects from "../Components/Selects";
import TextArea from "../Components/TextArea";
import { FaSearch } from "react-icons/fa";
import Search from "../Components/Search";
import CardNotif from "../Components/Card/CardNotif";
import CardMaPel from "../Components/Card/CardMaPel";
import CardUsers from "../Components/Card/CardUsers";

export default function Home() {
  const list = [{ name: "pendi" }, { name: "geovaldo" }, { name: "Joko" }];

  const study = [{image: "/images/profile.jpg",title: "MTK", desc:" Matematika" , color: ""}, {image: "/images/profile.jpg",title :"Penjaskes" , desc:"Pendidikan Jasmani Olahraga dan Kesehatan" , color: "#f5f5f5S"} ]

  const users = [
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
    },
    {
      name: "Pendi",
      nuptk: "NUPTK 219887370203223",
      image: "/images/profile.jpg",
      desc: "vercel",
    },
  ];

  const show = () => alert("Hellow");
  return (
    <>
      <div className="m-5">
        <CardNotif type={true} />
        <CardNotif />
        <CardMaPel study={study}/>
        <CardUsers users={users}/>
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
        <Search />
      </div>
    </>
  );
}
