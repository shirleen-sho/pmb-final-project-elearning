import React from "react";
import Link from "next/link";

const Button = ({ type, classColor, style, children, link, handleClick,title }) => {
  switch (type) {
    case "secondary":
      classColor = "bg-secondary-base text-white hover:bg-secondary-hover py-2 px-4 text-xs rounded";
      break;
    case "light":
      classColor =
        "bg-white border border-light-base text-light-base hover:border-light-hover  hover:text-light-hover shadow py-2 px-4 text-xs rounded";
      break;
    case "dark":
      classColor = " bg-dark-base text-white hover:bg-dark-hover shadow py-2 px-4 text-xs rounded";
      break;
    case "warning":
      classColor = "bg-warning-base text-white hover:bg-warning-hover shadow py-2 px-4 text-xs rounded";
      break;
    case "danger":
      classColor = "bg-danger-base text-white hover:bg-danger-hover shadow py-2 px-4 text-xs rounded";
      break;
    case "success":
      classColor = "bg-success-base text-white hover:bg-success-hover shadow py-2 px-4 text-xs rounded";
      break;
    case "info":
      classColor = "bg-[#00B5EE] text-white hover:bg-[#1392B8] shadow py-2 px-4 text-xs rounded";
      break;
    case "link":
      classColor = "hover:underline text-link text-xs rounded py-2 px-4";
      break;
    case "icon":
      classColor = " hover:bg-gray-300 outline-none p-2 rounded-full ";
      break;
    default:
      classColor = "bg-primary-300 outline-none text-white hover:bg-primary-600 shadow py-2 px-4 text-xs rounded";
      break;
  }
  return (
    <Link href={link || ""} legacyBehavior>
      <a>
        <button
          type={type}
          className={`inline-flex justify-center items-center leading-4 tracking-widest uppercase transition ease-in-out duration-500 font-semibold ${classColor} ${style}`}
          onClick={handleClick}
          title={title}
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
