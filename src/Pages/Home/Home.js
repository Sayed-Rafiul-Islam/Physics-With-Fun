import React from 'react';
import Services from '../Services/Services';
import pic1 from '../../images/Extra section/100.png'
import pic2 from '../../images/Extra section/50.png'
import pic3 from '../../images/Extra section/500.png'
import './Home.css'


const Home = () => {
    return (
        <div className=' '>
            {/* header  */}
            {/* The banner  */}
            <div className="container-fluid">
                <img className='w-100' src="https://i.ibb.co/9nrpCGv/banner.jpg" alt="" />
            </div>

            {/* main */}

            {/* section-1 Statistics  */}
            <div className='my-5'>
                <h1 className='text-light mb-4'><span className='text-info'>S</span>tatistics</h1>
                <div className='container d-flex flex-column align-items-center flex-lg-row justify-content-lg-around'>
                    <img className='mb-3 mb-lg-0 w-sm-75' src={pic1} alt="" />
                    <img className='mb-3 mb-lg-0 w-sm-75' src={pic2} alt="" />
                    <img className='mb-3 mb-lg-0 w-sm-75' src={pic3} alt="" />
                </div>
            </div>

            {/* section-2 Services  */}
            <div className='container my-lg-5'>
                <h1 className='text-center text-light'>My <span className='text-info'>Services</span></h1>
                <Services className=''></Services>
            </div>

            {/* footer  */}
            <div className='Container-fluid bg text-center text-white py-4'>
                <h5 className='mb-3'><span className='text-info'>Physics</span> with Fun</h5>
                <small>Copyright © 2022 Physics with Fun</small><br />
                <small>All rights reserved</small>
            </div>
        </div>
    );
};

export default Home;