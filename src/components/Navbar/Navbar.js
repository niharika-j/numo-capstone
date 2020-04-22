import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar  = () => {
    return (
        <div className='navbar'>
            <div className="position-right">
                <div className="navbar-link">
                    <Link to='/'>Home</Link>
                </div>
                <div className="navbar-link">
                    <Link to='/background'>Background Research</Link>
                </div>
                <div className="navbar-link">
                    <Link to='/merchants'>Merchants</Link>
                </div>
                <div className="navbar-link">
                    <Link to='/consumers'>Consumers</Link>
                </div>
                <div className="navbar-link">
                    <Link to='/prototypes'>Prototype</Link>
                </div>
                <div className="navbar-link">
                    <Link to='/team'>Team</Link>
                </div>
            </div>
        </div>
    );
}

export default  Navbar;