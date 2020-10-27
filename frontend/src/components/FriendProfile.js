import React, { useState, useEffect, Component } from 'react'
import './Public.css';
import Util from "../Util";
// import { useHistory } from "react-router-dom";
export class FriendProfile extends Component {
    render() {
        return (
            <div className="background-color">
                <div style={{ paddingTop: "100px" }}>
                    <img className="profile-image" src="userimage.jpeg"/>
                </div>
                <div className="profile-title">
                    Username
                </div>
                <div className="profile-data" style={{marginBottom:'20px'}}>
                    Email : pluem@pluem.com
                </div>
                <div className="button" style={{marginBottom:'20px'}}>
                    Chat Now
                </div>
                <div className="button">
                    Delete Friend
                </div>
        </div>
        );
    }
}

export default FriendProfile;