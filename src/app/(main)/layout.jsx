
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;