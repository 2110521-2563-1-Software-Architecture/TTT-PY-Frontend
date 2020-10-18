import React, { useState, useEffect, Component } from 'react'
import '../Public.css';
import Util from "../../Util";
import history from "../../History";
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
                        <div className="title" style={{ paddingTop: "200px", paddingLeft: "100px" }}>
                            Sign In
                        </div>

                        <input type="text" id="username" className="row box" placeholder="username Address" value={this.state.user}
                        onChange={(e) => {
                            this.setState({ user: e.target.value });}}
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
        let user = this.state.user;
        let password = this.state.password;
        let data = await Util.login(user, password);
        //await console.log(data);
        if(data.message) {
            window.alert(data.message);
            this.setState({ password: "" });
        } else {
            console.log("token")
            console.log(data.data.token)
            console.log(JSON.stringify(user))
            localStorage.setItem("token", data.data.token);
            //localStorage.setItem("user", JSON.stringify(user));
            history.push("/chat");
        }
    };

    handleOnKeyDown = (event) => {
        if (event.keyCode === 13) {
            document.getElementById("Submit").click();
        }
    };
}

export default Login2;
