import React from 'react';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        {
            id: 1, title: 'Standard package', price: '$40',
            image: 'https://i.ibb.co/9qg8Lhg/pack-1.png',
            description: 'I will be available 3days a week. And I will give lessons for about one hour. And I will collecting my salary after every month.'
        },
        {
            id: 2, title: 'Medium package', price: '$50',
            image: 'https://i.ibb.co/VJBcx6s/pack-2.png',
            description: 'I will be available 3days a week. And I will give lessons for about one and half hour. And I will collecting my salary after every month.'
        },
        {
            id: 3, title: 'Heavy package', price: '$65',
            image: 'https://i.ibb.co/vLfBchb/pack-3.png',
            description: 'I will be available 4days a week. And I will give lessons for about one and half hour. And I will collecting my salary after every month.'
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