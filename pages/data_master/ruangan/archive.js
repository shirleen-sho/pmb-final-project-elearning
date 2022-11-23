import axios from "axios";
import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";

const ArchiveRuangan = (props) => {
  const { dataTableRuanganArchive } = props;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={dataTableRuanganArchive}
          tableTitle="Daftar Arsipan Ruangan"
          actionUnarchive
          buttonActive
          fieldSearch
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch previous data
  const getPreviousProps = await serverProps();
  const prevProps = getPreviousProps.props;

  // Fetch page's data
  const baseUrl = "https://api.starling.kotasatelit.com/api/room";
  const res = await axios.get(`${baseUrl}/archive`);
  const dataRuanganArchive = res.data;

  // filter untuk hanya menampilkan data yang diperlukan
  const dataTableRuanganArchive = dataRuanganArchive.data.map((ruang) => {
    const arr = Object.entries(ruang);
    const filterArr = arr.filter(
      ([key, value]) =>
        key !== "status" && key !== "building_id" && typeof value !== "object"
    );
    const obj = Object.fromEntries(filterArr);
    const newObj = { ...obj, building_name: ruang.building.name };
    return newObj;
  });

  // Pass data to the page via props
  return {
    props: {
      ...prevProps,
      baseUrl,
      dataRuanganArchive,
      dataTableRuanganArchive,
    },
  };
}

export default ArchiveRuangan;
