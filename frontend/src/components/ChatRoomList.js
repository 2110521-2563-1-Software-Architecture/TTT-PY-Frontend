import React, { Component } from "react";
import "./FriendList.css"; //Please Edit Here
import Util from "../Util";

export class ChatRoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatroom_list: [
        {
          chatRoomID: 1,
          username: "Usergfgfg1",
        },
        {
          chatRoomID: 2,
          username: "Usergfgfg1",
        },
      ],
      amounts: 12,
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <ChatRoomListHeader />
          <div class="friend-list-container">
            {this.state.chatroom_list.map((chatroom) => {
              return (
                <ChatRoom
                  key={ChatRoom.chatRoomID}
                  ChatRoom={chatroom}
                  selectChatRoom={this.props.selectChatRoom}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    var response = await Util.getChatRooms();
    if (response.err) {
      console.log(response.err);
    } else {
      var chatRoomList = response.data.map((chatRoom) => {
        var { chatRoomID, username1, username2 } = chatRoom;
        return {
          chatRoomID,
          username:
            (username1 === localStorage.getItem("token") && username1) ||
            username2,
        };
      });
      console.log(chatRoomList);
      this.setState({ chatroom_list: chatRoomList });
    }
  }
}

export default ChatRoomList;

class ChatRoomListHeader extends Component {
  render() {
    return (
      <div>
        <div class="friend-list-header">
          <div class="row">
            <div class="col-md-4" style={{}}>
              <div style={{ fontWeight: "bold" }}>Chat</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary-color)",
                }}
              >
                12 chatrooms
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

class ChatRoom extends Component {
  render() {
    return (
      <div>
        <div
          className="row friend-box"
          style={{ marginLeft: "15px" }}
          onClick={() =>
            this.props.selectChatRoom(this.props.ChatRoom.chatRoomID)
          }
        >
          <div className="col-md-4" style={{ width: "100%", margin: "auto" }}>
            <img className="friend-image " src={"userimage.jpeg"} />
          </div>
          <div className="col-md-8" style={{ width: "100%", margin: "auto" }}>
            <div className="friend-name ">{this.props.ChatRoom.username}</div>
          </div>
        </div>
      </div>
    );
  }
}
