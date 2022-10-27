import React from "react";

const FormBanner = ({ children }) => {
  return (
    <div className="bg-primary-100 rounded-md px-5 py-3 font-semibold text-lg">
      {children}
    </div>
  );
};

export default FormBanner;
