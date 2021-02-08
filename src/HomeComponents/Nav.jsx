import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <div className="logo-container">
                    <Link to="/">
                    <h1 className="logo">Logo</h1>
                    </Link>
                </div>
                <div className="nav-links-container">
                <Link to="/login" className="nav-links">
                <h1>Log In</h1>
                </Link>
                <Link to="/signup" className="nav-links">
                <h1>Sign Up</h1>
                </Link>
                </div>
            </nav>
        </div>
    )
}
