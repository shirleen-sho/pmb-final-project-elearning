import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../../Hooks/useAppContext";

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
  const {
    menus,
    selectedMenu,
    selectedSubmenu,
    setSelectedMenu,
    setSelectedSubmenu,
  } = menu;

  return (
    <div className="relative bg-primary-100 flex flex-col gap-10 px-2 py-14 rounded-3xl min-h-screen h-fit min-w-fit">
      <div className="flex flex-row justify-center h-14">
        <img
          src={showSidemenu ? "/images/logo.png" : "/images/icon/school.png"}
          className={showSidemenu ? "h-full" : "h-7"}
          alt="icon school"
        />
        <button
          onClick={handleToggleSidemenu}
          className="absolute -top-2 -right-2 bg-primary-50 shadow-sm w-7 h-7 rounded-full"
        >
          {showSidemenu ? "<" : ">"}
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {menus.map(({ menu, sub_menu }) => (
          <div className="flex flex-col gap-1" key={menu.route}>
            <Link
              href={sub_menu ? sub_menu[0].route : menu.route}
              key={menu.route}
            >
              <a
                title={!showSidemenu && menu.name}
                className={
                  selectedMenu === menu.route
                    ? `font-semibold text-xs ${paddingMenu} bg-primary-200 rounded-full`
                    : `font-semibold text-xs ${paddingMenu} hover:bg-primary-200 hover:rounded-full`
                }
                onClick={() => {
                  if (sub_menu) {
                    setSelectedSubmenu(sub_menu[0].route);
                  } else {
                    setSelectedSubmenu("");
                  }
                  setSelectedMenu(menu.route);
                  if (!showSidemenu) {
                    setShowSidemenu(true);
                  }
                }}
              >
                <div className="flex flex-row justify-between items-center gap-4">
                  <div className="flex flex-row gap-4">
                    <img
                      src={
                        menu.icon
                          ? `/images/icon/${menu.icon}`
                          : "/images/icon/icon settings.png"
                      }
                      alt="icon"
                      className="w-4 h-auto"
                    />
                    {showSidemenu && menu.name}
                  </div>
                  {
                    /* icon dropdown */
                    showSidemenu && sub_menu && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )
                  }
                </div>
              </a>
            </Link>
            {showSidemenu && selectedMenu === menu.route && sub_menu && (
              <div className="flex flex-row justify-center">
                <div className="bg-primary-50 flex flex-col w-4/5">
                  {sub_menu.length > 0 &&
                    sub_menu.map((sub) => (
                      <Link href={sub.route} key={sub.route}>
                        <a
                          className={
                            selectedSubmenu === sub.route
                              ? "font-normal text-2xs px-4 py-2 border-l-4 border-neutral-4"
                              : "font-normal text-2xs px-4 py-2 border-l-4 border-transparent hover:border-primary-500"
                          }
                          onClick={() => {
                            setSelectedSubmenu(sub.route);
                          }}
                        >
                          {sub.name}
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
