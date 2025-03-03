import React from 'react'
import InputField from '../components/InputField'

const WorkExpirience = ({handleInputChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>

    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="location"
          value=""
          id="location"
          onChange={handleInputChange}
        />
        <span className="checkmark"></span> Any experience
      </label>

      <InputField
        handleInputChange={handleInputChange}
        value="Intership"
        title="Intership"
        name="location"
      />
      <InputField
        handleInputChange={handleInputChange}
        value="Work remotely"
        title="Work remotely"
        name="location"
      />
    </div>
  </div>
  )
}

export default WorkExpirience