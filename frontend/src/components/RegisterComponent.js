import React, { useState, useEffect } from "react";
//import history from "../../History";
import ReCAPTCHA from "react-google-recaptcha";
import Util from "./../Util";
import "./Public.css";
import { useHistory } from "react-router-dom";

function RegisterComponent() {
    const [userAccount, setUserAccount] = useState(false);
    const [user, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, checkPassword] = useState("");
    const [recaptchaResponse, setReCaptcha] = useState("");
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
    // captcha function
    const handleChange_ReCaptcha = (event) => {
        setReCaptcha(event.target.value);
    }
    const SetUserInformation = async () => {
        if (confirm_password != password) {
            alert("password and confirm password must be the same");
            setUserAccount(false);
        } else {
            setUserAccount(true);
            let data = await Util.register(user, email, password)
            console.log("data");
            console.log(data);
            if (data) {
                window.alert(data.message);
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
        <div className="row background-color">
            <div
                className="title"
                style={{ paddingTop: "100px", paddingLeft: "100px" }}>
                Welcome
            </div>
            <div style={{ width: "700px" }}>
                <input
                    type="text"
                    className="row box"
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
                    className="row box"
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
                    className="row box"
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
                    className="row box"
                    placeholder="Confirm Password"
                    onChange={handleChange_confirmPassword}
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "100px",
                    }}
                ></input>
                <ReCAPTCHA 
                    sitekey="Your client site key" 
                    onChange={handleChange_ReCaptcha} 
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        marginLeft: "200px",
                    }}/>,
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

export default RegisterComponent;
