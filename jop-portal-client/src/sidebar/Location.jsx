import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleInputChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            value=""
            id="location"
            onChange={handleInputChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          handleInputChange={handleInputChange}
          value="london"
          title="London"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value="seattle"
          title="Seattle"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value="madrid"
          title="Madrid"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value="boston"
          title="Boston"
          name="location"
        />
      </div>
    </div>
  );
};

export default Location;
