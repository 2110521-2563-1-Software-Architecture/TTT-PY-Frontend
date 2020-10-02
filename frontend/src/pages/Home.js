import React from 'react'
import '../components/Public.css';
function Home() {
    return (
        <div className="background-color">
            <div className="title" style={{paddingTop:"200px",paddingLeft:"100px"}}>
                WELCOME
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Profile Name
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Email
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Password
            </div>
            <div className="box" style={{marginTop:"20px",marginBottom:"20px",marginLeft:"100px"}}>
                Confirm Password
            </div>
            <div className="button" style={{marginTop:"40px",marginBottom:"20px",marginLeft:"100px"}}>
                Register Now
            </div>
        </div>
    )
}

export default Home