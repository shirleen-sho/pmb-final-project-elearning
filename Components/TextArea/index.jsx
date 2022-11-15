import React from "react";

const TextArea = ({ placeholder, style, value, setValue, disabled }) => {
  // const[value , setValue] = useState('')
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  switch (disabled) {
    case true:
      style = "bg-gray-200";
      placeholder = null;
      break;
  }
  return (
    <>
      <textarea
        value={value}
        disabled={disabled}
        onChange={handleValue}
        placeholder={placeholder}
        className={`w-full border shadow bg-white h-fit px-4 py-3 text-xs rounded outline-none capitalize inline-flex ${style}`}
      />
    </>
  );
};

export default TextArea;
