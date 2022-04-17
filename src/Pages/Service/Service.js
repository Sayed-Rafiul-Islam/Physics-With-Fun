import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, price, description, image } = props.service;

    const navigate = useNavigate();
    const checkout = () => {
        navigate('/checkout');
    }

    return (
        <div className='col-12 col-lg-4'>
            <div className="card mb-3 height d-flex flex-column border-info bg-dark">
                <div className="row g-0 ps-2">
                    <div className="col-md-4 mt-3">
                        <img src={image} className="img-fluid rounded-start" alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex align-items-center align-items-lg-start flex-column text-light">
                            <h5 className="card-title  text-info">{title}</h5>
                            <p className="text-start">{description}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-auto mb-3 mb-lg-2'>
                    <p><small className="text-muted">Price : {price}</small></p>
                    <button onClick={checkout} className='btn btn-outline-light'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Service;