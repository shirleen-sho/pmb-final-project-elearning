import React, { useEffect } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import { useRouter } from "next/router";
import { useAppContext } from "../../Hooks/useAppContext";

const Layout = ({ children }) => {
  const { menu } = useAppContext();
  const {
    menus,
    selectedMenu,
    selectedSubmenu,
    setSelectedMenu,
    setSelectedSubmenu,
  } = menu;

  const location = useRouter();
  const path = location.pathname;
  const pathMenu = "/" + path.split("/")[1];

  useEffect(() => {
    // fungsi untuk memastikan state menu terupdate sesuai dengan location
    // misalnya ketika user mengakses page dari route secara manual tanpa menekan submenu
    if (path !== selectedMenu) {
      menus.map((m) => {
        if (m.sub_menu !== undefined) {
          const findSubMenu = m.sub_menu.find((i) => path === i.route);
          if (findSubMenu !== undefined) {
            setSelectedMenu(pathMenu);
            setSelectedSubmenu(path);
          } else {
            setSelectedMenu(pathMenu);
          }
        }
      });
    }
  }, []);

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
