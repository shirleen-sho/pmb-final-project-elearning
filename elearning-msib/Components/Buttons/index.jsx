import React, { useState } from "react";

const Buttons = ({type = "submit", classColor = "", size, processing, children,}) => {

  return (
    <button
      type={type}
      className={
        `inline-flex items-center rounded text-xs shadow uppercase transition ease-in-out duration-500 m-2
        ${processing} ${size} ` + classColor 
      }
      disabled={processing}
    >
      {children}
    </button>
  );
};

export default Buttons;
