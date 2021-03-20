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
                </div>
            </nav>
        </div>
    )
}
