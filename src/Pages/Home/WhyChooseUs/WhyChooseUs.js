import React from 'react';
import {FaCarSide, FaLock, FaShoppingCart, FaArrowLeft} from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className='mt-8 p-6'>
            <h2 className="text-3xl text-center p-4">Why Choose Our Shop</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaCarSide className='text-sky-600 text-4xl'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fast Delivery</h2>
                        <p>We provide super fast delivery around the world.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaLock className='text-sky-600 text-4xl'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Secure Payment</h2>
                        <p>We offer highly secured multiple payment syatems.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaShoppingCart className='text-sky-600 text-4xl'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Easy Checkout</h2>
                        <p>Shopping is fun not complecated checkout process.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaArrowLeft className='text-sky-600 text-4xl'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Easy Returns</h2>
                        <p>We allow you to return products within 14 days not hidden charged applied.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;