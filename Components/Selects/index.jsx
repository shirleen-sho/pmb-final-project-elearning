import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selects = ({ list, size, description , handleChange ,value}) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className={`${size}`}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white px-4 py-2 text-xs flex items-center justify-between rounded border shadow capitalize`}
      >
        {selected ? selected : description}
        <BiChevronDown className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white overflow-y-auto rounded shadow 
        ${size} 
        ${open ? "mt-3 mb-2 border z-10 absolute " : "max-h-0"}`}
      >
        {list.map((value) => (
          <li
            key={value.name}
            className={`m-2 rounded px-4 py-2 text-xs hover:bg-gray-200 capitalize 
            ${value.name === selected && "bg-gray-200"}`}
            onClick={() => {
              if (value.name !== selected) {
                setSelected(value.name);
                setOpen(false);
              }
            }}
            value={value.name}
          >
            {value.name}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Selects;