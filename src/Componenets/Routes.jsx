import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Myprofile from '../Pages/Dashboard/Myprofile';
import Addtask from '../Pages/Dashboard/Addtask';
import Managetask from '../Pages/Dashboard/Managetask';


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
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'profile',
                element: <Myprofile></Myprofile>
            },
            {
                path: 'add',
                element: <Addtask></Addtask>
            },
            {
                path: 'manage',
                element: <Managetask></Managetask>
            }
        ]
    }
])


export default Routes;