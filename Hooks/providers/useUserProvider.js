import { useState } from "react";

export const useUserProvider = () => {
  const user = {
    name: "Shirleen",
    role: "Admin",
    photo: "profile.jpg",
  };

  const [user_info, setUserInfo] = useState(user);
  const [showLogout, setShowLogout] = useState(false);

  return {
    user_info,
    showLogout,
    setShowLogout,
  };
};
