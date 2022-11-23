import { useState } from "react";

export const useBasicProvider = () => {
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleShowNotification = () => {
    let timer = setTimeout(
      () =>
        setNotification({
          ...notification,
          show: false,
          type: "",
          message: "",
        }),
      4000
    );
    return () => clearTimeout(timer);
  };

  return {
    notification,
    setNotification,
    handleShowNotification,
  };
};
