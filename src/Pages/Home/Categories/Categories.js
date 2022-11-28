import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BsSmartwatch } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const url = 'http://localhost:5000/categories';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCategories(response.data);
        });
    }, []);


    return (
        <section className='mt-8 p-6'>
            <h2 className="text-3xl text-center p-4">Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categories.map(category => <div key={category._id} className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <BsSmartwatch className='text-amber-600 text-4xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category.name}</h2>
                        <div className="card-actions">
                            <Link><button className="btn btn-primary">View Products</button></Link>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </section>
    );
};

export default Categories;