import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const { user } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_IMBB_Key;
    //  console.log(imageHostKey);

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {

        console.log(data);

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                console.log(photoData);
                if (photoData.success) {
                    const product = {
                        name: data.name,
                        category: data.category,
                        image: photoData.data.url,
                        seller: data.seller,
                        sellerEmail: user?.email,
                        location: data.location,
                        condition: data.condition,
                        resalePrice: parseInt(data.resalePrice),
                        originalPrice: parseInt(data.originalPrice),
                        yearUsed: data.yearUsed,
                        mobile: parseInt(data.mobile),
                        description: data.description
                    }

                    fetch(`http://localhost:5000/product`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success(`Product is added successfully.`)
                            navigate('/dashboard/my-products')
                        })
                }
            })

        if (isLoading) {
            return <Loading></Loading>
        }
    }

    return (
        <div className='w-6/12 p-7'>
            <h2 className='text-4xl text-center'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type='text'
                        {...register('name',
                            { required: 'Product name is required.' })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select
                        {...register('category',
                            { required: 'Category is required.' })}
                        className="select select-bordered w-full">
                        {
                            categories &&
                            categories?.map(category => <option
                                key={category._id}
                                value={category._id}
                            >{category.name}</option>)
                        }
                        {errors.category && <p className='text-red-600'>{errors.category.message}</p>}
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type='file'
                        {...register('image',
                            { required: 'Product image is required.' })}
                        className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input
                        type='text'
                        defaultValue={user?.displayName}
                        readOnly
                        {...register('seller',
                            { required: 'Product name is required.' })}
                        className="input input-bordered w-full" />
                    {errors.seller && <p className='text-red-600'>{errors.seller.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Seller Location</span>
                    </label>
                    <input
                        type='text'
                        {...register('location',
                            { required: 'Location is required.' })}
                        className="input input-bordered w-full" />
                    {errors.location && <p className='text-red-600'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select
                        {...register('condition',
                            { required: 'Product condition is required.' })}
                        className="select select-bordered w-full">

                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>

                        {errors.condition && <p className='text-red-600'>{errors.condition.message}</p>}
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input
                        type='text'
                        {...register('resalePrice',
                            { required: 'Resale price is required.' })}
                        className="input input-bordered w-full" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input
                        type='text'
                        {...register('originalPrice',
                            { required: 'Original price is required.' })}
                        className="input input-bordered w-full" />
                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Years of Used or Purchased </span>
                    </label>
                    <input
                        type='text'
                        {...register('yearUsed',
                            { required: 'Years of use name is required.' })}
                        className="input input-bordered w-full" />
                    {errors.yearUsed && <p className='text-red-600'>{errors.yearUsed.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Seller Mobile Number</span>
                    </label>
                    <input
                        type='text'
                        {...register('mobile',
                            { required: 'Seller mobile number is required.' })}
                        className="input input-bordered w-full" />
                    {errors.mobile && <p className='text-red-600'>{errors.mobile.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                        type='text'
                        {...register('description',
                            { required: 'Product description is required.' })}
                        className="input input-bordered w-full" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>
                <div className='mt-6'>
                    <input className='btn btn-accent w-full form-control text-white' value='Add Product' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProducts;