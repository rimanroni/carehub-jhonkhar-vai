import React, { useEffect, useState } from 'react';
import FutureJob from '../FutureJob/FutureJob';

const FutureJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(()=>{
        fetch('/public/data/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className='mb-20'>
        <div className='text-center space-y-6'>
        <h1 className="text-6xl text-center mt-20 font-bold">
        Featured Jobs
        </h1>
         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
         {jobs.slice(0,dataLength).map(job=><FutureJob key={job.id} job={job}/>)}
       
         </div>
          <div className={dataLength===6?"hidden":""}>
          <button onClick={()=>setDataLength(jobs.length)} className='text-center btn btn-primary'>show all</button>
          </div>
        </div>
    </div>
    );
};

export default FutureJobs;