import React from 'react'
import { useForm } from 'react-hook-form'

const Createjob = () => {
    const {register, handleSubmit , formState:{errors} } = useForm()

    const onSubmit = (data) => {}
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Title</label>
                        <input type='text' defaultValue={"Web Developer"} className='block  w-full flex-1 border-1 bg-white  py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 
                        focus:outline-none sm:text-sm sm:leading-6 ' {...register('jobTitle')} />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Name</label>
                        <input type='text' placeholder='Ex: microsoft' className='create-job-input' {...register('companyName')} />
                    </div>
                </div>

                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Min Salary</label>
                        <input type='number' placeholder='$20k' className='block  w-full flex-1 border-1 bg-white  py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 
                        focus:outline-none sm:text-sm sm:leading-6 ' {...register('minPrice')} />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Max Salary</label>
                        <input type='number' placeholder='$100k' className='create-job-input' {...register('maxPrice')} />
                    </div>
                </div>


                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Salary Type</label>
                       <select {...register('salaryType')} className='create-job-input'>
                            <option value=''>choose your salary</option>
                            <option value='hourly'>Hourly</option>
                            <option value='Monthly'>Monthly</option>
                            <option value='Yearly'>Yearly</option>
                       </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Location</label>
                        <input type='text' placeholder='Ex: new york' className='create-job-input' {...register('jobLocation')} />
                    </div>
                </div>
                <div className='create-job-flex'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Posting Date</label>
                        <input type='date'  className='create-job-input' {...register('postingDate')} />
                    </div>

                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Experience Level</label>
                       <select {...register('experienceLevel')} className='create-job-input'>
                            <option value=''>Select Your Experience Level</option>
                            <option value=''>No Experience</option>
                            <option value='Intership'>Intership</option>
                            <option value='Work remotely'>Work remotely</option>
                       </select>
                    </div>
                </div>

                <input type='submit' className='block mt-12  bg-blue text-white font-semibold px-8 py-2 rounded-sm  cursor-pointer' />
            </form>
        </div>
    </div>
  )
}

export default Createjob