import React, { useState } from 'react'
import jobs from '../data/data'
import { Link } from 'react-router-dom'


export const JobList = () => {
  console.log(jobs)
  const [jobData, setJobData] = useState(jobs)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchByLocation, setSearchByLocation] = useState("")
  const searchTermValue = searchTerm.toLowerCase(); //realizamos la conversion del valor a minuscula

  const locationSearchHandler  =() => {
    const filteredData = jobs.filter( (job)=>job.location.toLowerCase().includes(searchByLocation.toLowerCase()) )
    setJobData(filteredData)
    console.log(filteredData)
  }

  const filtterJobData = (e) => {
    const filterValuee = e.target.value;
    console.log('this is the filter value ' + filterValuee)

    if(filterValuee === 'full-time'){
      const filterData = jobs.filter((job) => job.contract === "Full Time")
      setJobData(filterData)
    } else if(filterValuee === 'part-time'){
      const filterData = jobs.filter((job) => job.contract === "Part Time")
      setJobData(filterData)
    }  else if(filterValuee === 'freelance'){
      const filterData = jobs.filter((job) => job.contract === "Freelance")
      setJobData(filterData)
    } else if(filterValuee === ''){
      setJobData(jobs)
    }
  }

  return (
    <section className='job_list'>
      <div className="container">
        <div className="job_list_wrapper">
          <div className="search_panel">
            <div className='seach_paner-01'>
              <input type="text"
                     placeholder='Search for Title'
                     value={searchTerm}
                     onChange={(e)=>setSearchTerm(e.target.value) }
              />
            </div>
            <div className='seach_paner-02'>
              <input type="text"
                     placeholder='Search for Location'
                     value={searchByLocation}
                     onChange={(e)=>setSearchByLocation(e.target.value) }
              />
              <button onClick={locationSearchHandler}>Search</button>
            </div>
            <div className='seach_paner-03'>

             <select name="" id="" onChange={ filtterJobData }>
              <option value="" >Choose an Option</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
             </select>

            </div>
          </div>
         <div className='jobs_wrapper'>
            {
              jobData?.filter((job)=>{
                if(searchTerm === "") return job;

                if(job.position.toLowerCase().includes(searchTermValue) || job.company.toLowerCase().includes(searchTermValue)  ) return job;

              })
              .map((item) => (
                <div className='job_item' key={item.id}>
                  {console.log(`./../../../${item.logo}`)}
                  {/* <img src={item.logo} alt={item.company} /> */}
                  <img src={`./../../../${item.logo}`} alt={item.company} />
                  <div className="job_content">
                    <h6>{ item.postedAt } - { item.contract } </h6>
                  <h1> <Link to={`/jobs/${item.position}`}> { item.position } </Link> </h1>
                  <p>{ item.company }</p>

                  <div className="location">
                    <p>
                      Location: <span> { item.location }</span>
                    </p>
                  </div>
                  </div>
                </div>
              ))

            }




          </div>
        </div>
      </div>
    </section>
  )
}
