import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import Notifikasi from "../../../Components/Notifikasi";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import axios from "axios";

const TahunAkademik = (props) => {
  const { tahun_akademik } = useAppContext();
  const { notification, setNotification } = tahun_akademik;
  const { data } = props.dataTahunAkademik;

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
  const res = await axios.get(
    "https://api.starling.kotasatelit.com/api/academic-year"
  );
  const dataTahunAkademik = res.data;

  // Pass data to the page via props
  return { props: { ...prevProps, dataTahunAkademik } };
}

export default TahunAkademik;
