import React from "react";

const Buttons = ({type = "submit", classColor = "", size, processing, children, ...props}) => {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center rounded text-xs shadow uppercase transition ease-in-out duration-500 m-2
        ${processing} ${size} ` + classColor 
      }
      disabled={processing}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
