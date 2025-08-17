
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AuthConText from './AuthConText';
import auth from '../firebase';
import { useEffect, useState } from 'react';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('LoginUser', currentUser?.email)
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email }

                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                        setLoading(false)
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data)
                    setLoading(false)
                })
            }

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