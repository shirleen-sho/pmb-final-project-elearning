import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../../Hooks/useAppContext";

const Header = () => {
  const { menu, user } = useAppContext();
  const { setSelectedMenu, setSelectedSubmenu, currentMenu } = menu;
  const { user_info } = user;

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleToggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  return (
    <div className="flex flex-row justify-between items-center h-[120px] border-b border-neutral-2">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-3xl">{currentMenu.title}</div>
        {currentMenu.detail && (
          <div className="font-medium text-sm">{currentMenu.detail}</div>
        )}
      </div>
      <div id="icons" className="flex flex-row items-center gap-4">
        <div
          id="icon-notification"
          className="bg-white p-4 rounded-full text-neutral-3 hover:cursor-pointer hover:text-primary-400 hover:font-bold"
        >
          <div className="relative flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <span className="bg-primary-400 h-2 w-2 rounded-full absolute -right-1 -top-1"></span>
          </div>
        </div>

        <Link href="/settings">
          <a
            id="icon-settings"
            className="bg-white p-4 rounded-full text-neutral-3 hover:cursor-pointer hover:text-primary-400"
            onClick={() => {
              setSelectedMenu("/settings");
              setSelectedSubmenu("");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </Link>
        <div className="flex flex-col items-end relative">
          <button
            className="flex flex-row items-center gap-4"
            onClick={handleToggleProfileDropdown}
          >
            <div className="flex flex-col gap-1 justify-center items-end px-4">
              <div className="font-semibold text-sm text-neutral-4">
                {user_info.name}
              </div>
              <div className="font-normal text-sm text-neutral-3">
                {user_info.role}
              </div>
            </div>
            {user_info.photo ? (
              <img
                src={`/images/${user_info.photo}`}
                className="object-cover h-14 w-14 rounded-full"
              />
            ) : (
              // image placeholder
              <div className="overflow-hidden relative w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-600">
                <svg
                  className="absolute -left-1 w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </button>
          {showProfileDropdown && (
            <div
              className="absolute top-20 z-20 w-[260px] bg-white
              divide-y divide-gray-200 rounded-lg drop-shadow-xl"
              id="user-dropdown"
            >
              <div className="px-4 py-4 text-2xs font-semibold cursor-default">
                Signed in as {user_info.name}
              </div>
              <div className="py-2.5 flex flex-col cursor-default">
                <Link href="/profile">
                  <a
                    className="px-4 py-2 text-xs font-medium hover:text-primary-900"
                    onClick={() => {
                      setSelectedMenu("/profile");
                      setSelectedSubmenu("");
                    }}
                  >
                    Profile
                  </a>
                </Link>
                <Link href="/password">
                  <a
                    className="px-4 py-2 text-2xs hover:text-primary-900"
                    onClick={() => {
                      setSelectedMenu("/password");
                      setSelectedSubmenu("");
                    }}
                  >
                    Password
                  </a>
                </Link>
              </div>
              <div className="py-2.5 flex flex-col">
                <Link href="/settings">
                  <a
                    className="px-4 py-2 text-2xs hover:text-primary-900"
                    onClick={() => {
                      setSelectedMenu("/settings");
                      setSelectedSubmenu("");
                    }}
                  >
                    Settings
                  </a>
                </Link>
                <Link href="/logout">
                  <a
                    className="px-4 py-2 text-2xs hover:text-primary-900"
                    onClick={() => {
                      setSelectedMenu("/logout");
                      setSelectedSubmenu("");
                    }}
                  >
                    Log Out
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
