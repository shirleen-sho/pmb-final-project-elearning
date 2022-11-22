import axios from "axios";
import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";

const ArchiveTahunAkademik = (props) => {
  // const { tahun_akademik } = useAppContext();
  // const { notification, setNotification } = tahun_akademik;
  const { data } = props.dataTahunAkademikArchive;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={data}
          tableTitle="Daftar Arsipan Tahun Akademik"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/academic-year";
  const res = await axios.get(`${baseUrl}/archive`);
  const dataTahunAkademikArchive = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTahunAkademikArchive } };
}

export default ArchiveTahunAkademik;
