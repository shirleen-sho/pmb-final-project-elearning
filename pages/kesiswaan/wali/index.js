import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";

const Wali = () => {
  const list = [
    { id: 1, name: "Siswa", tab: "/siswa" },
    { id: 2, name: "Wali Murid", tab: "/wali" },
  ];
  return (
    <Layout>
      <Tabs list={list} pathName="/kesiswaan">
        <div className="flex flex-col gap-5 py-2">
          {/* container top */}
          <div className="flex flex-row items-center gap-16 absolute top-0 right-0">
            <div className="flex flex-row items-center gap-4">
              <div className="">Tahun Akademik</div>
              {/* <Selects list={tahun_akademik} description="Pilih Tahun Akademik" size="w-64"/> */}
            </div>
            <Button type="warning">Print</Button>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default Wali;
