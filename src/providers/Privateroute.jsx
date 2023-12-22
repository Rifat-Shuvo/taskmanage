import React, { useContext } from 'react';
import { AuthContext } from './Authentication';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return <h1>pleasr wait....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Privateroute;