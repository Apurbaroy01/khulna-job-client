import { useContext } from "react";
import AuthConText from "../../Firebase/Context/AuthConText";


const PrivetRouter = ({children}) => {
    const {user}=useContext(AuthConText)

    if(user){
        return children;
    };

    return (
        <div>
            
        </div>
    );
};

export default PrivetRouter;