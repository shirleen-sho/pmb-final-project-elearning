import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selects = ({ list, size, description }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white px-4 py-2 text-xs flex items-center justify-between rounded border shadow capitalize ${size}`}
      >
        {selected ? selected : description}
        <BiChevronDown className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white overflow-y-auto rounded shadow
        ${size} 
        ${open ? "mt-3 mb-2" : "max-h-0"}`}
      >
        {list.map((value) => (
          <li
            key={value.name}
            className={`px-4 py-2 text-sm hover:bg-gray-400 hover:text-white capitalize 
            ${value.name === selected && "bg-sky-600 text-white"}`}
            onClick={() => {
              if (value.name !== selected) {
                setSelected(value.name);
                setOpen(false);
              }
            }}
          >
            {value.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Selects;
