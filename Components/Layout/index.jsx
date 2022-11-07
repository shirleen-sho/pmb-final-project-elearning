import React, { useEffect } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import { useRouter } from "next/router";
import { useAppContext } from "../../Hooks/useAppContext";

const Layout = ({ children }) => {
  const { menu } = useAppContext();
  const { setSelectedMenu, setSelectedSubmenu, setSelectedActionmenu } = menu;

  const location = useRouter();
  const path = location.asPath;
  const pathMenu = "/" + path.split("/")[1];
  const pathSubMenu = "/" + path.split("/")[2];
  const pathAction = "/" + path.split("/")[3];

  useEffect(() => {
    setSelectedMenu(pathMenu);
    if (pathSubMenu === "/undefined") {
      setSelectedSubmenu("");
    } else {
      setSelectedSubmenu(pathMenu + pathSubMenu);
    }
    if (pathAction === "/undefined") {
      setSelectedActionmenu("");
    } else {
      setSelectedActionmenu(pathMenu + pathSubMenu + pathAction);
    }
  }, [
    pathAction,
    pathMenu,
    pathSubMenu,
    setSelectedActionmenu,
    setSelectedMenu,
    setSelectedSubmenu,
  ]);

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
