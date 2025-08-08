
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AuthConText from './AuthConText';
import auth from '../firebase';
import { useEffect, useState } from 'react';


const AuthProvider = ({ children }) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logout =()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('LoginUser',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return unsubscribe;
    }, []);


    const Authinfo = {
        createUser,
        signIn,
        logout,
        user,
        loading,
    }
    return (
        <AuthConText.Provider value={Authinfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;