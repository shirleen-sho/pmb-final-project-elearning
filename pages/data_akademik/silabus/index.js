import React from "react";
import Button from "../../../Components/Buttons";
import Layout from "../../../Components/Layout";
import Search from "../../../Components/Search";
import Selects from "../../../Components/Selects";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";

const Silabus = () => {
  const { dummy } = useAppContext();
  const { list_silabus, list_siswa } = dummy;
  return (
    <Layout>
      <div className="w-full h-full flex flex-col gap-5">
        {/* top nav */}
        <div className="flex flex-row items-center justify-between gap-5 my-2">
          <div className="flex flex-row items-center gap-5">
            <span className="font-medium text-sm">Tahun Akademik</span>
            <Selects
              list={list_siswa}
              description="Pilih Tahun Akademik"
              size="w-[240px]"
            />
          </div>
          <div className="flex flex-row items-center gap-5">
            <Search></Search>
            <Button type="warning" link="/data_akademik/silabus/archive">
              Archive
            </Button>
            <Button type="primary" link="/data_akademik/silabus/add">
              Add
            </Button>
          </div>
        </div>
        {/* table */}
        <TableBasic data={list_silabus} actionArchive actionEdit actionDetail />
      </div>
    </Layout>
  );
};

export default Silabus;
