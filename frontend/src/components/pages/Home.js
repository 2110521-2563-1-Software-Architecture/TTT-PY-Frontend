import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Public.css";
import Util from "../../Util";
function Home() {
    const [userAccount, setUserAccount] = useState(false);
    const [user, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, checkPassword] = useState("");
    const history = useHistory();
    const handleChange_user = (event) => {
        setUsername(event.target.value);
    };
    const handleChange_email = (event) => {
        setEmail(event.target.value);
    };
    const handleChange_password = (event) => {
        setPassword(event.target.value);
    };
    const handleChange_confirmPassword = (event) => {
        checkPassword(event.target.value);
        if (confirm_password == password) setUserAccount(true);
        console.log("userAccount :", userAccount);
    };
    const SetUserInformation = () => {
        if (confirm_password != password) {
            alert("password and confirm password must be the same");
            setUserAccount(false);
        } else {
            setUserAccount(true);
            let data = Util.register(user, email, password)
            console.log(data);
            if (data.errmsg) {
                window.alert(data.errmsg);
            } else {
                history.push(`/login`);
            }
        }
        console.log("user information");
        console.log(user);
        console.log(email);
        console.log(password);
        // call API from back and link to login
    };
    return (
        <div className="background-color">
            <div
                className="title"
                style={{ paddingTop: "100px", paddingLeft: "100px" }}
            >
                Welcome
      </div>
            <div style={{ width: "700px" }}>
                <input
                    type="text"
                    className="box"
                    placeholder="username"
                    onChange={handleChange_user}
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}
                ></input>
                <input
                    type="email"
                    className="box"
                    placeholder="Email"
                    onChange={handleChange_email}
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}
                ></input>
                <input
                    type="password"
                    className="box"
                    placeholder="Password"
                    onChange={handleChange_password}
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}
                ></input>
                <input
                    type="password"
                    className="box"
                    placeholder="Confirm Password"
                    onChange={handleChange_confirmPassword}
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}
                ></input>
            </div>
            <div
                className="button"
                onClick={SetUserInformation}
                style={{
                    marginTop: "40px",
                    marginBottom: "20px",
                    marginLeft: "100px",
                }}
            >
                Register Now
      </div>
        </div>
    );
}

export default Home;
