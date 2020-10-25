import React, { useState } from "react";
import ChatRoomComponent from "../ChatRoomComponent";
import ChatRoomList from "../ChatRoomList";

function Chat() {
  const [chatRoom, setChatRoom] = useState(0);
  function onSelectChatroom(chatRoom) {
    setChatRoom(chatRoom);
  }
  return (
    <div className="row">
      <div className="col-md-4">
        <ChatRoomList selectChatRoom={onSelectChatroom} />
      </div>
      <div className="col-md-8">
        <ChatRoomComponent selectedChatRoom={chatRoom} />
      </div>
    </div>
  );
}

export default Chat;
