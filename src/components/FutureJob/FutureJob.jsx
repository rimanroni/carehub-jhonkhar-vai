import React from 'react';
import { NavLink } from 'react-router-dom';

const FutureJob = ({job}) => {
     const {logo, job_title , id, company_name, remote_or_onsite, location, job_type, salary} = job
    return (
        <div className='border-2 shadow pl-4 py-5'>
           <img src={logo} alt="" /> <br />
           <div className='text-justify'>
           <h2 className=" ">{job_title}</h2>
           <h2>{company_name}</h2>
           <span>{remote_or_onsite}</span>
           <span className='ml-2'>{job_type}</span>
           <h2>{location}</h2>
           <h2>{salary}</h2>
           <NavLink to={`/jobDetails/${id}`}>
           <button>View Details</button>
           
           </NavLink>
           </div>
        </div>
    );
};

export default FutureJob;