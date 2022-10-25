import React from "react";
import Link from "next/link"

const Buttons = ({type = "submit", classColor = "", size, processing, children, link=""}) => {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center rounded text-bases shadow uppercase transition ease-in-out duration-500 font-semibold
        ${processing} ${size} ${classColor } `
      }
    >
        <Link href={link || ""}>
          <a>{children}</a>
        </Link>
    </button>
  );
};

export default Buttons;
