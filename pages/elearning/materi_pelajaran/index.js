import Layout from "../../../Components/Layout";
import React from "react";
import { useAppContext } from "../../../Hooks/useAppContext";
import Selects from "../../../Components/Selects";
import Button from "../../../Components/Buttons";
import TableBasic from "../../../Components/Table/TableBasic";

const MateriPelajaran = () => {
  const { dummy } = useAppContext();
  const { materi_pelajaran } = dummy;
  return (
    <Layout>
      <div>
        {/* filter */}
        <div className="flex flex-row items-center gap-5 mt-2 mb-8 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects
              list={materi_pelajaran}
              description="Pilih"
              size="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects
              list={materi_pelajaran}
              description="Pilih"
              size="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Kelas</span>
            <Selects
              list={materi_pelajaran}
              description="Pilih"
              size="w-full"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <TableBasic
            data={materi_pelajaran}
            tableTitle="Materi Pelajaran"
            actionArchive
            actionEdit
            actionDetail
            buttonAdd
            buttonArchive
            fieldSearch
          />
        </div>
      </div>
    </Layout>
  );
};

export default MateriPelajaran;
