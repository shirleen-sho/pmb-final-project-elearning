import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../Hooks/useAppContext";

const Tabs = ({ list, pathName, children }) => {
  const { menu } = useAppContext();
  const { selectedMenu, selectedSubmenu, selectedActionmenu } = menu;

  const location = useRouter();
  const path = location.asPath;

  return (
    <div className="w-full text-sm relative">
      {/* Tab Head */}
      <div className="flex text-gray-400 font-medium w-fit">
        {list.map((i) => {
          let selected = "";
          if (path === `${pathName}${i.tab}`) {
            selected = "border-b-2";
          }
          return (
            <div className={`px-5 py-2 ${selected}`} key={"tab" + i.tab}>
              <Link href={`${pathName}${i.tab}`}>{i.name}</Link>
            </div>
          );
        })}
      </div>
      {/* Tab Body */}
      <div className=" py-5">{children}</div>
    </div>
  );
};

export default Tabs;
