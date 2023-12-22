import React, { useContext } from 'react';
import { AuthContext } from '../../providers/Authentication';

const Myprofile = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className='text-blue-500'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={user.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {user.displayName}
                        <div className="badge badge-secondary">Welcome</div>
                    </h2>
                    <p>Welcome this site.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">signin time: {user.metadata.lastSignInTime}</div>
                        <div className="badge badge-outline">{user.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;