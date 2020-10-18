import React, { useState, useEffect, Component } from 'react'
import './Public.css';
import Util from "../Util";
// import { useHistory } from "react-router-dom";
export class FriendProfile extends Component {
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