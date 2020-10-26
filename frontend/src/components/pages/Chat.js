import React, { useState } from "react";
import ChatRoomComponent from "../ChatRoomComponent";
import ChatRoomList from "../ChatRoomList";
import ChatRoom from "./ChatRoom";

function Chat() {
  const [chatRoom, setChatRoom] = useState("");
  function onSelectChatroom(chatRoom) {
    setChatRoom(chatRoom);
  }
  return (
    <div className="row">
      <div className="col-md-4" style={{maxWidth:'350px', borderRight: '2px solid var(--bg-secondary-color)'}}>
        <ChatRoomList selectChatRoom={onSelectChatroom} />
      </div>
      <div className="col-md-8">
        {/* <ChatRoomComponent selectedChatRoom={chatRoom} /> */}
        <ChatRoom selectedChatRoom={chatRoom} />
      </div>
    </div>
  );
}

export default Chat;
