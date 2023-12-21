import React from 'react';
import { Link } from 'react-router-dom';
import SocialLiogin from '../Componenets/SocialLiogin';

const Register = () => {
    return (
        <div className=' bg-[url("/Banner.jpg")] bg-cover min-h-screen flex justify-center items-center'>
            <div className='bg-base-100 p-5 rounded-xl shadow-xl w-[31%]'>
                <h1 className='text-center text-xl font-bold text-blue-500'> Please Register Now</h1>
                <form>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Name:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="name" id="" placeholder='Enter your Full Name here' required />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Photo URL:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="photo" id="" placeholder='Enter your Photo URL here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Email:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="email" name="email" id="" placeholder='Enter your email here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Password:</span>
                    </label>
                    <input className='mb-4 border border-blue-500 rounded-lg w-full p-3' type="password" name="password" id="" placeholder='Enter your password here' />
                    <label>Don't have an account? <span className='text-red-500 text-sm italic underline font-bold'><Link to="/login">Login Now</Link></span></label>
                    <div className='my-5 text-center'>
                        <button className='btn btn-outline btn-primary rounded-full'>Register Now</button>
                    </div>
                    <div className="divider divider-primary">or Register with</div>
                    <div className='text-center'>
                        <SocialLiogin></SocialLiogin>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;