import React from "react";
import Layout from "../../../Components/Layout";
import Buttons from "../../../Components/Buttons";
import Search from "../../../Components/Search";
import CardUsers from "../../../Components/Card/CardUsers";
import { useAppContext } from "../../../Hooks/useAppContext";

const Guru = () => {

  const { dummy } = useAppContext();
  const { users } = dummy;

  return (
    <Layout>
      <div className="flex justify-end">
        <Search></Search>
        <Buttons link="/kepegawaian/guru/add">add</Buttons>
      </div>
        
      <div className="grid grid-cols-6 grid-flow-cols  grid-flow-rows gap-">
        <CardUsers users={users}></CardUsers>
      </div>
    </Layout>
  );
};

export default Guru;
