import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    
    const {user} = useContext(AuthContext);
    
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <h2 className="text-3xl text-center mt-6 p-4">Welcome To You Dashboard <span className='text-sky-600'>{user?.displayName ? user?.displayName : user?.name}</span></h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/all-seller'>Manage Sellers</Link></li>
                                <li><Link to='/dashboard/all-buyer'>Manage Buyers</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                                <li><Link to='/dashboard/my-products'>My Products</Link></li>
                            </>
                        }
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;