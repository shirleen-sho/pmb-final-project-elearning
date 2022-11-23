import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import Notifikasi from "../../../Components/Notifikasi";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import axios from "axios";

const TahunAkademik = (props) => {
  const { tahun_akademik } = useAppContext();
  const { notification, handleShowNotification } = tahun_akademik;
  const { data } = props.dataTahunAkademik;

  useEffect(() => {
    if (notification.show) {
      handleShowNotification();
    }
  }, [handleShowNotification, notification]);

  return (
    <Layout>
      <div className="w-full h-full">
        {notification.show && (
          <Notifikasi
            type={notification.type}
            description={notification.message}
          />
        )}
        <TableBasic
          data={data}
          tableTitle="Daftar Tahun Akademik"
          actionArchive
          actionEdit
          buttonAdd
          buttonArchive
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
  const res = await axios.get(baseUrl);
  const dataTahunAkademik = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTahunAkademik } };
}

export default TahunAkademik;
