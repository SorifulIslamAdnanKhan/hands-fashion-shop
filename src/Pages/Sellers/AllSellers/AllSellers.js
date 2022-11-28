import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = fetch(`http://localhost:5000/users/sellers`);
                const data = await (await res).json();
                return data
            }
            catch (error) {

            }
        }
    });

    const handleDeleteSeller = (id) =>{
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller deleted succesfully.`);
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        
        <div>
            <h2 className='text-4xl text-center p-2 mb-4'>Manage Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>seller Name</th>
                            <th>Seller Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers &&
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>$ {seller.email}</td>
                                <td><button className='btn btn-primary'>Verify</button></td>
                                <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn bg-red-600 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;