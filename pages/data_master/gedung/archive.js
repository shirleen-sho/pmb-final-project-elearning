import axios from "axios";
import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";

const ArchiveGedung = (props) => {
  const { dataTableGedungArchive } = props;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={dataTableGedungArchive}
          tableTitle="Daftar Arsipan Gedung"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/building";
  const res = await axios.get(`${baseUrl}/archive`);
  const dataGedungArchive = res.data;

  // filter untuk hanya menampilkan data yang diperlukan
  const dataTableGedungArchive = dataGedungArchive.data.map((gedung) => {
    const arr = Object.entries(gedung);
    const filterArr = arr.filter(([key, value]) => key !== "status");
    const obj = Object.fromEntries(filterArr);
    const newObj = obj;
    return newObj;
  });

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTableGedungArchive } };
}

export default ArchiveGedung;
