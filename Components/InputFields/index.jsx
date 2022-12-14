import React, { useState } from "react";

const InputFields = ({
  type,
  size,
  placeholder,
  disabled,
  style,
  label,
  value,
  setValue,
}) => {
  // const[value , setValue] = useState('')

  switch (type) {
    case "date":
      style = "uppercase";
      break;
    default:
      style = "capitalize";
      break;
  }

  switch (disabled) {
    case true:
      style = "bg-gray-200";
      placeholder = null;
      break;
  }

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e)}
        className={`border border-gray-200 bg-white shadow rounded px-4 text-xs py-2 outline-none ${size} ${style}`}
        placeholder={placeholder}
        label={label || placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default InputFields;
