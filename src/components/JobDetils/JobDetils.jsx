import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../LocalStorage/localStorage';

const JobDetils = () => {
    const jobs = useLoaderData()
    const {jobId} = useParams()
    const job = jobs.find(job=>job.id === parseInt(jobId))
    const {logo, job_title , company_name, remote_or_onsite, location, job_type, salary} = job
   
    const handleAppyJob = () =>{
        saveJobApplication(parseInt(jobId))
        toast('you have applyd ')
    }
  
    return (
        <div>
               <img src={logo} alt="" />
        <h1>{job_title}</h1>
        <h1>{company_name}</h1>
        <h1>{remote_or_onsite}</h1>
        <h1>{location}</h1>
        <h1>{job_type}</h1>
        <h1>{salary}</h1>
        <NavLink  >
            <button 
             onClick={handleAppyJob}
            className='btn btn-accent'>apply now</button>
        </NavLink>
        <ToastContainer />
        </div>
    );
};

export default JobDetils;