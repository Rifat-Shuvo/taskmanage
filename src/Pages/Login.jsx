import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLiogin from '../Componenets/SocialLiogin';
import { AuthContext } from '../providers/Authentication';
import Swal from 'sweetalert2';


const Login = () => {
    const [show, setShow] = useState(false)
const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
const handleLogin = (e) =>{
 e.preventDefault()
 const form = e.target
 const email = form.email.value
 const password = form.password.value
//  console.log(email,password);
signIn(email,password)
.then(res=>{
    if (res) {
        Swal.fire({
            title: "Good job!",
            text: "You successfully Login!",
            icon: "success"
          });
          navigate('/dashboard')
    }
})
}

    return (
        <div className=' bg-[url("/Banner.jpg")] bg-cover min-h-screen flex justify-center items-center'>
            <div className='bg-base-100 p-5 rounded-xl shadow-xl w-[31%]'>
                <h1 className='text-center text-xl font-bold text-blue-500'> Please Login Now</h1>
                <form onSubmit={handleLogin}>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Email:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="email" name="email"  placeholder='Enter your email here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Password:</span>
                    </label>
                    <div className='relative'>
                    <input className='mb-4 border border-blue-500 rounded-lg w-full p-3' type= {show? "text" : "password"} name="password"  placeholder='Enter your password here' /> <button className='btn btn-primary absolute top-0 right-0' onClick={()=>{setShow((pre)=>!pre)}}>
                        {show? <span>hide</span> : <span>show</span> }
                    </button>
                    </div>
                    
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