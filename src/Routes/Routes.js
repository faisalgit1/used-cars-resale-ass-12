import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Pages/Login'
import Register from '../components/Pages/Register'
import Main from '../layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import ErrorPage from '../Pages/Shared/Errorpage';


const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
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
}])


export default routes;

