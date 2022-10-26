import React, { useState } from "react";

const Notifikasi = ({ type, colorClass, description }) => {
  const [timer, setTimer] = useState(0);
  switch (type) {
    case "Success":
      colorClass =
        "text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800";
      description = "Success Alert !";
      break;
    case "Danger":
      colorClass =
        "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800";
      description = "Danger Alert !";
      break;
    case "Info":
      colorClass =
        "text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800";
      description = "Info Alert.";
      break;
    case "Warning":
      colorClass =
        "text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800";
      description = "Warning Alert !";
      break;
    default:
      "Dark";
      colorClass =
        "text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300";
      description = "Dark Alert";
      break;
  }
  return (
    <>
      <div className={`p-4 mb-4 text-sm w-96 ${colorClass}`}>
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-4 h-4 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="font-medium sem">{description + " "}</span>
        <div>Change a few things up and try submitting again.</div>
      </div>
    </>
  );
};

export default Notifikasi;
