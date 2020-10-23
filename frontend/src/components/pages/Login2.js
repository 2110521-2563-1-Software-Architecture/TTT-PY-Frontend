import React, { useState, useEffect, Component } from "react";
import "../Public.css";
import Util from "../../Util";
import history from "../../History";
import { useHistory } from "react-router-dom";

export class Login2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
    };
    this.onClickLogin = this.onClickLogin.bind(this);
    // const history = useHistory();
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={(event) => this.onClickLogin(event)}>
          <div className="background-color">
            <div
              className="title"
              style={{ paddingTop: "100px", paddingLeft: "100px" }}
            >
              Sign In
            </div>

            <input
              type="text"
              id="username"
              className="row box"
              placeholder="Username"
              value={this.state.user}
              onChange={(e) => {
                this.setState({ user: e.target.value });
              }}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "100px",
              }}
              required
            ></input>

            <input
              type="password"
              id="password"
              className="row box"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "100px",
              }}
              required
            ></input>
            <button
              className="button"
              id="submit"
              type="submit"
              style={{
                marginTop: "40px",
                marginBottom: "20px",
                marginLeft: "100px",
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
  onClickLogin = async (event) => {
    event.preventDefault();
    let user = this.state.user;
    let password = this.state.password;
    let data = await Util.login(user, password);
    

    if (data.message) {
      //get error message from backend
      window.alert(data.message);
      this.setState({ password: "" });
    } else {

      // login success

      //check information
      console.log("token");
      console.log(data.data.token);
      console.log(user);

      // add user in formation to user storage
      localStorage.setItem("isSignIn", 'true');
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", user);

      // get email from backend
      let userInformation = await Util.getUser(user)
      let email = userInformation.data.email;
      localStorage.setItem("email",email);
      console.log(email);

      //change to Profile Page
      history.push(`/MyProfile`);
      window.location.reload();
    }
  };

  handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      document.getElementById("Submit").click();
    }
  };
}

export default Login2;
