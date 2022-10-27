import React from "react";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import ContentKalender from "../../../Components/Content/data_master/kalender_akademik/ContentKalender";
import ContentListKegiatan from "../../../Components/Content/data_master/kalender_akademik/ContentListKegiatan";

const KalenderAkademik = () => {
  const list = [
    {
      id: 1,
      name: "Kalender",
      selected: true,
      content: ContentKalender(),
    },
    {
      id: 2,
      name: "List Kegiatan",
      selected: false,
      content: ContentListKegiatan(),
    },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/data_master/kalender_akademik" />
    </Layout>
  );
};

export default KalenderAkademik;
