import React, { Component, useEffect, useState } from "react";
import "./FriendList.css"; //Please Edit Here
import useChatroom from "../useChatroom";

import Util from "../Util";

function ChatRoomList(props) {
  const token = localStorage.getItem("token");
  const { resetRefresh, refresh, error } = useChatroom(token);
  const [chatroomList, setChatroomList] = useState([]);

  const getChatRooms = async () => {
    var response = await Util.getChatRooms();
    if (response.err) {
      console.log(response.err);
    } else {
      var chatRoomList = response.data.map((chatRoom) => {
        var { chatRoomID, username1, username2 } = chatRoom;
        return {
          chatRoomID,
          username:
            username1 === localStorage.getItem("user") ? username2 : username1,
        };
      });
      setChatroomList(chatRoomList);
    }
  };

  useEffect(() => {
    getChatRooms();
  }, []);

  useEffect(() => {
    getChatRooms();
    resetRefresh();
  }, [refresh]);

  return (
    <div className="row">
      <div className="col-md-12">
        <ChatRoomListHeader amount={chatroomList.length} />
        <div class="friend-list-container">
          {chatroomList.map((chatroom) => {
            return (
              <ChatRoom
                key={ChatRoom.chatRoomID}
                ChatRoom={chatroom}
                selectChatRoom={props.selectChatRoom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
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
                {this.props.amount} chatrooms
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
          onClick={() => {
            this.props.selectChatRoom(this.props.ChatRoom);
            console.log(this.props.ChatRoom);
          }}
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
