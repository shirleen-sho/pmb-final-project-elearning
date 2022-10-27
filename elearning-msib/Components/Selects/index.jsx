import React from "react";

const Selects = ({ list, size, description }) => {
  return (
      <select
        className={`border-gray-200 bg-white last:text-base outline-none px-3 py-1.5 font-normal border rounded transition ease-in-out inline-flex items-center text-lg shadow capitalize ${size}`}
      >
        <option hidden defaultValue={description}>{description}</option>
        {list.map((value, index) => (
          <option key={index}>{value.name}</option>
        ))}
      </select>
  );
};

export default Selects;


