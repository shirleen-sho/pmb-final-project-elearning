import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const Notifikasi = ({ type, colorClass, title,description }) => {
  const [timer, setTimer] = useState(0);
  switch (type) {
    case "Success":
      colorClass =
        "text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800";
      title = "Success Alert !";
      break;
    case "Danger":
      colorClass =
        "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800";
      title = "Danger Alert !";
      break;
    case "Info":
      colorClass =
        "text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800";
      title = "Info Alert.";
      break;
    case "Warning":
      colorClass =
        "text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800";
      title = "Warning Alert !";
      break;
    default:
      "Dark";
      colorClass =
        "text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300";
      title = "Dark Alert";
      break;
  }
  return (
    <>
      <div className="absolute top-10 right-10">
        <div className={`p-4 mb-4 text-sm w-96 ${colorClass}`}>
          <div className="inline-flex">
            <FaInfoCircle className="w-4 h-4 mr-1" />
            <span className="font-semibold">{title}</span>
          </div>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
};
export default Notifikasi;
