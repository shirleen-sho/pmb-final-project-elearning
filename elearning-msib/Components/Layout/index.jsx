import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row gap-10 p-10">
      <SideMenu />
      <div className="flex flex-col flex-grow h-full">
        <Header />
        <div className="h-full py-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
