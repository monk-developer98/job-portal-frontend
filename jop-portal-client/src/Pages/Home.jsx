import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card.jsx";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setjobs(data);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = jobs?.filter((job) =>
    job?.jobTitle?.toLowerCase().includes(query.toLowerCase())
  );

  // Radio Filter

  const handleRadio = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function

  const filteredData = (jobs, selected, query) => {
    let filteredjobs = jobs;
    if (query) {
      filteredjobs = filterItems;
    }
    // category filter
    if (selected) {
      filteredjobs = filteredjobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredjobs = filteredjobs?.slice(startIndex, endIndex);
    return filteredjobs?.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);
  // console.log("filter", filterItems);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded ">
          <Sidebar handleInputChange={handleRadio} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result?.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result?.length} Jobs</h3>
              <p>No Data Found</p>
            </>
          )}
          {result?.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Previus
              </button>
              <span>
                {currentPage} of {Math.ceil(filterItems?.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filterItems.length / itemsPerPage)
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded ">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
