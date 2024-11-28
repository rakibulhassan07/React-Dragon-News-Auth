import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext=createContext(null)

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //sing in 
    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //Logout
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state changed',currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
    })

    const authInfo={
        user,
        createUser,
        logOut,
        singIn
    }

    return (
       <AuthContext.Provider value={authInfo}>
         
         {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;