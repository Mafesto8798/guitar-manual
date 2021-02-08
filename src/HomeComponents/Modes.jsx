import React from 'react'
import Nav from './Nav'
import {v4 as uuidv4} from 'uuid'
import Mode from './Mode'

const modes = [
    {id:uuidv4(),name:"Ionian",img:"Ionian.png",info:"Major Scale :)"},
    {id:uuidv4(),name:"Dorian",img:"Dorian.png",info:"Dorian Scaale :)"},
    {id:uuidv4(),name:"Phrygian",img:"Phrygian.png",info:"Fridge Scaale :)"},
    {id:uuidv4(),name:"Lydian",img:"Lydian.png",info:"Lid Scaale :)"},
    {id:uuidv4(),name:"Mixolydian",img:"Mixolydian.png",info:"MixoLid Scaale :)"},
    {id:uuidv4(),name:"Aeolian",img:"Aeolian.png",info:"Aeolian Scaale :)"},
    {id:uuidv4(),name:"Locrian",img:"Locrian.png",info:"Locrian Scaale :)"}
]



export default function Modes() {
    return (
        <>
        <Nav />
        <div className="modes-page">
            {modes.map(mode => (
                <Mode mode={mode} />
            ))}
        </div>
        </>
    )
}
