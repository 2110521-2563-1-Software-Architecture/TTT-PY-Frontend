import React, { useState, useEffect, Component } from 'react'
import './Public.css';
import Util from "../Util";
// import { useHistory } from "react-router-dom";
export class MyProfile extends Component {
    render() {
        return (
            <div className="background-color">
                <div
                    className="title"
                    style={{ paddingTop: "100px" }}>
                    Username
                </div>
                <div className="header-name" style={{marginBottom:'20px'}}>
                    Email : pluem@pluem.com
                </div>
                <div className="button" style={{marginBottom:'20px'}}>
                    Edit Profile
                </div>
                <div className="button">
                    Log Out
                </div>
        </div>
        );
    }
}

export default MyProfile;