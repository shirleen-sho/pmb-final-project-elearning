import React from "react";

const Button = ({ type = "submit", classColor = "", size,processing, children }) => {
  return (
    <button
      type={type}
      size={size}
      className={
        `inline-flex items-center px-4 py-2 rounded text-xs uppercase transition ease-in-out duration-500
        ${processing} ` + classColor
      }
      disabled={processing}
    >
      {children}
    </button>
  );
};

export default Button;
