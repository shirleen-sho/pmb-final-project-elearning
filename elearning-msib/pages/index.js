import Button from "../Components/Buttons";
import InputFields from "../Components/InputFields";
import Layout from "../Components/Layout";
import Notifikasi from "../Components/Notifikasi";
import Selects from "../Components/Selects";
import TextArea from "../Components/TextArea";
import { FaSearch } from "react-icons/fa";
import Search from "../Components/Search";

export default function Home() {
  const list =[
    {name: "pendi"},
    {name : "geovaldo"},
    {name : "Joko"}
  ]

  const show = () => alert("Hellow")
  return (
    <>
      <div>Pendi</div>
      <Layout>
        <div className="flex flex-col gap-4 text-sm text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt nulla velit. Praesent aliquet massa at odio dictum, sed
            imperdiet elit volutpat. Phasellus in ante semper, ornare justo
            quis, auctor nunc. Fusce non ipsum sed purus congue posuere non nec
            libero. Sed fringilla varius urna sit amet aliquet. Etiam eleifend,
            magna eget porta tempor, ante arcu gravida metus, et ultrices leo
            turpis posuere purus. Cras ligula quam, consequat vitae nunc vitae,
            egestas imperdiet risus. Sed porta, lectus ut tincidunt luctus, dui
            sem iaculis erat, facilisis molestie enim erat non nisl. Vestibulum
            et purus felis. Sed sodales, ante vitae malesuada rutrum, tellus
            tellus viverra nunc, facilisis elementum ligula ex eu elit. Vivamus
            quis arcu vel libero mattis varius quis eu est. Nam ut risus cursus,
            pharetra dolor ut, efficitur ex. Proin tristique scelerisque elit,
            ac ultricies est ultricies vitae. Proin volutpat quam et iaculis
            elementum.
          </p>
          <p>
            In elementum diam non ipsum mollis, at volutpat nisl ullamcorper.
            Proin volutpat volutpat velit ac lobortis. Nam malesuada dignissim
            dignissim. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Quisque malesuada ac arcu sit amet euismod. Nam sed
            suscipit nibh, et aliquet diam. Praesent pretium malesuada dolor et
            porttitor. Morbi quis libero sapien. Ut vel nisi dolor. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </Layout>
      <div className="m-5">
        <Notifikasi type="Success"/>
        <Notifikasi type="Danger"/>
        <Notifikasi type="Warning"/>
        <Notifikasi type="Info"/>
        <Notifikasi type="Dark"/>
      </div>
      <div className="m-5">
        <Selects list={list} size="w-2/4" description="Home"/>
        <Selects list={list} size="w-3/4" description="Home"/>
        <Selects list={list} size="w-1/5" description="Home"/>
        <Selects list={list} size="w-full" description="Home"/>
      </div>
      <div className="m-5">
        <InputFields type="text" placeholder="Name" size="w-full" disabled/>
        <InputFields type="text" placeholder="Name" size="w-3/4"/>
        <InputFields type="text" placeholder="Name" size="w-1/5"/>
        <InputFields type="text" placeholder="Name" size="w-2/4"/>
        <InputFields type="date" size="w-full"/>
        <TextArea placeholder="Massage" />
      </div>
      <div className='m-5'>
        <Button type="primary" link="/data_master/kalender_akademik" handleClick={()=>show()}>Primary</Button>
        <Button type="secondary" >Secondary</Button>
        <Button type="light">Light</Button>
        <Button type="dark">Dark</Button>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning" >Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Print</Button>
        <Button type="icon" variant="icon"><FaSearch/></Button>
      </div> 
      {/* <div className="m-5">
        <Search/>
      </div> */}
    </>
  );
}
 