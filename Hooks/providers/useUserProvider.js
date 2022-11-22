import { useState } from "react";

export const useUserProvider = () => {
  const user = {
    name: "Shirleen",
    role: "Admin",
    photo: "profile.jpg",
  };

  const [user_info, setUserInfo] = useState(user);
  const [showLogout, setShowLogout] = useState(false);

  const [archive, setArchive] = useState({
    show: false,
    url: null,
  });

  const [unarchive, setUnarchive] = useState({
    show: false,
    url: null,
  });

  return {
    user_info,
    showLogout,
    setShowLogout,
    archive,
    setArchive,
    unarchive,
    setUnarchive,
  };
};
