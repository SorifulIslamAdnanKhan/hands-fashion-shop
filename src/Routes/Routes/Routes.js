import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../Layouts/Main/Main";
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Blog from '../../Pages/Blog/Blog';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CategoryProducts from "../../Pages/Home/Categories/CategoryProducts/CategoryProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllSellers from "../../Pages/Sellers/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Buyers/AllBuyers/AllBuyers";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProducts from "../../Pages/Products/AddProducts/AddProducts";
import MyProducts from "../../Pages/Products/MyProducts/MyProducts";
import MyOrders from "../../Pages/Buyers/MyOrders/MyOrders";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Payment from "../../Pages/Payment/Payment";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/dashboard/all-seller',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/all-buyer',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/add-product',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path:'/dashboard/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/my-orders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/orders/${params.id}`)
            },
        ]
    }
])