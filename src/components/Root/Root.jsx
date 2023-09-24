import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-8' >
            <Header/>
            <div className='min-h-screen'>
            <Outlet/>
            </div>
             </div>
            <Footer/>
        </div>
    );
};

export default Root;