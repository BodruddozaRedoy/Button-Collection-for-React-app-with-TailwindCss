import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        link:"/navbar",
        title:"Navbar"
    },
    {
        link:"/buttons",
        title:"Buttons"
    },
    {
        link:"/about",
        title:"About Us"
    },
    {
        link:"/contact",
        title:"Contact Us"
    },
    {
        link:"/login",
        title:"Login"
    },
    {
        link:"/register",
        title:"Register"
    },
    {
        link:"/product-details",
        title:"Product Details"
    },
    
]

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-black p-5 text-white'>
            <Link to={"/"}>
                Templates
            </Link>
            <div className='flex gap-5'>
                {
                    navLinks.map((nav, index) => (
                        <Link to={nav.link}>{nav.title}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navbar;