import React, { useState, useEffect, Component } from 'react'
import './../Public.css';
import Util from "../../Util";
import history from "../../History";

export class MyProfile extends Component {
    render() {
        const logout = () => {
            //remove all of current user information
            localStorage.setItem('token', null);
            localStorage.setItem("user", null);
            localStorage.setItem("email",null);
            localStorage.setItem('isSignIn', 'false')
            history.push(`/Login`);
            window.location.reload();
        }
        const editProfile = ()=>{
            console.log("going to edit profile page")
            history.push(`/EditProfile`);
            window.location.reload();
        }
        return (
            <div className="background-color" style={{ paddingLeft: '100px' }}>
                <div style={{ paddingTop: "100px" }}>
                    <img className="profile-image" src="userimage.jpeg" />
                </div>
                <div className="profile-title">
                    {localStorage.getItem('user')}
                </div>
                <div className="profile-data" style={{ marginBottom: '50px' }}>
                    {localStorage.getItem('email')}
                </div>
                <div>
                    <button className="button" style={{ marginBottom: '20px' }} onClick={editProfile}>
                        Edit Profile
                    </button>
                </div>
                <div>
                    <button className="button" onClick={logout}>
                        Sign Out
                    </button>
                </div>

            </div>
        );
    }
}

export default MyProfile;