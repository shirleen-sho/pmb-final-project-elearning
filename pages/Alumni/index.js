import React from "react";
import Layout from "../../Components/Layout";
import Button from "../../Components/Buttons";
import Search from "../../Components/Search";
import CardUsers from "../../Components/Card/CardUsers";
import { useAppContext } from "../../Hooks/useAppContext";
import Tabs from "../../Components/Tabs";
import Selects from "../../Components/Selects";

const Alumni = () => {
  const { dummy } = useAppContext();
  const { users } = dummy;


  return (
    <Layout>
      <div className="flex justify-end gap-4 mb-4">
        <Search></Search>
        <Button type="warning" link="/kepegawaian/guru/archive">active</Button>
        <Button link="/kepegawaian/guru/add">add</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4 lg:gap-6 ">
        <CardUsers users={users}></CardUsers>
      </div>
    </Layout>
  );
};

export default Alumni;
