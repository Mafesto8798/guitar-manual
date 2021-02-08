import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Home from './HomeComponents/Home'
import Modes from './HomeComponents/Modes'
import Login from './LoginComponents/Login'
import Signup from './LoginComponents/Signup'
import {LoggedContext} from './Context/LoggedContext'
import {UserContext} from './Context/UserContext'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App(){
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [users,setUsers] = useState([
        {
            id:uuidv4(),
            username:"Admin",
            password:'111'
        }
    ])

    return(
        <>
        <Router>
            <UserContext.Provider value={[users,setUsers]}>
            <LoggedContext.Provider value={[isLoggedIn,setIsLoggedIn]}>
            <Route  path="/" exact component={Home} />
            <Route path="/modes" component={Modes} />
            <Route path="/login" component={Login} />
            <Route  path="/signup"  component={Signup} />
            </LoggedContext.Provider>
            </UserContext.Provider>
        </Router>
        </>
    )
}