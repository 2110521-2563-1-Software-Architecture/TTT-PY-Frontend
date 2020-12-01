import React, { useState } from "react";
import ChatRoomComponent from "../ChatRoomComponent";
import ChatRoomList from "../ChatRoomList";
import ChatRoom from "./ChatRoom";

function Chat() {
  const [chatRoom, setChatRoom] = useState("");
  function onSelectChatroom(chatRoom) {
    setChatRoom(chatRoom);
    //console.log(chatRoom);
  }
  return (
    <div className="row">
      <div
        className="col-md-4"
        style={{
          minWidth: "300px",
          maxWidth: "300px",
          borderRight: "2px solid var(--bg-secondary-color)",
        }}
      >
        <ChatRoomList selectChatRoom={onSelectChatroom} />
      </div>
      <div className="col-md-8" style={{}}>
        {/* <ChatRoomComponent selectedChatRoom={chatRoom} /> */}
        <ChatRoom selectedChatRoom={chatRoom} />
      </div>
    </div>
  );
}

export default Chat;
