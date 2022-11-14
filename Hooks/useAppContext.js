import React, { createContext, useContext } from "react";
import { useMenuProvider } from "./providers/useMenuProvider";
import { useUserProvider } from "./providers/useUserProvider";
import { useDummyProvider } from "./providers/useDummyProvider";
import { useTahunAkademikProvider } from "./providers/data_master/useTahunAkademikProvider";
import { useTingkatanProvider } from "./providers/data_master/useTingkatanProvider";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const menu = useMenuProvider();
  const user = useUserProvider();
  const dummy = useDummyProvider();

  // data master
  const tahun_akademik = useTahunAkademikProvider();
  const tingkatan = useTingkatanProvider();

  return (
    <appContext.Provider
      value={{ menu, user, dummy, tahun_akademik, tingkatan }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
