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
        }
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
        }
    ]
}
])


export default routes;

