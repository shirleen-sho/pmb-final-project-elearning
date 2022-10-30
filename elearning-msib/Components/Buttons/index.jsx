import React from "react";
import Link from "next/link";

const Button = ({ type, classColor, variant, style, children, link, handleClick }) => {
  switch (variant) {
    case "icon":
      style = "p-2 rounded-full";
      break;
    default:
      style = "py-2 px-4 text-xs rounded ";
      break;
  }
  switch (type) {
    case "secondary":
      classColor = "bg-[#9F9F9F] text-white hover:bg-[#7C7C7C]";
      break;
    case "light":
      classColor =
        "bg-white border border-[#757AFF] text-[#757AFF] hover:border-[#889AF9]";
      break;
    case "dark":
      classColor = " bg-slate-600 text-white hover:bg-slate-900";
      break;
    case "warning":
      classColor = "bg-[#F6C23E] text-white hover:bg-[#F4B412]";
      break;
    case "danger":
      classColor = "bg-[#E74A3B] text-white hover:bg-[#8A1E14]";
      break;
    case "success":
      classColor = "bg-[#1CC88A] text-white hover:bg-[#159465]";
      break;
    case "info":
      classColor = "bg-[#00B5EE] text-white hover:bg-[#1392B8]";
      break;
    case "link":
      classColor = "hover:underline text-[#252525]";
      break;
    case "icon":
      classColor = "bg-transparent hover:bg-gray-300";
      break;
    default:
      classColor = "bg-[#889AF9] outline-none text-white hover:bg-[#757AFF]";
      break;
  }
  return (
    <Link href={link || ""}>
      <a>
        <button
          type={type}
          className={`inline-flex items-center shadow uppercase transition ease-in-out duration-500 font-semibold ${style} ${classColor}`}
          onClick={handleClick}
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;
