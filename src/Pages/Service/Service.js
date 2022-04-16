import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { title, price, description, image } = props.service;
    const navigate = useNavigate();
    const checkout = () => {
        console.log('hi')
        navigate('/checkout');
    }

    return (
        <div className='col-4'>
            <div className="card mb-3">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Price : {price}</small></p>
                            <button onClick={checkout} className='btn btn-dark'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;