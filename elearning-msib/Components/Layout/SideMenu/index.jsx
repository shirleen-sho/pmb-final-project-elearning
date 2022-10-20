import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../../Hooks/useAppContext";

const SideMenu = () => {
  const { menu } = useAppContext();
  const {
    menus,
    selectedMenu,
    selectedSubmenu,
    setSelectedMenu,
    setSelectedSubmenu,
  } = menu;

  return (
    <div className="bg-primary-100 flex flex-col gap-10 px-2 py-14 rounded-3xl min-h-screen h-fit min-w-fit">
      <div className="flex flex-row justify-center">
        <img src="/images/logo.png" className="h-14 w-auto" alt="icon school" />
      </div>
      <div className="flex flex-col gap-1">
        {menus.map(({ menu, sub_menu }, index) => (
          <>
            <Link
              href={sub_menu ? sub_menu[0].route : menu.route}
              key={menu.route}
            >
              <a
                className={
                  selectedMenu === menu.route
                    ? "font-semibold text-xs px-6 py-2 bg-primary-200 rounded-full"
                    : "font-semibold text-xs px-6 py-2 hover:bg-primary-200 hover:rounded-full"
                }
                onClick={() => {
                  if (sub_menu) {
                    setSelectedSubmenu(sub_menu[0].route);
                  } else {
                    setSelectedSubmenu("");
                  }
                  setSelectedMenu(menu.route);
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
                    {menu.name}
                  </div>
                  {
                    /* icon dropdown */
                    sub_menu && (
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
            {selectedMenu === menu.route && sub_menu && (
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
          </>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
