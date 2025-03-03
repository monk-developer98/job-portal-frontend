import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card.jsx'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar.jsx'

const Home = () => {
  const [selectedCategory , setSelectedCategory] = useState(null)
  const [jobs , setjobs] = useState([])
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json()).then(data=>{
      setjobs(data)
    })
  },[])

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filterItems = jobs?.filter((job)=> job?.jobTitle?.toLowerCase().includes(query.toLowerCase()))

  // Radio Filter

  const handleRadio = (e) => {
    setSelectedCategory(e.target.value)
  }

  // button filter 
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  // main function 

  const filteredData = (jobs , selected , query ) => {
    let filteredjobs = jobs
    if(query){
      filteredjobs=filterItems
    }
    // category filter 
    if(selected){
      filteredjobs =filteredjobs.filter(({jobLocation , maxPrice, experienceLevel , salaryType , employmentType ,postingDate})=>(
        jobLocation.toLowerCase() ===selected.toLowerCase() || 
        parseInt(maxPrice) <= parseInt(selected) || 
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }

    return filteredjobs?.map((data,index)=> <Card key={index} data={data} />)
  }

  const result  = filteredData(jobs , selectedCategory , query);
  // console.log("filter", filterItems);
  
  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/>
        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
          <div className='bg-white p-4 rounded '>
            <Sidebar handleInputChange={handleInputChange} handleClick={handleClick} />
          </div>
          <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result ={result} /></div>
          <div className='bg-white p-4 rounded '>Right</div>
        </div>
    </div>
  )
}

export default Home