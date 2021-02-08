import React,{useState, useRef, useContext} from 'react'
import {LoggedContext} from '../Context/LoggedContext'
import {UserContext} from '../Context/UserContext'



export default function Login() {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [users,setUsers] = useContext(UserContext)




    function handleSubmit(e){
        e.preventDefault()
        const user = users.find(user => user.username.toLowerCase() === usernameRef.current.value.toLowerCase() && user.password === passwordRef.current.value)
        if(!user){
            alert('User not found.')
            return
        }
        setIsLoggedIn(true)
    }





    return (
        <div className="login-form-container">
                <form onSubmit={handleSubmit} className="login-form">
                <h1>Login</h1>
                <input ref={usernameRef} type="text" />
                <input ref={passwordRef} type="password" />
                <button type="submit">Login</button>
                </form>
        </div>
    )
}
