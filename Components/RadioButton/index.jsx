import React from "react";

const RadioButton = () => {
  return (
    <>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full border-gray-400 bg-white border-2 appearance-none cursor-pointer"
        />
        <div
          for="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
        ></div>
      </div>
    </>
  );
};

export default RadioButton;
