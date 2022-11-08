import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import { useRouter } from "next/router";
import { useAppContext } from "../../Hooks/useAppContext";
import CardLogOut from "../Card/CardLogOut";

const Layout = ({ children }) => {
  const { menu, user } = useAppContext();
  const { setSelectedMenu, setSelectedSubmenu, setSelectedActionmenu } = menu;
  const { showLogout, setShowLogout } = user;

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
    <div className="w-full">
      {showLogout && <CardLogOut />}
      <div className="flex flex-row gap-10 p-7 w-full">
        <SideMenu />
        <div className="flex flex-col flex-grow h-full">
          <Header />
          <div className="w-full h-full pt-5">
            <div
              className="pr-10 scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-primary-50 scrollbar-thumb-rounded scrollbar-track-rounded hover:scrollbar-thumb-primary-300 overflow-y-scroll"
              style={{ height: "calc(100vh - 176px)" }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
