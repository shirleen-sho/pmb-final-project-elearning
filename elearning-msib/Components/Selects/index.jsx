import React from "react";

const Selects = ({ list, size, description }) => {
  return (
      <select
        className={`px-2 py-2 last:text-base font-normal border border-solid border-gray-300 rounded transition ease-in-out inline-flex items-center text-xs shadow duration-500 m-2  focus:bg-white focus:border-black focus:outline-none capitalize ${size}`}
      >
        <option selected disabled hidden>{description}</option>
        {list.map((value, index) => (
          <option key={index}>{value.name}</option>
        ))}
      </select>
  );
};

export default Selects;
