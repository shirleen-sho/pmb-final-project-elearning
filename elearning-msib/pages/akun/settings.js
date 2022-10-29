import React from "react";
import Layout from "../../Components/Layout";
import Tabs from "../../Components/Tabs";
import ContentLevelStaff from "../../Components/Content/data_master/settings/ContentLevelStaff";
import ContentPengaturanOtorisasi from "../../Components/Content/data_master/settings/ContentPengaturanOtorisasi";

const Settings = () => {
  const list = [
    {
      id: 1,
      name: "Level Staff",
      selected: true,
      content: ContentLevelStaff(),
    },
    {
      id: 2,
      name: "Pengaturan Otorisasi",
      selected: false,
      content: ContentPengaturanOtorisasi(),
    },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/settings" />
    </Layout>
  );
};

export default Settings;
