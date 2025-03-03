import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleInputChange, handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            <Button onClickHandler={handleClick} value="" title="Hourly" />
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
        </div>

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
          value={30}
          title="< 30000k"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value={50}
          title="< 50000k"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value={80}
          title="< 80000k"
          name="location"
        />
        <InputField
          handleInputChange={handleInputChange}
          value={100}
          title="< 100000k"
          name="location"
        />
        </div>
    </div>
  )
}

export default Salary