import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="h-[80vh] text-center opacity-75 grid bg-cover bg-[url('/Banner.jpg')]">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-20 w-full h-full"></div>
                <div className="col-start-1 row-start-1 mx-auto my-auto">
                    <h1 className='text-7xl font-bold mb-7 text-white'>Task Management</h1>
                    <p className='text-white font-bold
                 text-3xl mb-5 p-5'>Our site features interactive learning modules that allow you to learn at your own pace and in a way that works best for you.</p>
                    <button className='btn font-bold rounded-full bg-rose-500 text-white border-none'><Link to="/register">Let's Explore</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;