import React from 'react'

const Location = ({handleInputChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='location' value='all' id='location' onChange={handleInputChange} />
                <span className='checkmark'></span> All
            </label>
        </div>
    </div>
  )
}

export default Location