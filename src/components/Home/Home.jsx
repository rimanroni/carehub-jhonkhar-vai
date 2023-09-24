import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../CategoryList/Category';
import FutureJobs from '../FutureJobs/FutureJobs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <FutureJobs/>
        </div>
    );
};

export default Home;