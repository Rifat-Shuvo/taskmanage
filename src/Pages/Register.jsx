import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLiogin from '../Componenets/SocialLiogin';
import { AuthContext } from '../providers/Authentication';
import Swal from 'sweetalert2';



const Register = () => {
    const [show, setShow] = useState(false)
    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(res => {
                console.log(res);
                handleUpdateProfile(name, photo)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            title: "Sucessfull!",
                            text: "You Successfully Registered!",
                            icon: "success"
                        });
                        navigate('/dashboard')
                    })
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    title: "error!",
                    text: "An error is occured!",
                    icon: "error"
                });
                navigate('/')
            })
        // console.log(user);



        // console.log(name, hoto, email,password);
    }
    return (
        <div className=' bg-[url("/Banner.jpg")] bg-cover min-h-screen flex justify-center items-center'>
            <div className='bg-base-100 p-5 rounded-xl shadow-xl w-[31%]'>
                <h1 className='text-center text-xl font-bold text-blue-500'> Please Register Now</h1>
                <form onSubmit={handleSignUp}>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Name:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="name" placeholder='Enter your Full Name here' required />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Photo URL:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="photo" placeholder='Enter your Photo URL here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Email:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="email" name="email" placeholder='Enter your email here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Password:</span>
                    </label>
                    <div className='relative'>
                    <input className='mb-4 border border-blue-500 rounded-lg w-full p-3' type= {show? "text" : "password"} name="password"  placeholder='Enter your password here' /> <button className='btn btn-primary absolute top-0 right-0' onClick={()=>{setShow((pre)=>!pre)}}>
                        {show? <span>hide</span> : <span>show</span> }
                    </button>
                    </div>
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