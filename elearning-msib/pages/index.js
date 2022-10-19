import Buttons from "../Components/Buttons";
import InputFields from "../Components/InputFields";
import Layout from "../Components/Layout";
import TextArea from "../Components/TextArea";

export default function Home() {
  return (
    <>
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
        <InputFields type="text" placeholder="Name" />
        <InputFields type="date" />
        <InputFields type="textarea" />
        <TextArea />
      </div>
      <div className='m-5'>
        <Buttons classColor="btn-primary">Primary</Buttons>
        <Buttons classColor="btn-secondary">Secondary</Buttons>
        <Buttons classColor="btn-light">Light</Buttons>
        <Buttons classColor="btn-dark">Dark</Buttons>
        <Buttons classColor="btn-info">Info</Buttons>
        <Buttons classColor="btn-success">Success</Buttons>
        <Buttons classColor="btn-warning">Warning</Buttons>
        <Buttons classColor="btn-danger">Danger</Buttons>
        <Buttons classColor="btn-link">Print</Buttons>
      </div>
      
    </>
  );
}
