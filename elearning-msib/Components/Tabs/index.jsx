import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import TabHead from "./TabHead";
import TabBody from "./TabBody";
import Link from "next/link";
import { useRouter } from "next/router";

const Tabs = ({ list, pathName }) => {
  const router = useRouter();
  const { query: { tab } = {} } = router;
  const [tabList, setTabList] = useState(list);

  const handleClickTab = (id) => {
    const updatedList = tabList.map((i) => {
      return i.id === id ? { ...i, selected: true } : { ...i, selected: false };
    });
    setTabList(updatedList);
  };

  useEffect(() => {
    // untuk memastikan content yang terbuka sesuai dengan tab pada query path
    if (tab) {
      const updatedList = tabList.map((i) => {
        return i.id === parseInt(tab)
          ? { ...i, selected: true }
          : { ...i, selected: false };
      });
      setTabList(updatedList);
    }
  }, [tab]);

  return (
    <div className="w-full h-full text-sm relative">
      <TabHead>
        {tabList.map((i) => {
          return (
            <Tab selected={i.selected}>
              <Link
                href={{
                  pathname: pathName,
                  query: { tab: i.id },
                }}
              >
                <a onClick={() => handleClickTab(i.id)}>{i.name}</a>
              </Link>
            </Tab>
          );
        })}
      </TabHead>
      <TabBody>
        {tab === undefined && <>{tabList[0].content}</>}
        {tabList.map((i) => {
          return parseInt(tab) === i.id && <>{i.content}</>;
        })}
      </TabBody>
    </div>
  );
};

export default Tabs;
