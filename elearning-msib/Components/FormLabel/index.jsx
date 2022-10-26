import React from "react";

const FormLabel = ({ rowSpan, className, children }) => {
  if (rowSpan === "" || rowSpan === undefined) {
    rowSpan = 1; // row-span-${rowSpan}
  }
  return (
    <div className={`font-semibold text-[13px] leading-5 ${className}`}>
      {children}
    </div>
  );
};

export default FormLabel;
