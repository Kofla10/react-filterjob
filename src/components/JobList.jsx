import React, { useState } from 'react'
import jobs from '../data/data'
import { Link } from 'react-router-dom'



export const JobList = () => {

  const [jobData, setJobData] = useState(jobs)

  console.log(jobData)

  return (
    <section className='job_list'>
      <div className="container">
        <div className="job_list_wrapper">
          <div className="search_panel">
            <div className='seach_paner-01'>
              <input type="text"
                     placeholder='Búsqueda por Título'
              />

            </div>
          </div>
         <div className='job_item'>
            {
              jobData.map((item) => (
                <div key={item.id}>
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
