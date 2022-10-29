import React from "react";

const Selects = ({ list, style, description }) => {
  return (
    <select
      className={`outline-none px-4 py-2 font-normal border rounded transition ease-in-out inline-flex items-center text-xs shadow capitalize ${style}`}
    >
      <option hidden defaultValue={description}>
        {description}
      </option>
      {list.map((value, index) => (
        <option key={index}>{value.name}</option>
      ))}
    </select>
  );
};

export default Selects;
