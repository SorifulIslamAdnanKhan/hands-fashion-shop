import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = fetch(`https://ak-hands-fashion-shop-server.vercel.app/orders?email=${user?.email}`);
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
        <div>
            <h2 className='text-4xl text-center p-2 mb-4'>My Orders</h2>
            <div className="overflow-x-auto">
                {
                    orders.length === 0 ?

                        <div> <h2 className='text-2xl mt-2 text-primary text-center'>You have no order.</h2></div>
                        :
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Resale price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders &&
                                    orders?.map((order, i) => <tr key={order._id}>
                                        <th>{i + 1}</th>
                                        <th><img src={order.image} alt="" className="rounded-xl w-10" /></th>
                                        <td>{order.productName}</td>
                                        <td>$ {order.resalePrice}</td>
                                        <td>
                                            {
                                                order.resalePrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                                    <button className='btn btn-primary'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                order.resalePrice && order.paid && <button className='text-primary'>Paid</button>
                                            }

                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default MyOrders;