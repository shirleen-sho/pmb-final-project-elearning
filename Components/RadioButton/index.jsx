import React from "react";

const RadioButton = () => {
  return (
    <>
      <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="toggle-checkbox absolute block w-6 h-6 rounded-full border-gray-400 bg-white border-2 appearance-none cursor-pointer"
        />
        <label
          for="toggle"
          class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
        ></label>
      </div>
    </>
  );
};

export default RadioButton;
