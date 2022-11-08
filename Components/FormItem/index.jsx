import React from "react";

const FormItem = ({ label, labelType, labelWidth, children }) => {
  switch (labelType) {
    case "banner":
      labelType =
        "font-semibold text-lg bg-primary-100 rounded-md px-5 py-3 w-full";
      break;
    case "label-sm":
      labelType = "font-semibold text-xs leading-5";
      break;
    case "label-md":
      labelType = "font-bold text-base";
      break;
    case "read-only":
      labelType = "text-xs bg-gray-100 rounded-md px-5 py-3 w-full";
      break;
    default:
      labelType = "";
      break;
  }

  return (
    <div className={`flex flex-row gap-5`}>
      <div className={`${labelType} ${labelWidth}`}>{label}</div>
      {children && <div className="w-full">{children}</div>}
    </div>
  );
};

export default FormItem;
