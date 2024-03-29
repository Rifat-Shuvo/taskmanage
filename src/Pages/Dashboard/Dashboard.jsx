import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../Componenets/Footer';
import { AuthContext } from '../../providers/Authentication';
import Swal from 'sweetalert2';


const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user);
// console.log(user);
 const handleSignOut=()=>{
    logOut()
    .then(()=>{
         
            Swal.fire({
                title: "Good job!",
                text: "You successfully Logout!",
                icon: "success"
              });
              navigate('/')
        
    })
}
    const dashboardlinks = <>
        <li className='p-2 text-lg'> <NavLink to={'/dashboard/profile'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>My Profile</NavLink></li>
        <li className='p-2 text-lg'> <NavLink to={'/dashboard/add'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Add Tasks</NavLink></li>
        <li className='p-2 text-lg'> <NavLink to={'/dashboard/manage'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Manage Tasks</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer pt-4 md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-cover text-white bg-[url('/Banner.jpg')] flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="sticky top-0 btn btn-primary drawer-button md:hidden">Open Menu</label>
                    
                    <h1 className='text-3xl text-center'>WelCome {user?.displayName} To Dashboard</h1>
                    
                    <div className='min-h-screen min-w-fit'>
                    <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-blue-100 text-base-content">
                        {/* Sidebar content here */}
                        <li className='text-xl font-bold'>Dashboard</li>
                        <li className='text-lg'><Link to={'/'}>Go Home</Link></li>
                        {dashboardlinks}
                        <li className='p-2 text-lg'><button onClick={handleSignOut}>Logout</button></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;