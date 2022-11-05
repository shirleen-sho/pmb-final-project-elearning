import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../../Hooks/useAppContext";
import { HiOutlineBell, HiOutlineCog } from "react-icons/hi";
import Image from "next/image";

const Header = () => {
  const { menu, user } = useAppContext();
  const { header } = menu;
  const { user_info } = user;

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const handleToggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    console.log("Log Out !");
  };

  return (
    <div className="flex flex-row justify-between items-center h-[120px] border-b border-neutral-2">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-3xl">{header.title}</div>
        {header.detail && (
          <div className="font-medium text-sm">{header.detail}</div>
        )}
      </div>
      <div id="icons" className="flex flex-row items-center gap-4">
        <div
          id="icon-notification"
          className="bg-white p-4 rounded-full text-neutral-3 hover:cursor-pointer hover:text-primary-400 hover:font-bold"
        >
          <div className="relative flex flex-row">
            <HiOutlineBell size={24} />
            <span className="bg-primary-400 h-2 w-2 rounded-full absolute -right-1 -top-1"></span>
          </div>
        </div>

        <Link href="/settings/level" legacyBehavior>
          <a
            id="icon-settings"
            className="bg-white p-4 rounded-full text-neutral-3 hover:cursor-pointer hover:text-primary-400"
          >
            <HiOutlineCog size={24} />
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
              <div className="h-14 w-14 relative">
                <Image
                  src={`/images/${user_info.photo}`}
                  className="object-cover rounded-full"
                  alt="profile picture"
                  fill
                />
              </div>
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
                <Link href="/profile" legacyBehavior>
                  <a className="px-4 py-2 text-xs font-medium hover:text-primary-900">
                    Profile
                  </a>
                </Link>
                <Link href="/password" legacyBehavior>
                  <a className="px-4 py-2 text-2xs hover:text-primary-900">
                    Password
                  </a>
                </Link>
              </div>
              <div className="py-2.5 flex flex-col">
                <Link href="/settings/level" legacyBehavior>
                  <a className="px-4 py-2 text-2xs hover:text-primary-900">
                    Settings
                  </a>
                </Link>
                <a
                  className="px-4 py-2 text-2xs hover:text-primary-900 cursor-pointer"
                  onClick={(e) => handleLogOut(e)}
                >
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
