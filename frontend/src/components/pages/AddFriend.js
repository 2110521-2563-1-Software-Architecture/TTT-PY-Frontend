import React, { useState, useEffect, Component } from 'react'
import '../Public.css';
import FriendList from '../FriendList'
import Util from "../../Util";
// import { useHistory } from "react-router-dom";
export class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className='row' style={{}}>
            <div className='col-md-4' style={{}}>
                <FriendList/>
            </div>
            <div className='col-md-8' style={{}}>
                <p className="profile-title"style={{marginLeft:'3%'}}>Add Friend</p>
                <input 
                    type="text"
                    className="row box" 
                    style={{marginTop: "20px",marginBottom: "20px",marginLeft: "4%",width:"70%"}} 
                    placeholder="Profile Name" 
                    value={this.state.username}
                    name = "username"
                    onChange={this.handleChange}
                />
              <button className="btn btn-dark" style={{
                                backgroundColor: "black", color: "white", fontWeight: "bold",
                                fontSize: "13px", width: "100px", marginLeft: "33%"}}
                                onClick={()=> this.handleClick(this.state.username)}>Add Friend</button>
            </div>
            </div>
        );
    }

    async handleClick (event) {
        // event.preventDefault();
        let data = await Util.addFriend(this.state.username);
        window.location.reload();
        // console.log(data);
    }
    handleChange(event){
        const value = event.target.value;
        this.setState({
            username: value,
        });
    }
}

export default AddFriend;