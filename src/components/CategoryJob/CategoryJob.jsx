import React from 'react';

const CategoryJob = ({job}) => {
    const {logo,category_name} = job
    return (
        <div>
            <img src={logo} alt="" />
            <h2 className="text-2xl">
                {category_name}
            </h2>
        </div>
    );
};

export default CategoryJob;