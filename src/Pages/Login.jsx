import React from 'react';
import { Link } from 'react-router-dom';
import SocialLiogin from '../Componenets/SocialLiogin';

const Login = () => {
    return (
        <div className=' bg-[url("/Banner.jpg")] bg-cover min-h-screen flex justify-center items-center'>
            <div className='bg-base-100 p-5 rounded-xl shadow-xl w-[31%]'>
                <h1 className='text-center text-xl font-bold text-blue-500'> Please Login Now</h1>
                <form>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Email:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="email" name="email" id="" placeholder='Enter your email here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Password:</span>
                    </label>
                    <input className='mb-4 border border-blue-500 rounded-lg w-full p-3' type="password" name="password" id="" placeholder='Enter your password here' />
                    <label>Don't have an account? <span className='text-red-500 text-sm italic underline font-bold'><Link to="/register">Register Now</Link></span></label>
                    <div className='my-5 text-center'>
                    <button className='btn btn-outline btn-primary rounded-full'>Login Now</button>
                    </div>
                    <div className="divider divider-primary">or log in with</div>
                    <div className='text-center'>
                        <SocialLiogin></SocialLiogin>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;