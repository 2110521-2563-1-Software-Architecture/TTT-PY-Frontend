import React, { useState, useEffect } from 'react'
import '../Public.css';

function Login() {
    const [user, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleChange_user =(event)=>{
        setUsername(event.target.value)
    }
    const handleChange_password =(event)=>{
        setPassword(event.target.value)
    }
    return (
        <div className="background-color">
            <div className="title" style={{paddingTop:"140px",paddingLeft:"100px"}}>
                Sign In
            </div>
            <input type="email" className="box" placeholder="Email Address" onChange={handleChange_user} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
            <input type="password" className="box" placeholder="Password" onChange={handleChange_password} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
            <div className="button" style={{marginTop:"40px",marginBottom:"20px",marginLeft:"100px"}}>
                Sign In
            </div>
        </div>
    )
}

export default Login
