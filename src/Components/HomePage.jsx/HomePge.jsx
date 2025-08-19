import Footer from '../Footer/Footer';
import Navbar from '../Navbar.jsx/Navbar';
import { Outlet } from 'react-router-dom';

const HomePge = () => {
    return (
        <div className="flex flex-col min-h-screen">
    
            <Navbar />

            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default HomePge;
