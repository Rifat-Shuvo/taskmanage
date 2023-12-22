import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase.config';


export const AuthContext = createContext('')
const auth = getAuth(app)
 const googleprovider = new GoogleAuthProvider()

const Authentication = ({children}) => {

    const [user, setUser] = useState('')
    const [loading, setloading] = useState(true)

    const googlelogin = () =>{
        setloading(true)
      return signInWithPopup(auth, googleprovider)
    }

    const createUser = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
     }
 
     //updateUser
     const handleUpdateProfile= (name,photo)=>{
       return  updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo})
     }
    //manage user
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
          setloading(false)
        })
        return ()=>{
            unsubscribe()
        } 
    },[])
    const info = {
        user,
        loading,
        googlelogin,
        createUser,
        signIn,
        logOut,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;