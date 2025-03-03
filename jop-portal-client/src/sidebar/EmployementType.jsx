import React from 'react'
import InputField from '../components/InputField'

const EmployementType = ({handleInputChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of employement</h4>

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
          value="Full-time"
          title="Full-time"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value="Temporary"
          title="Temporary"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value="Part-time"
          title="Part-time"
          name="location"
        />
      </div>
    </div>
  )
}

export default EmployementType