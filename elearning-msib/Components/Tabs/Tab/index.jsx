import React, { useState } from "react";

const Tab = ({ children, selected }) => {
  return (
    <div className={selected ? "border-b-2 px-5 py-2" : "px-5 py-2"}>
      {children}
    </div>
  );
};

export default Tab;
