import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExpirience from './WorkExpirience'
import EmployementType from './EmployementType'

const Sidebar = ({handleInputChange , handleClick}) => {
  return (
    <div className='space-y-4'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleInputChange={handleInputChange} />
        <Salary handleInputChange={handleInputChange} handleClick={handleClick} />
        <JobPostingData handleInputChange={handleInputChange} />
        <WorkExpirience handleInputChange={handleInputChange} />
        <EmployementType handleInputChange={handleInputChange} />
    </div>
  )
}

export default Sidebar