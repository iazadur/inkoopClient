import React, { useState } from 'react';
import { MdOutlineViewHeadline } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
    const [mobile,setMobile]=useState(false)
    return (
        <div>

            <nav className="navbar">
                <MdOutlineViewHeadline className="head" onClick={()=>setMobile(!mobile)} /> <div className="logo"><h1>LOGO</h1></div>
                <div className="menu">
                    <a href="/" className="menuItem">Home</a>
                    <a href="/" className="menuItem">Products</a>
                    <a href="/" className="menuItem">About</a>
                    <a href="/" className="menuItem">Contact</a>
                </div>
                <div className="searchOption">
                    <div className="search-box">
                        
                        <input type="text" className="input-search" placeholder="Type to Search..." />
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;