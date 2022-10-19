import React from "react";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row gap-10 p-10">
      <SideMenu />
      {children}
    </div>
  );
};

export default Layout;
