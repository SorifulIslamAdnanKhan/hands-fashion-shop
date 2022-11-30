import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY);

const Payment = () => {
    const order = useLoaderData();
    const { image, productName, resalePrice } = order;

    return (
        <section className='mt-8 p-6'>
            <h2 className="text-3xl text-center p-4">Payment</h2>
            <div className='grid grid-cols-1 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl w-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{productName}</h2>
                        <p className='text-lg'>$ {resalePrice}</p>
                    </div>
                </div>

            </div>
            <div className='mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
        </section>
    );
};

export default Payment;