import axios from "axios";
import React from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";

const ArchiveTingkatan = (props) => {
  // const { tingkatan } = useAppContext();
  // const { notification, setNotification } = tingkatan;
  const { data } = props.dataTingkatanArchive;
  return (
    <Layout>
      <div className="w-full h-full">
        <TableBasic
          data={data}
          tableTitle="Daftar Arsipan Tingkatan"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/class";
  const res = await axios.get(`${baseUrl}/archive`);
  const dataTingkatanArchive = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTingkatanArchive } };
}

export default ArchiveTingkatan;
