
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import AuthConText from './AuthConText';
import auth from '../firebase';


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const Authinfo = {
        createUser,
        signIn,
    }
    return (
        <AuthConText.Provider value={Authinfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;