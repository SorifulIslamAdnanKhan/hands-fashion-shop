import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import ProductOrderModal from '../../../ProductOrderModal/ProductOrderModal';
import { useState } from 'react';

const CategoryProducts = () => {

    const category = useLoaderData();
    const [product, setProduct] = useState([]);
console.log(product);
    const { data: products, isLoading } = useQuery({
        
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = fetch(`http://localhost:5000/products?category=${category?._id}`);
                const data = await (await res).json();
                return data
            }
            catch (error) {

            }
        }
    });
    
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mt-8 p-6'>
            <h2 className="text-3xl text-center p-4">{category.name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    products &&
                    products?.map(product => <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={product.image} alt="Shoes" className="rounded-xl w-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <p className='text-lg'>Seller Name: {product.seller}</p>
                        <p className='text-lg'>Condition: {product.condition}</p>
                        <p className='text-lg'>Resale Price: {product.resalePrice}</p>
                        <p className='text-lg'>Original Price: {product.originalPrice}</p>
                        <p className='text-lg'>Year of Used: {product.yearUsed}</p>
                        <p className='text-lg'>Seller Mobile: {product.mobile}</p>
                        <p className='text-lg'>Location: {product.location}</p>
                        <p className='text-lg'>Description: {product.description}</p>
                        <p className='text-lg'>Post Date: {product.postDate}</p>
                        <div className="card-actions">
                        <label onClick={()=> setProduct(product)} htmlFor="product-order-modal" className="btn btn-primary">Book Now</label>
                        </div>
                    </div>
                </div>)
                }
            </div>
            <ProductOrderModal product={product}></ProductOrderModal>
        </section>
    );
};

export default CategoryProducts;