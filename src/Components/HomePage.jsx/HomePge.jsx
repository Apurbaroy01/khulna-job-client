import React from 'react';
import Navbar from '../Navbar.jsx/Navbar';

import { Outlet } from 'react-router-dom';

const HomePge = () => {
    return (

        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default HomePge;
