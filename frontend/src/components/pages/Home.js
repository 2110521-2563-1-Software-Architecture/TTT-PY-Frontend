import React, { useState, useEffect } from 'react'
import '../Public.css'
function Home() {
    const [profileName, setProfileName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange_profile =(event)=>{
        setProfileName(event.target.value)
    }
    const handleChange_email =(event)=>{
        setEmail(event.target.value)
    }
    const handleChange_password =(event)=>{
        setPassword(event.target.value)
    }
    const SetUserInformation =()=>{
        console.log("user information");
        console.log(profileName)
        console.log(email)
        console.log(password)
    }
    return (
        <div className="background-color">
            <div className="title" style={{ paddingTop: "200px", paddingLeft: "100px" }}>
                Welcome
            </div>
            <div style={{ width: "700px" }}>
                <input type="text" className="box" placeholder="Profile Name" onChange={handleChange_profile} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
                <input type="text" className="box" placeholder="Email" onChange={handleChange_email} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
                <input type="text" className="box" placeholder="Password" onChange={handleChange_password} style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }}></input>
            </div>
            <div className="button" onClick={SetUserInformation} style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "100px" }}>
                Register Now
            </div>
        </div>
    )
}

export default Home
