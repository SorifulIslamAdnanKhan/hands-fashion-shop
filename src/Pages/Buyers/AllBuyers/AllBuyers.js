import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = fetch(`http://localhost:5000/users/buyers`);
                const data = await (await res).json();
                return data
            }
            catch (error) {

            }
        }
    });

    const handleDeleteBuyer = (id) => {
        fetch(`http://localhost:5000/users/buyer/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer deleted succesfully.`);
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl text-center p-2 mb-4'>Manage Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers &&
                            buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>$ {buyer.email}</td>
                                <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn bg-red-600 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;