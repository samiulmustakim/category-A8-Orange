
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <main className='flex-1'>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;