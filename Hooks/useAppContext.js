import React, { createContext, useContext } from "react";
import { useMenuProvider } from "./providers/useMenuProvider";
import { useUserProvider } from "./providers/useUserProvider";
import { useDummyProvider } from "./providers/useDummyProvider";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const menu = useMenuProvider();
  const user = useUserProvider();
  const dummy = useDummyProvider();
  return (
    <appContext.Provider value={{ menu, user, dummy }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
