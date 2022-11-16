import React from "react";
import Layout from "../../../../Components/Layout";
import Button from "../../../../Components/Buttons";
import Search from "../../../../Components/Search";
import CardUsers from "../../../../Components/Card/CardUsers";
import { useAppContext } from "../../../../Hooks/useAppContext";
import Tabs from "../../../../Components/Tabs";
import Selects from "../../../../Components/Selects";

const ArchiveAlumni = () => {
  const { dummy } = useAppContext();
  const { users } = dummy;


  return (
    <Layout>
        <div className="flex flex-col">
          {/* container top */}
          <div className="flex flex-row items-center gap-4 absolute top-0 right-0">
            <Search></Search>
            <Button type="warning" link="/kepegawaian/Alumni">active</Button>
            <Button link="/kepegawaian/Alumni/add">add</Button>
          </div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-4 lg:gap-6 ">
        <CardUsers users={users}></CardUsers>
      </div>
    </Layout>
  );
};

export default ArchiveAlumni;