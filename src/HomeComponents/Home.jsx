import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <>
        <Nav />
        <div className="home-container">
            <div className="home-title">
                <h1>Take guitar to the next level</h1>
                <img src="Modes/guitarBG.jpg" alt="guitar"/>
            </div>
            <div>
            <Link to="/modes" className="home-links">
                <button>Modes</button>
            </Link>
            <Link to="/sweeps" className="nav-links">
            <button>Sweeps</button>
            </Link>
            </div>
        </div>
        </>
    )
}
