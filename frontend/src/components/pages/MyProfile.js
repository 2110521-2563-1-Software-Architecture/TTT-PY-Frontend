import React, { useState, useEffect, Component } from "react";
import "./../Public.css";
import Util from "../../Util";
import history from "../../History";
import imgs from "../../assets/img.js";

export class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "user",
      email: "email",
    };
    // const history = useHistory();
  }
  async componentDidMount() {
    const profileInfo = await Util.getMyprofile();
    await this.setState(profileInfo.data);
    //console.log(profileInfo.data)
    //console.log(this.state)
  }
  render() {
    const logout = () => {
      //remove all of current user information
      localStorage.setItem("token", null);
      localStorage.setItem("user", null);
      localStorage.setItem("email", null);
      localStorage.setItem("isSignIn", "false");
      history.push(`/Login`);
      window.location.reload();
    };
    const editProfile = () => {
      //console.log("going to edit profile page")
      history.push(`/EditProfile`);
      window.location.reload();
    };

    return (
      <div className="background-color" style={{ paddingLeft: "100px" }}>
        <div style={{ paddingTop: "100px" }}>
          <img
            className="profile-image"
            src={
              this.state.img != null ? imgs[this.state.img] : "user_icon.png"
            }
          />
        </div>
        <div className="profile-title">{this.state.username}</div>
        <div className="profile-data" style={{ marginBottom: "20px" }}>
          {this.state.email}
        </div>
        <div className="profile-data" style={{ marginBottom: "50px" }}>
          {this.state.firstName} {this.state.lastName}
        </div>
        <div>
          <button
            className="button"
            style={{ marginBottom: "20px" }}
            onClick={editProfile}
          >
            Edit Profile
          </button>
        </div>
        <div>
          <div className="button-red" onClick={logout}>
            Sign Out
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
