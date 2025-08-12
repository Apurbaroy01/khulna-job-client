import { useContext } from "react";
import AuthConText from "../../Firebase/Context/AuthConText";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";


const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthConText)
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-transparent">
                <p className="text-white text-lg font-medium animate-pulse"><RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /></p>
            </div>
        );
    }


    if (user) {
        return children;
    };



    return (
        <div>
            <Navigate to={'/login'} state={location.pathname} replace></Navigate>
        </div>
    );
};

export default PrivetRouter;