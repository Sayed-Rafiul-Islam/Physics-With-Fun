import React from 'react';
import Service from '../Service/Service';

const Services = () => {

    // services data 
    const services = [
        {
            id: 1, title: 'Optics', price: '$99',
            image: 'https://i.ibb.co/ZMht44R/optics.jpg',
            description: 'In this course you will learn fundamentals of optics, Starting with the history of light. Then we you shall learn wave optics'
        },
        {
            id: 2, title: 'Mathematical Physics', price: '$299',
            image: 'https://i.ibb.co/JqmRqyM/mathematical.jpg',
            description: 'This is an advance course, if you are not handy with calculus, differential equations, linear algebra ; then I must recommend you to take the fundamental course first'
        },
        {
            id: 3, title: 'Classical Mechanics', price: '$199',
            image: 'https://i.ibb.co/1vV7qB7/classical.jpg',
            description: "In this course is the bridge between mechanics and relativity, So if you haven't learn Mechanic. Then I must recommend you to take the fundamental course first"
        }

    ]

    return (
        <div className='row mt-4'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;