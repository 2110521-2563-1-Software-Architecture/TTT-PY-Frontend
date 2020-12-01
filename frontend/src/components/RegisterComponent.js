import React, { useState, useEffect } from "react";
//import history from "../../History";
import ReCAPTCHA from "react-google-recaptcha";
import Util from "./../Util";
import "./Public.css";
import { useHistory } from "react-router-dom";

function RegisterComponent() {
  const [userAccount, setUserAccount] = useState(false);
  const [user, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, checkPassword] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState("");
  const recaptchaRef = React.createRef();
  const history = useHistory();
  const onReCaptchaChange = (response) => {
    setRecaptchaResponse(response);
  };
  const handleChange_user = (event) => {
    setUsername(event.target.value);
  };
  const handleChange_firstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChange_lastName = (event) => {
    setLastName(event.target.value);
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
  const SetUserInformation = async () => {
    if (confirm_password != password) {
      alert("password and confirm password must be the same");
      setUserAccount(false);
    } else if (user === '' || email === '' || password === '' || confirm_password === '') {
      alert("please fill all of the data");
      setUserAccount(false);
    } else {
      setUserAccount(true);
      //   recaptchaRef.current.reset();
      let data = await Util.register(user, firstName, lastName, email, password, recaptchaResponse);
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
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    // call API from back and link to login
  };
  return (
    <div className="row background-color">
      <div style={{ width: "700px" }}>
        <div
          className="title"
          style={{ paddingTop: "100px", paddingLeft: "100px" }}
        >
          Welcome
        </div>
        <input
          type="text"
          className="row box"
          placeholder="Username"
          onChange={handleChange_user}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "100px",
          }}
          required={true}
        ></input>
        <input
          type="text"
          className="row box"
          placeholder="Firstname"
          onChange={handleChange_firstName}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "100px",
          }}
          required={true}
        ></input>
        <input
          type="text"
          className="row box"
          placeholder="Lastname"
          onChange={handleChange_lastName}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "100px",
          }}
          required={true}
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
        <div style={{ paddingLeft: "100px" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={onReCaptchaChange}
          />
        </div>
        <div
          className="button"
          onClick={SetUserInformation}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "100px",
          }}
        >
          Register Now
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
