import React, { useState, useEffect, Component } from 'react'
import './Public.css';
import Util from "../Util";
import { useHistory } from "react-router-dom";
import history from "../History";

export class MyProfile extends Component {
    render() {
        const logout = () => {
            // let data = Util.login(email,password)
            // localStorage.setItem('token', data.token);
            // setJwt(data.token);
            localStorage.setItem('isSignIn', 'false')
            history.push(`/Login2`);
            window.location.reload();
        }
        return (
            <div className="background-color" style={{ paddingLeft: '100px' }}>
                <div style={{ paddingTop: "100px" }}>
                    <img className="profile-image" src="userimage.jpeg" />
                </div>
                <div className="profile-title">
                    Username
                </div>
                <div className="profile-data" style={{ marginBottom: '50px' }}>
                    Email : pluem@pluem.com
                </div>
                <div className="button" style={{ marginBottom: '20px' }}>
                    Edit Profile
                </div>
                <div className="button" onClick={logout}>
                    Sign Out
                </div>
            </div>
        );
    }
}

export default MyProfile;