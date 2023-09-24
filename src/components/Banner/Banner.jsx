import React from 'react';
import {  Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            <div className='space-y-5'>
                <h1 className='font-bold text-6xl'>One Step <br />
                 Closer To Your <br />
                  <span className='text-purple-500'>Dream Job</span></h1>
                  <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                  <button className='mt-2  bg-purple-400 p-2 text-white rounded-md'>
                    <Link>Get Started</Link>
                  </button>
            </div>
            <div className=''>
                <img src="/public/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;