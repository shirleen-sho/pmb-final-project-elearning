import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../../../Hooks/useAppContext";
import {
  HiChevronDown,
  HiChevronUp,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const SideMenu = () => {
  const [showSidemenu, setShowSidemenu] = useState(true);
  const [paddingMenu, setPaddingMenu] = useState("px-6 py-2");
  const handleToggleSidemenu = () => {
    setShowSidemenu(!showSidemenu);
    if (showSidemenu) {
      setPaddingMenu("px-3 py-2");
    } else {
      setPaddingMenu("px-6 py-2");
    }
  };

  const { menu } = useAppContext();
  const { configMenu, selectedMenu, selectedSubmenu, selectedActionmenu } =
    menu;

  return (
    <div className="relative bg-primary-100 flex flex-col gap-10 px-2 py-14 rounded-lg min-h-screen h-fit min-w-fit">
      <div className="flex flex-row justify-center h-14">
        <div
          className={showSidemenu ? "h-14 w-40 relative" : "h-7 w-7 relative"}
        >
          <Image
            src={showSidemenu ? "/images/logo.png" : "/images/icon/school.png"}
            height={200}
            width={200}
            alt="icon school"
          />
        </div>
        <button
          onClick={handleToggleSidemenu}
          className="absolute -top-2 -right-2 bg-primary-50 shadow-sm w-7 h-7 rounded-lg flex justify-center items-center"
        >
          {showSidemenu ? (
            <HiChevronLeft size={14} />
          ) : (
            <HiChevronRight size={14} />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {configMenu.mainMenu.map(
          ({ route, name, title, detail, icon, subMenu }) => (
            <div className="flex flex-col gap-1" key={route}>
              <Link
                href={subMenu ? subMenu[0].route : route}
                key={route}
                legacyBehavior
              >
                <a
                  title={showSidemenu ? "" : name}
                  className={
                    selectedMenu === route
                      ? `font-semibold text-xs ${paddingMenu} bg-primary-200 rounded-full`
                      : `font-semibold text-xs ${paddingMenu} hover:bg-primary-200 hover:rounded-full`
                  }
                  onClick={() => {
                    if (!showSidemenu) {
                      setShowSidemenu(true);
                    }
                  }}
                >
                  <div className="flex flex-row justify-between items-center gap-4">
                    <div className="flex flex-row items-center">
                      <div className={showSidemenu ? "w-8" : ""}>{icon}</div>
                      {showSidemenu && name}
                    </div>
                    {subMenu &&
                      showSidemenu &&
                      (selectedMenu === route ? (
                        <HiChevronUp size={16} />
                      ) : (
                        <HiChevronDown size={16} />
                      ))}
                  </div>
                </a>
              </Link>
              {showSidemenu && selectedMenu === route && subMenu && (
                <div className="flex flex-row justify-center">
                  <div className="bg-primary-50 flex flex-col w-4/5">
                    {subMenu.map((sub) => (
                      <Link href={sub.route} key={sub.route} legacyBehavior>
                        <a
                          className={
                            selectedSubmenu === sub.route
                              ? "font-normal text-2xs px-4 py-2 border-l-4 border-neutral-4"
                              : "font-normal text-2xs px-4 py-2 border-l-4 border-transparent hover:border-primary-500"
                          }
                        >
                          {sub.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SideMenu;
