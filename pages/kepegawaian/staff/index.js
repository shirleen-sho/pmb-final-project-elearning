import React from "react";
import Layout from "../../../Components/Layout";
import Buttons from "../../../Components/Buttons";
import Search from "../../../Components/Search";
import CardUsers from "../../../Components/Card/CardUsers";
import { useAppContext } from "../../../Hooks/useAppContext";

const Staff = () => {
  
  const { dummy } = useAppContext();
  const { users } = dummy;

  return (
    <Layout>
      <div className="flex justify-end mb-2">
        <Search></Search>
        <Buttons link="/kepegawaian/guru/add">add</Buttons>
      </div>
        
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4 lg:gap-6 p-5">
        <CardUsers users={users}></CardUsers>
      </div>
    </Layout>
  );
};

export default Staff;
