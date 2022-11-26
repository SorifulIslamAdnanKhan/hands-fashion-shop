import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/images/error.png';

const Error = () => {
    return (
        <div className="hero mt-32 p-2">
            <div className="hero-content flex-col lg:flex-row">
                <img src={error} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">Opps! Page Not Found.</h1>
                    <p className="py-6">Plesae go back to home page.</p>
                    <Link to='/'><button className="btn btn-primary">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;