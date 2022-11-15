import React from "react";

const RadioButton = () => {
  return (
    <>
      <label
        for="toggleFour"
        class="flex cursor-pointer select-none items-center"
      >
        <div class="relative">
          <input type="checkbox" id="toggleFour" class="sr-only" />
          <div class="box bg-blue-800 block h-8 w-14 rounded-full"></div>
          <div class="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"></div>
        </div>
      </label>
    </>
  );
};

export default RadioButton;
