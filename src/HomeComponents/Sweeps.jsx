import React from 'react'
import Pattern from './Pattern'
import {v4 as uuidv4} from 'uuid'



export default function Sweeps() {

const sweeps = [
    {
        id:uuidv4(),
        name:"Major Sweep 1",
        img:"Sweeps/Major Sweep 1.png",
        info:"Simple Major sweep"
    },
    {
        id:uuidv4(),
        name:"Major Sweep 2",
        img:"Sweeps/Major Sweep 2.png",
        info:"Slight variaton"
    },
    {
        id:uuidv4(),
        name:"Minor Sweep 1",
        img:"Sweeps/Minor Sweep 1.png",
        info:"Great sounding sweep"
    },
    {
        id:uuidv4(),
        name:"Minor Sweep 2",
        img:"Sweeps/Minor Sweep 2.png",
        info:"Another method for a good powerful sound"
    },
    {
        id:uuidv4(),
        name:"Diminished Sweep 1",
        img:"Sweeps/Diminished Sweep 1.png",
        info:"Welcome to hell!"
    },
    {
        id:uuidv4(),
        name:"Diminished Sweep 2",
        img:"Sweeps/Diminished Sweep 2.png",
        info:"The soul has left the body"
    },
    {
        id:uuidv4(),
        name:"Diminished Sweep 3",
        img:"Sweeps/Diminished Sweep 3.png",
        info:"Welcome to heaven"
    }
]


    return (
        <div className="modes-page">
            {sweeps.map(pattern => (
                <Pattern pattern={pattern} />
            ))}
        </div>
    )
}
