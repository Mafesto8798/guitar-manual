import React from 'react'

export default function Mode({mode}) {
    return (
        <div className="mode-container">
            <h1>{mode.name}</h1>
            <p>{mode.info}</p>
            <img src={mode.img} alt={mode.name} />
        </div>
    )
}
