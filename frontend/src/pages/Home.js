import React, { Component } from 'react'
import './Home.css';
import FriendList from "../components/FriendList";
export class Home extends Component{
    render(){
        return (
        <div class="page-content">
            <FriendList/>
        </div>
    )
    }
}

export default Home
