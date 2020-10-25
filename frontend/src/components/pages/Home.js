import React, { useState, useEffect } from "react";
import "./../RegisterComponent";
import RegisterComponent from "./../RegisterComponent";
import Friend from "./Friend";

function Home() {
  const isSignin = localStorage.getItem("isSignIn");
  if (isSignin == "true") {
    return <Friend />;
  } else {
    console.log("isnt sign in");
    return <RegisterComponent />;
  }
}

export default Home;
