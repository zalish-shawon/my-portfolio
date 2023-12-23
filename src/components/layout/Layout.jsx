import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Headroom from 'react-headroom';

const Layout = () => {
    return (
        <div>
            <Headroom style={{
                webkitTransition: 'all .5s ease-in-out',
                mozTransition: 'all .5s ease-in-out',
                oTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out',
            }}>
                <Navbar></Navbar>
            </Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;