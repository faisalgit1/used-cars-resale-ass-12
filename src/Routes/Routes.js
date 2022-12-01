import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Pages/Login'
import Register from '../components/Pages/Register'
import DashboardPages from '../layout/DashboardPages'
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/Shared/Errorpage';
import PrivateRoute from './PrivateRoute';
import AddCar from '../Pages/Dashboard/AddCar'
import MyPost from '../Pages/Dashboard/MyPost';
import MyBuyer from '../Pages/Dashboard/MyBuyer';
import MyBooking from '../Pages/Dashboard/MyBooking';
import Alluser from '../Pages/Dashboard/Alluser';
import AllBuyers from '../Pages/Dashboard/AllBuyers';
import AllSellers from '../Pages/Dashboard/AllSellers';
import ReporteItems from '../Pages/Dashboard/ReporteItems';
import CategoryId from '../Pages/CategoryId'
import CheckOut from '../Pages/Dashboard/CheckOut/CheckOut';

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        // {
        //     path: '/cars/:id',
        //     loader: ({ params }) => fetch(`https://used-cars-sale-server-sites.vercel.app/cars/${params.id}`),
        //     element: <CategoryId></CategoryId>
        // }
        {
            path: '/cars/:id',
            loader: ({ params }) => fetch(`https://used-cars-sale-server-sites.vercel.app/cars/${params.id}`),
            element: <CategoryId></CategoryId>
        },
    ]
},
{
    path: '/dashboard',
    element: <PrivateRoute><DashboardPages></DashboardPages></PrivateRoute>,
    children: [
        {
            path: '/dashboard/addcar',
            element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
        },
        {
            path: '/dashboard/mypost',
            element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
        },
        {
            path: '/dashboard/mybuyer',
            element: <PrivateRoute><MyBuyer></MyBuyer></PrivateRoute>
        },
        {
            path: '/dashboard/mybooking',
            element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
            path: '/dashboard/allusers',
            element: <PrivateRoute><Alluser></Alluser></PrivateRoute>
        },
        {
            path: '/dashboard/allbuyers',
            element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
        },
        {
            path: '/dashboard/allsellers',
            element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
        },
        {
            path: '/dashboard/reportesitems',
            element: <PrivateRoute><ReporteItems></ReporteItems></PrivateRoute>
        },
        {
            path: '/dashboard/checkout/:id',
            loader: ({ params }) => fetch(`https://used-cars-sale-server-sites.vercel.app/bookings/${params.id}`),
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        }
    ]
}
])


export default routes;

