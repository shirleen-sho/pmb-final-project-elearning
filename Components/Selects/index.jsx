import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selects = ({ list, size, description, handleChange, value }) => {
  const [selected, setSelected] = useState({
    label: "",
    value: "",
  });
  const [open, setOpen] = useState(false);

  return (
    <div className={`${size}`}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white px-4 py-2 text-xs flex items-center justify-between rounded border shadow capitalize ${size}`}
      >
        {selected ? selected.label : description}
        <BiChevronDown className={`${open && "rotate-180"}`} />
      </div>
      <div className="w-full relative">
        <ul
          className={`bg-white overflow-y-auto rounded shadow
        ${open ? `mt-2 mb-2 shadow border absolute z-50 ${size}` : "hidden"}`}
        >
          {list.map((item) => (
            <li
              key={item.label}
              className={`rounded m-2 px-2 py-2 text-xs hover:bg-gray-200 capitalize 
            ${item.label === selected.label && "bg-gray-200"}`}
              onClick={() => {
                if (item.label !== selected.label) {
                  setSelected(item);
                  setOpen(false);
                }
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selects;
