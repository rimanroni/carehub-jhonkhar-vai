import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <div className='text-center text-3xl px-8 lg:text-6xl text-slate-600-300 font-bold  flex justify-center items-center  h-1/2'>
            <h1>Opps 404 !!!  page not found</h1>
         </div>
         <NavLink to='/' className='text-3xl'> go to home </NavLink>
        </>
    );
};

export default Error;