import React, { createContext, useContext } from "react";
import { useMenuProvider } from "./providers/useMenuProvider";
import { useUserProvider } from "./providers/useUserProvider";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const menu = useMenuProvider();
  const user = useUserProvider();
  return (
    <appContext.Provider value={{ menu, user }}>{children}</appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
