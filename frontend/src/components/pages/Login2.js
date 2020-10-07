import React, { useState, useEffect, Component } from 'react'
import '../Public.css';
import Util from "../../Util";

export class Login2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
        this.onClickLogin = this.onClickLogin.bind(this);
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={(event) => this.onClickLogin(event)}>
                    <div className="background-color">
                        <div className="title" style={{ paddingTop: "200px", paddingLeft: "100px" }}>
                            Sign In
                        </div>

                        <input type="email" id="email" className="row box" placeholder="Email" value={this.state.email}
                        onChange={(e) => {
                            this.setState({ email: e.target.value });}}
                        style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }} required></input>

                        <input type="password" id="password" className="row box" placeholder="Password" value={this.state.password}
                        onChange={(e) => {
                            this.setState({ password: e.target.value });}}
                            style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "100px" }} required></input>
                        
                        <button className="button" id="submit" type="submit" style={{ marginTop: "40px", marginBottom: "20px", marginLeft: "100px" }}>
                            Sign In
                    </button>
                    </div>
                </form>
            </div>
        );
    }
    onClickLogin = async (event) => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let data = await Util.login(email, password);
        await console.log(data);
        alert(password);
        if (data.errmsg) {
            window.alert(data.errmsg);
            this.setState({ password: "" });
        } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            //history.push("/profile");
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
