import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import Notifikasi from "../../../Components/Notifikasi";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import axios from "axios";

const Tingkatan = (props) => {
  const { tingkatan } = useAppContext();
  const { notification, setNotification } = tingkatan;
  const { data } = props.dataTingkatan;

  useEffect(() => {
    if (notification.show) {
      let timer = setTimeout(
        () =>
          setNotification({
            ...notification,
            show: false,
            type: "",
            message: "",
          }),
        4000
      );
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

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
          tableTitle="Daftar Tingkatan"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/class";
  const res = await axios.get(baseUrl);
  const dataTingkatan = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, baseUrl, dataTingkatan } };
}

export default Tingkatan;
