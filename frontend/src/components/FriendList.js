import React, { Component } from "react";
import "./FriendList.css";
import Util from "../Util";

export class FriendList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friend_list: [
        // {
        //   username: "Usergfgfg1",
        //   StartDate: "",
        //   IsBlocked: 0,
        // },
      ],
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <FriendListHeader amount={this.state.friend_list.length} />
          <div class="friend-list-container">
            {this.state.friend_list.map((friend) => {
              return (
                <Friend
                  key={friend.username}
                  friend={friend}
                  selectFriend={this.props.selectFriend}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    var friends = await Util.getFriend();
    if (friends.err) {
      console.log(friends.err);
    } else {
      this.setState({ friend_list: friends.data });
      console.log(friends.data);
    }
    // this.onClickUser(response._id);
  }
}

export default FriendList;

class FriendListHeader extends Component {
  render() {
    return (
      <div>
        <div class="friend-list-header">
          <div class="row">
            <div class="col-md-4" style={{}}>
              <div style={{ fontWeight: "bold" }}>Contact</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary-color)",
                }}
              >
                {this.props.amount} friends
              </div>
            </div>
            <div
              class="col-md-8"
              style={{ paddingLeft: "35%", paddingTop: "1.5%" }}
            >
              <button
                class="btn btn-dark"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  width: "100px",
                  padding: "",
                }}
              >
                Add Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Friend extends Component {
  render() {
    return (
      <div>
        <div
          className="row friend-box"
          style={{ marginLeft: "15px" }}
          onClick={() => this.props.selectFriend(this.props.friend.username)}
        >
          <div className="col-md-4" style={{ width: "100%", margin: "auto" }}>
            <img className="friend-image " src={"userimage.jpeg"} />
          </div>
          <div className="col-md-8" style={{ width: "100%", margin: "auto" }}>
            <div className="friend-name ">{this.props.friend.username}</div>
          </div>
        </div>
      </div>
    );
  }
}
