import React, { useState, useEffect, Component } from "react";
import "../Public.css";
import FriendList from "../FriendList";
import Util from "../../Util";
import history from "../../History";
// import { useHistory } from "react-router-dom";
export class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      friend: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSelectFriend = async (friend) => {
    //console.log(friend);
    this.state.friend = friend;
  };
  render() {
    return (
      <div className="row" style={{ minWidth: "1000px" }}>
        {/* <div
          className="col-md-4"
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            borderRight: "2px solid var(--bg-secondary-color)",
          }}
        >
          <FriendList selectFriend={this.onSelectFriend}/>
        </div> */}
        <div className="col-md-8" style={{ width: "100%", margin: "auto" }}>
          <p className="profile-title" style={{ marginLeft: "3%" }}>
            Add Friend
          </p>
          <input
            type="text"
            className="row box"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "4%",
              width: "70%",
            }}
            placeholder="Profile Name"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <row style={{ width: "100%" }}>
            <button
              className="button"
              style={{ margin: "auto" }}
              onClick={() => this.handleClick(this.state.username)}
            >
              Add Friend
            </button>
          </row>
        </div>
      </div>
    );
  }

  async handleClick(event) {
    // event.preventDefault();
    let data = await Util.addFriend(this.state.username);
    history.push(`/Friend`);
    window.location.reload();
    // //console.log(data);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  }
}

export default AddFriend;
