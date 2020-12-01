import React, { Component } from "react";
import "./FriendList.css";
import Util from "../Util";
import history from "../History";
import imgs from "../assets/img";

export class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend_list: [],
    };
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            {/* <FriendListHeader /> */}
            <div class="friend-list-header">
              <div class="row">
                <div class="col-md-6" style={{}}>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "var(--text-primary-color)",
                    }}
                  >
                    Contact
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "var(--text-secondary-color)",
                    }}
                  >
                    {this.state.friend_list.length} friends
                  </div>
                </div>
                <div
                  class="col-md-6"
                  style={{ paddingLeft: "14%", paddingTop: "1.5%" }}
                >
                  <button
                    class="button"
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      width: "100px",
                      lineHeight: "0px",
                      height: "30px",
                      padding: "",
                    }}
                    onClick={() => this.onClick()}
                    disabled={
                      window.location == "http://localhost:3000/addFriend"
                        ? true
                        : false
                    }
                  >
                    Add Friend
                  </button>
                </div>
              </div>

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
        </div>
      </div>
    );
  }

  async componentDidMount() {
    // console.log(window.location);
    var response = await Util.getFriend();
    await this.setState({
      friend_list: response.data,
    });
    console.log(this.state);
  }

  onClick = () => {
    // console.log("click");
    history.push(`/addFriend`);
    window.location.reload();
  };
}

export default FriendList;

class Friend extends Component {
  render() {
    return (
      <div>
        <div
          className="row friend-box"
          style={{ marginLeft: "15px" }}
          onClick={() => this.props.selectFriend(this.props.friend)}
        >
          <div className="col-md-4" style={{ width: "100%", margin: "auto" }}>
            <img
              className="friend-image "
              src={
                this.props.friend.User.img != null
                  ? imgs[this.props.friend.User.img]
                  : "user_icon.png"
              }
            />
          </div>
          <div className="col-md-8" style={{ width: "100%", margin: "auto" }}>
            <div className="friend-name ">{this.props.friend.username}</div>
          </div>
        </div>
      </div>
    );
  }
}
