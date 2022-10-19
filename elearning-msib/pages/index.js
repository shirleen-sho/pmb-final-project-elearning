import Buttons from "../Components/Buttons";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
      <Buttons classColor="btn-primary">Primary</Buttons>
      <Buttons classColor="btn-secondary">Secondary</Buttons>
      <Buttons classColor="btn-light">Light</Buttons>
      <Buttons classColor="btn-dark">Dark</Buttons>
      <Buttons classColor="btn-info">Info</Buttons>
      <Buttons classColor="btn-success">Success</Buttons>
      <Buttons classColor="btn-warning">Warning</Buttons>
      <Buttons classColor="btn-danger">Danger</Buttons>
      <Buttons classColor="btn-link">Print</Buttons>
      
      <Layout>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row justify-between items-center py-5 border-b border-neutral-2">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-3xl">Home</div>
              <div className="font-medium text-sm">Home details here!</div>
            </div>
            <div className="flex flex-row items-center gap-5 bg-warning-base">
              <div className="bg-white p-4 rounded-full">icon1</div>
              <div className="bg-white p-4 rounded-full">icon2</div>
              <div className="flex flex-col gap-1 items-center">
                <div className="font-semibold text-sm">Shirleen</div>
                <div className="font-normal text-sm">Admin</div>
              </div>
            </div>
          </div>
          <div className="bg-primary-50 h-full py-5">content</div>
        </div>
      </Layout>
    </>
  );
}
