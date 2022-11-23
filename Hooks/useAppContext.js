import React, { createContext, useContext } from "react";
import { useMenuProvider } from "./providers/useMenuProvider";
import { useUserProvider } from "./providers/useUserProvider";
import { useDummyProvider } from "./providers/useDummyProvider";
import { useBasicProvider } from "./providers/useBasicProvider";
import { useGedungProvider } from "./providers/data_master/useGedungProvider";
import { useRuanganProvider } from "./providers/data_master/useRuanganProvider";
import { useIdentitasSekolahProvider } from "./providers/data_master/useIdentitasSekolahProvider";
import { useTahunAkademikProvider } from "./providers/data_master/useTahunAkademikProvider";
import { useTingkatanProvider } from "./providers/data_master/useTingkatanProvider";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const menu = useMenuProvider();
  const user = useUserProvider();
  const dummy = useDummyProvider();

  const basic = useBasicProvider();

  // data master
  const gedung = useGedungProvider();
  const identitas_sekolah = useIdentitasSekolahProvider();
  const ruangan = useRuanganProvider();
  const tahun_akademik = useTahunAkademikProvider();
  const tingkatan = useTingkatanProvider();

  return (
    <appContext.Provider
      value={{
        menu,
        user,
        dummy,
        basic,
        gedung,
        identitas_sekolah,
        ruangan,
        tahun_akademik,
        tingkatan,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
