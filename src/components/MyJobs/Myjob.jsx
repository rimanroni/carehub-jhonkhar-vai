import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../LocalStorage/localStorage';

const Myjob = () => {
    const jobs = useLoaderData()
    const [applyed, setApplyed] = useState([])
    useEffect(()=>{
        const storedJobId = getStoredJobApplication()
        if(jobs.length>0){
            const  jobsAppled = jobs.filter(job=>storedJobId.includes(job.id)) 
            console.log( jobs, storedJobId, jobsAppled)
        }
        setApplyed(jobsAppled)
    },[])
    return (
        <div>
            <h1>Hello jsx my job</h1>
            {console.log(applyed)}
        </div>
    );
};

export default Myjob;