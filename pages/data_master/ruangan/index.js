import axios from "axios";
import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import TableBasic from "../../../Components/Table/TableBasic";
import { useAppContext } from "../../../Hooks/useAppContext";
import { serverProps } from "../../../lib/serverProps";
import Notifikasi from "../../../Components/Notifikasi";

const Ruangan = (props) => {
  const { ruangan } = useAppContext();
  const { notification, handleShowNotification } = ruangan;
  const { dataTableRuangan } = props;

  useEffect(() => {
    if (notification.show) {
      handleShowNotification();
    }
  }, [handleShowNotification, notification.show]);

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
          data={dataTableRuangan}
          tableTitle="Daftar Ruangan"
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
  const baseUrl = "https://api.starling.kotasatelit.com/api/room";
  const res = await axios.get(baseUrl);
  const dataRuangan = res.data;

  // filter untuk hanya menampilkan data yang diperlukan
  const dataTableRuangan = dataRuangan.data.map((ruang) => {
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
  return { props: { ...prevProps, baseUrl, dataRuangan, dataTableRuangan } };
}

export default Ruangan;
