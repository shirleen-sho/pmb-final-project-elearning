import axios from "axios";
import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import Notifikasi from "../../../Components/Notifikasi";

const Gedung = (props) => {
  const { gedung } = useAppContext();
  const { notification, handleShowNotification } = gedung;
  const { data } = props.dataGedung;

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
          tableTitle="Daftar Gedung"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/building";
  const res = await axios.get(baseUrl);
  const dataGedung = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataGedung } };
}

export default Gedung;
