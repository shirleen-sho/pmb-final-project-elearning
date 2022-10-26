import React from "react";
import Link from "next/link";

const Button = ({type ,classColor, size, children, link}) => {
  switch (size) {
    case "btn-lg":
      size = "py-3 px-6 text-lg"
      break;
    default:
      size = "py-2 px-4 text-xs"
      break;
  }

  switch (type) {
    case "primary":
      classColor = "bg-[#889AF9] outline-none text-white hover:bg-[#757AFF]";
      break;
    case "secondary":
      classColor = "bg-[#9F9F9F] text-white hover:bg-[#7C7C7C]";
      break;
    case "light":
      classColor = "bg-white border border-[#757AFF] text-[#757AFF] hover:border-[#889AF9]";
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
    default:
      classColor = ""
      break;
  }
  return (
    <button
      type={type}
      className={`inline-flex items-center rounded text-bases shadow uppercase transition ease-in-out duration-500 font-semibold ${size} ${classColor} `}
    >
      <Link href={link || ""}>
        <a>{children}</a>
      </Link>
    </button>
  );
};

export default Button;
