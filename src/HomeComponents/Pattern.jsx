import React from 'react'

export default function Pattern({pattern}) {
    return (
        <div className="mode-container">
            <h1>{pattern.name}</h1>
            <p>{pattern.info}</p>
            <img src={pattern.img} alt="Schepp"/>
        </div>
    )
}
