// import React, { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";

// const Selects = ({ list, description ,style}) => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       <select
//         className={`outline-none px-4 py-2 font-normal border rounded transition ease-in-out inline-flex items-center text-xs shadow capitalize ${style}`}className={`outline-none px-4 py-2 font-normal border rounded transition ease-in-out inline-flex items-center text-xs shadow capitalize ${style}`}
//       >
//         <option hidden defaultValue={description}>
//           {description}
//         </option>
//         {list.map((value, index) => (
//           <option key={index}>{value.name}</option>
//         ))}
//       </select>
//         <div>
//           <button type="button" id="menu-button" className={`outline-none px-4 py-2 font-normal border rounded transition ease-in-out inline-flex items-center text-xs shadow capitalize ${style} justify-between`} onClick={()=>setIsOpen(!isOpen)}>
//             {description} <FaAngleDown className="-mr-1 ml-2 h-5 w-5" />
//           </button>
//         </div>
//         {isOpen? <div className={`mt-3 mb-2 rounded shadow outline-none ${style}`}>
//           <div className="py-1" role="none">
//             {list.map((value, index) => (
//               <button type="sumbit" className={`block px-4 py-2 text-sm hover:bg-blue-400 hover:text-gray-900 w-full text-left capitalize`} key={index}>{value.name}</button>
//             ))}
//           </div>
//         </div>: null}

//     </>
//   );
// };

// export default Selects;

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selects = ({ list, style, description }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white px-4 py-2 text-xs flex items-center justify-between rounded border shadow capitalize ${style} ${
          !selected && "text-gray-700"
        }`}
      >
        {selected? selected: description}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white overflow-y-auto rounded shadow ${style} ${
          open ? "mt-3 mb-2" : "max-h-0"
        } `}
      >
        {list.map((value) => (
          <li
            key={value.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white capitalize 
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
