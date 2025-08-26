import { memo } from 'react';
import './styles/ServiceCard.css';

const ServiceCard = memo(({service}) => {

    return (
        <>
            <div className='card-container' key={service._id}>
                <div className='card-image'>
                    <img className='card-img' src='/images/website.png' alt='Card Image' />
                </div>
                <div className='card-description'>
                    <div className='grid grid-two-cols'>
                        <p>{service.provider}</p>
                        <p>{service.price}</p>
                    </div>
                    <h2 className='card-heading'>{service.service}</h2>
                    <p className='card-desc'>{service.description}</p>
                </div>
            </div>
        </>
    )
})

export default ServiceCard;