import React, { Component, useEffect, useState } from "react";
import "./FriendList.css"; //Please Edit Here
import useChatroom from "../useChatroom";

import Util from "../Util";
import imgs from "../assets/img";

function ChatRoomList(props) {
  const token = localStorage.getItem("token");
  const { resetRefresh, refresh, error } = useChatroom(token);
  const [chatroomList, setChatroomList] = useState([]);

  const getChatRooms = async () => {
    var response = await Util.getChatRooms();
    if (response.err) {
      //console.log(response.err);
    } else {
      var chatRoomList = response.data.map((chatRoom) => {
        var { chatRoomID, Friend } = chatRoom;
        return {
          chatRoomID,
          username: Friend.username,
          img: Friend.img,
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
            <div class="col-md-12" style={{}}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "var(--text-primary-color)",
                }}
              >
                Chat
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "var(--text-secondary-color)",
                }}
              >
                {this.props.amount} chatrooms
              </div>
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
            //console.log(this.props.ChatRoom);
          }}
        >
          <div className="col-md-4" style={{ width: "100%", margin: "auto" }}>
            <img
              className="friend-image "
              src={
                this.props.ChatRoom.img != null
                  ? imgs[this.props.ChatRoom.img]
                  : "user_icon.png"
              }
            />
          </div>
          <div className="col-md-8" style={{ width: "100%", margin: "auto" }}>
            <div className="friend-name ">{this.props.ChatRoom.username}</div>
          </div>
        </div>
      </div>
    );
  }
}
