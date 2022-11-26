import React from 'react';
import banner from '../../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='xs:w-1/3 max-w-lg'>
                    <img src={banner} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='p-4'>
                    <h1 className="text-3xl font-bold">AK- Hands Fashion Shop</h1>
                    <p className="py-6 text-lg">Your trusted online shop. You can purchase quality, beautiful, modern and branded second hand watches in cheap price.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;