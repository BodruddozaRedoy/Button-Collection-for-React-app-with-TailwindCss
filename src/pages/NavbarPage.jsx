import React from 'react';
import ChipTabs from '../Components/ChipTab';
import MobileNav from '../Components/MobileNav';
import { Nav } from '../Components/Nav';

const NavbarPage = () => {
    return (
        <div className='m-10 flex flex-col gap-10'>
            <ChipTabs/>
            <MobileNav/>
            <Nav/>
        </div>
    );
};

export default NavbarPage;