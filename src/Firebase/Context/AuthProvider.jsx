
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthConText from './AuthConText';
import auth from '../firebase';


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(email, password, auth)
    }


    const Authinfo = {
        createUser,
    }
    return (
        <AuthConText.Provider value={Authinfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;