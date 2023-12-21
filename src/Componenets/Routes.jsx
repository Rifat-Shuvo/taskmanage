import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
              path: '/',
              element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])


export default Routes;