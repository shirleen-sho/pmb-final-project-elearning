import React from "react";
import FormLabel from "../FormLabel";

const FormRow = ({ label, span, children }) => {
  return (
    <div className="grid grid-cols-4 border-b gap-5 py-5">
      <FormLabel className="col-start-1 col-span-1">{label}</FormLabel>
      <div className={`col-start-2 col-span-${span}`}>{children}</div>
    </div>
  );
};

export default FormRow;
