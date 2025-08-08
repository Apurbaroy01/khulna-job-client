import React from 'react';
import Navbar from '../Navbar.jsx/Navbar';

import { Outlet } from 'react-router-dom';
import Headers from '../Headers/Headers';

const HomePge = () => {
    return (

        <div>
            <Navbar />
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePge;
