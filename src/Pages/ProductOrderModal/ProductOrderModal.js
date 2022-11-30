import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductOrderModal = ({ product }) => {
    console.log(product);
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const navigate = useNavigate();

    const handleProductOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const image = form.image.value;
        const resalePrice = form.resalePrice.value;
        const mobile = form.mobile.value;
        const meetLocation = form.meetLocation.value;

        const order = {
            productId: product._id,
            name: name,
            email: email,
            productName: productName,
            image: image,
            resalePrice: parseInt(resalePrice),
            mobile: parseInt(mobile),
            meetLocation: meetLocation,
        }

        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                toast.success('Order is added successfully.')
                navigate('/dashboard/my-orders');
            })
    }

    return (
        <>
            <input type="checkbox" id="product-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                    <form onSubmit={handleProductOrder}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='text' name='name' readOnly defaultValue={displayName} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' name='email' readOnly defaultValue={email} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='text' name='productName' readOnly defaultValue={product.name} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input type='text' name='image' readOnly defaultValue={product.image} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type='text' name='resalePrice' readOnly defaultValue={product.resalePrice} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type='text' name='mobile' className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type='text' name='meetLocation' className="input input-bordered w-full" />
                        </div>
                        <div className='mt-6'>
                            <input className='btn btn-accent w-full form-control text-white' value='Submit' type="submit" />
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default ProductOrderModal;