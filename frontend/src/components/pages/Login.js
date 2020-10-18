import React, { useState, useEffect } from 'react'
import '../Public.css';
import { useHistory } from "react-router-dom";
import Util from '../../Util';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const handleChange_email =(event)=>{
        setEmail(event.target.value)
    }
    const handleChange_password =(event)=>{
        setPassword(event.target.value)
    }

    const changePage = () => {
        // let data = Util.login(email,password)
        // localStorage.setItem('token', data.token);
        // setJwt(data.token);
        history.push(`/chat`);
    }
    return (
        <div className="background-color">
            <div className="title" style={{paddingTop:"140px",paddingLeft:"100px"}}>
                Sign In
            </div>
            <input type="email" className="box" placeholder="Email Address" onChange={handleChange_email} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
            <input type="password" className="box" placeholder="Password" onChange={handleChange_password} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
            <div onClick={changePage} className="button" style={{marginTop:"40px",marginBottom:"20px",marginLeft:"100px"}}>
                Sign In
            </div>
        </div>
    )
}

export default Login
