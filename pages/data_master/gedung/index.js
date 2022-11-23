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
  const { dataTableGedung } = props;

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
          data={dataTableGedung}
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

  // filter untuk hanya menampilkan data yang diperlukan
  const dataTableGedung = dataGedung.data.map((gedung) => {
    const arr = Object.entries(gedung);
    const filterArr = arr.filter(([key, value]) => key !== "status");
    const obj = Object.fromEntries(filterArr);
    const newObj = obj;
    return newObj;
  });

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTableGedung } };
}

export default Gedung;
