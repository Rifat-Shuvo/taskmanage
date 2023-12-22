import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Contact from '../Pages/Contact';
import About from '../Pages/About';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
              path: '/',
              element: <Home></Home>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'about',
                element: <About></About>
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