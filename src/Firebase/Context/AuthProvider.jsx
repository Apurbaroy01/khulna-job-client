
import AuthConText from './AuthConText';


const AuthProvider = ({children}) => {



    const Authinfo =()=>{

    }
    return (
        <AuthConText.Provider value={Authinfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;