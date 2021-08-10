import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...restProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restProps} />
      {label && (
        <label
          className={`form-input-label ${restProps.value.length && "shrink"}`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
