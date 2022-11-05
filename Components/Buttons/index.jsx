import React from "react";
import Link from "next/link";

const Button = ({ type, classColor, style, children, link, handleClick }) => {
  switch (type) {
    case "secondary":
      classColor = "bg-[#9F9F9F] text-white hover:bg-[#7C7C7C] py-2 px-4 text-xs rounded";
      break;
    case "light":
      classColor =
        "bg-white border border-[#757AFF] text-[#757AFF] hover:border-[#889AF9] shadow py-2 px-4 text-xs rounded";
      break;
    case "dark":
      classColor = " bg-slate-600 text-white hover:bg-slate-900 shadow py-2 px-4 text-xs rounded";
      break;
    case "warning":
      classColor = "bg-[#F6C23E] text-white hover:bg-[#F4B412] shadow py-2 px-4 text-xs rounded";
      break;
    case "danger":
      classColor = "bg-[#E74A3B] text-white hover:bg-[#8A1E14] shadow py-2 px-4 text-xs rounded";
      break;
    case "success":
      classColor = "bg-[#1CC88A] text-white hover:bg-[#159465] shadow py-2 px-4 text-xs rounded";
      break;
    case "info":
      classColor = "bg-[#00B5EE] text-white hover:bg-[#1392B8] shadow py-2 px-4 text-xs rounded";
      break;
    case "link":
      classColor = "hover:underline text-[#252525] text-xs rounded";
      break;
    case "icon":
      classColor = " hover:bg-gray-300 outline-none p-2 rounded-full ";
      break;
    default:
      classColor = "bg-primary-300 outline-none text-white hover:bg-[#757AFF] shadow py-2 px-4 text-xs rounded";
      break;
  }
  return (
    <Link href={link || ""} legacyBehavior>
      <a>
        <button
          type={type}
          className={`inline-flex justify-center items-center leading-4 tracking-widest uppercase transition ease-in-out duration-500 font-semibold mx-2 ${classColor} ${style}`}
          onClick={handleClick}
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
