import React from "react";

const InputField = ({ handleInputChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        id="location"
        onChange={handleInputChange}
      />
      <span className="checkmark"></span> {title}
    </label>
  );
};

export default InputField;
