import React, { useEffect, useState } from 'react';
import CategoryJob from '../CategoryJob/CategoryJob';

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch('/public/data/categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className='mb-20 space-y-6'>
            <div className='text-center space-y-6'>
            <h1 className="text-6xl text-center mt-20 font-bold">
                Job Category List
            </h1>
             <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-wrap gap-4 justify-center'>
                {category.map(job=><CategoryJob key={job.id} job={job}/>)}
            </div>
        </div>
    );
};

export default Category;