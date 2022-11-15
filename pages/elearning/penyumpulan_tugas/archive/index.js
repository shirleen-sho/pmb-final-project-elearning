import Layout from "../../../../Components/Layout";
import React from "react";
import { useAppContext } from "../../../../Hooks/useAppContext";
import Selects from "../../../../Components/Selects";
import TableBasic from "../../../../Components/Table/TableBasic";

const PengumpulanTugas = () => {
  const { dummy } = useAppContext();
  const { pengumpulan_tugas } = dummy;
  return (
    <Layout>
      <div>
        {/* filter */}
        <div className="flex flex-row items-center gap-5 mt-2 mb-8 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <span className="font-medium text-xs">Tahun Akademik</span>
            <Selects
              list={pengumpulan_tugas}
              description="Pilih"
              size="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Tingkatan</span>
            <Selects
              list={pengumpulan_tugas}
              description="Pilih"
              size="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <span className="font-medium text-xs">Kelas</span>
            <Selects
              list={pengumpulan_tugas}
              description="Pilih"
              size="w-full"
            />
          </div>
        </div>
        <div className="w-full h-full">
          <TableBasic
            data={pengumpulan_tugas}
            topNavigation={true}
            tableTitle="Penyumpulan Tugas"
            actionUnarchive
            actionDetail
            buttonActive
            fieldSearch
          />
        </div>
      </div>
    </Layout>
  );
};

export default PengumpulanTugas;
