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
import Privateroute from '../providers/Privateroute';


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
        element: <Privateroute><Dashboard></Dashboard></Privateroute>,
        children: [
            {
                path: 'profile',
                element: <Privateroute><Myprofile></Myprofile></Privateroute>
            },
            {
                path: 'add',
                element: <Privateroute><Addtask></Addtask></Privateroute>
            },
            {
                path: 'manage',
                element: <Privateroute><Managetask></Managetask></Privateroute>
            }
        ]
    }
])


export default Routes;