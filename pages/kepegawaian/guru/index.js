import React from "react";
import Layout from "../../../Components/Layout";
import Button from "../../../Components/Buttons";
import Search from "../../../Components/Search";
import CardUsers from "../../../Components/Card/CardUsers";
import { useAppContext } from "../../../Hooks/useAppContext";
import Tabs from "../../../Components/Tabs";

const Guru = () => {
  const { dummy } = useAppContext();
  const { users } = dummy;

  const list = [
    { id: 1, name: "Staff", tab: "/staff" },
    { id: 2, name: "Guru", tab: "/guru" },
  ];

  return (
    <Layout>
      <Tabs list={list} pathName="/kepegawaian">
        <div className="flex flex-col">
          {/* container top */}
          <div className="flex flex-row items-center gap-8 absolute top-0 right-0">
            <Search></Search>
            <Button link="/kepegawaian/guru/add">add</Button>
          </div>
        </div>
      </Tabs>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4 lg:gap-6 ">
        <CardUsers users={users}></CardUsers>
      </div>
    </Layout>
  );
};

export default Guru;
