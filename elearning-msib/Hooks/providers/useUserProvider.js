import { useState } from "react";

export const useUserProvider = () => {
  const user = {
    name: "Shirleen",
    role: "Admin",
  };

  const [user_info, setUserInfo] = useState(user);

  return {
    user_info,
  };
};
