import React, { useState, useEffect } from "react";
import './../RegisterComponent'
import RegisterComponent from "./../RegisterComponent";

function Home() {
    const isSignin = localStorage.getItem('isSignIn')
    if(isSignin == 'true'){
        return(
            <div></div>
        )
    }
    else{
        console.log('isnt sign in');
        return(
            <RegisterComponent/>
        )
    }
}

export default Home;
