import React from "react";

const Buttons = ({type = "submit", classColor = "", size, processing, children, ...props}) => {
  return (
    <button
      type={type}
      size={size}
      className={
        `inline-flex items-center px-4 py-2 m-2 rounded text-xs uppercase transition ease-in-out duration-500
        ${processing} ` + classColor 
      }
      disabled={processing}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
