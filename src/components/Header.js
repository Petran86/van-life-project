import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className='nav-home'>#VANLIFE</Link>
            <nav>
                <Link to="/about" className='nav-about'>About</Link>
                <Link to="/vans" className='nav-about'>Vans</Link>
            </nav>
        </header>
    )
}