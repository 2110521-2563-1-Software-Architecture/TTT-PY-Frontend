import React from 'react'
import '../components/Public.css';

function Login() {
    return (
        <div className="background-color">
            <div className="title" style={{paddingTop:"140px",paddingLeft:"100px"}}>
                SIGN IN
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Email Address
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Password
            </div>
            <div className="button" style={{marginTop:"40px",marginBottom:"20px",marginLeft:"100px"}}>
                Sign In
            </div>
        </div>
    )
}

export default Login
