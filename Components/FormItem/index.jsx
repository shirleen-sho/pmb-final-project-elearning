import React from "react";

const FormItem = ({
  label,
  labelType,
  labelWidth,
  labelNote,
  children,
  formDirection,
}) => {
  let labelStyle;
  switch (labelType) {
    case "banner":
      labelStyle =
        "font-semibold text-lg bg-primary-100 rounded-md px-5 py-3 w-full";
      break;
    case "title":
      labelStyle = "font-semibold text-5xl rounded-md w-full";
      break;
    case "label-sm":
      labelStyle = "font-semibold text-xs leading-5";
      break;
    case "label-md":
      labelStyle = "font-bold text-base";
      break;
    case "read-only":
      labelStyle = "text-xs bg-gray-100 rounded-md px-5 py-3 w-full";
      break;
    default:
      labelStyle = "";
      break;
  }

  return (
    <div
      className={`flex ${
        formDirection === "col" ? "flex-col gap-1.5" : "flex-row gap-5"
      }`}
    >
      {labelNote ? (
        <div className={`flex flex-col gap-1 ${labelWidth}`}>
          <div className={`${labelStyle}`}>{label}</div>
          <div className="text-[8px] italic ">{labelNote}</div>
        </div>
      ) : (
        <div className={`${labelStyle} ${labelWidth}`}>{label}</div>
      )}
      {children && <div className="w-full">{children}</div>}
    </div>
  );
};

export default FormItem;
