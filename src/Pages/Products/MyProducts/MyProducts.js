import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = fetch(`https://ak-hands-fashion-shop-server.vercel.app/my-products?sellerEmail=${user?.email}`);
                const data = await (await res).json();
                return data
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = (id) => {
        fetch(`https://ak-hands-fashion-shop-server.vercel.app/product/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product deleted succesfully.`);
            }
        })
    }

    const handleAdvertise = (product) =>{

        const advertise = product.advertise;

        fetch(`https://ak-hands-fashion-shop-server.vercel.app/product/${product?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({advertise})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Advertise posted successfully!");
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl text-center p-2 mb-4'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Resale price</th>
                            <th>Sale Status</th>
                            <th>Avertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>$ {product.resalePrice}</td>
                                <td>{product.salesStatus}</td>
                                <td><button onClick={()=> handleAdvertise(product)} className='btn btn-primary'>Advertise</button></td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className='btn bg-red-600 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;