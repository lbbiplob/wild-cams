import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState('josim');
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleLogIn = provider =>{
        return signInWithPopup(auth, provider);
    }

    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = { user, createUser, logIn, logOut, googleLogIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;