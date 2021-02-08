import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <>
        <Nav />
        <div className="home-container">
            <div>
                <h1>Welcome to Kenny School</h1>
                <img src="https://www.nicepng.com/png/detail/126-1262220_guitar-icon-png.png" alt="guitar"/>
                <Link to="/modes" className="home-links">
                <h1>Modes</h1>
                </Link>
            </div>
        </div>
        </>
    )
}
