import { useContext } from "react";
import AuthConText from "../../Firebase/Context/AuthConText";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loading}=useContext(AuthConText)
    const location = useLocation();

    if(user){
        return children;
    };
    if(loading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <Navigate to={'/login'}  state={location.pathname} replace></Navigate>
        </div>
    );
};

export default PrivetRouter;