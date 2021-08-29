import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png';
function Navbar()
{
    return (
        <nav className="navbar">
        <div className="nav-center">
            <Link to='/'>
            <img src= {logo} alt={logo} className='logo' />
            </Link>
            <ul className="nav-links">
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/episodes">Episodes</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
