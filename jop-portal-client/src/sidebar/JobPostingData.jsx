import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleInputChange}) => {
    const  now = new Date()
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const twentyFourDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDate = thirtyDaysAgo.toISOString().slice(0, 10);

    console.log("thirtyDate",thirtyDate);
    
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date Of Posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            value=""
            id="location"
            onChange={handleInputChange}
          />
          <span className="checkmark"></span> All Time
        </label>

        <InputField
          handleInputChange={handleInputChange}
          value={twentyFourDate}
          title="Last 24 hours"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value={sevenDate}
          title="Last 7 days"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value={thirtyDate}
          title="Last 30 days"
          name="location"
        />
      </div>
    </div>
  )
}

export default JobPostingData