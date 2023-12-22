import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authentication';
import { useNavigate } from 'react-router-dom';

const SocialLiogin = () => {
const {googlelogin} = useContext(AuthContext)
const navigate = useNavigate()
  const handlegoogleLogin = () =>{
    googlelogin()
    .then(res=>{
        if (res) {
            navigate('/dashboard')
        }
    })
  }
    return (
        <div>
            <button onClick={handlegoogleLogin} className='btn btn-outline btn-info rounded-full'><img className='w-14' src="/download.png" alt=""/></button>
        </div>
    );
};

export default SocialLiogin;