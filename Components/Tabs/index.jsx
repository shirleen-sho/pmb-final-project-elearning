import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../Hooks/useAppContext";

const Tabs = ({ list, pathName, children }) => {
  const { menu } = useAppContext();
  const {
    menus,
    selectedMenu,
    selectedSubmenu,
    setSelectedMenu,
    setSelectedSubmenu,
  } = menu;

  const location = useRouter();
  const path = location.asPath;
  const pathMenu = "/" + path.split("/")[1];

  useEffect(() => {
    // fungsi untuk memastikan state menu terupdate sesuai dengan location
    // misalnya ketika user mengakses page dari route secara manual
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
    <div className="w-full h-full text-sm relative">
      {/* Tab Head */}
      <div className="flex text-gray-400 font-medium w-fit">
        {list.map((i) => {
          let selected = "";
          if (path === `${pathName}${i.tab}`) {
            selected = "border-b-2";
          }
          return (
            <div className={`px-5 py-2 ${selected}`} key={i.tab}>
              <Link href={`${pathName}${i.tab}`}>{i.name}</Link>
            </div>
          );
        })}
      </div>
      {/* Tab Body */}
      <div className="h-full py-5">{children}</div>
    </div>
  );
};

export default Tabs;
