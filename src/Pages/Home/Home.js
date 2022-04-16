import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <img className='w-100' src="https://i.ibb.co/9nrpCGv/banner.jpg" alt="" />
            </div>
            <div className='mt-4'>
                <h1 className='text-center'>My Services</h1>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;