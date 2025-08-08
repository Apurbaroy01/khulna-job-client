
import Navbar from '../Navbar.jsx/Navbar';

import { Outlet } from 'react-router-dom';


const HomePge = () => {
    return (

        <div>
            <Navbar />
            <div>
            
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomePge;
