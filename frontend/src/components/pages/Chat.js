import React from "react";
import ChatRoomComponent from "../ChatRoomComponent";
import ChatRoomList from "../ChatRoomList";

function Chat() {
  return (
    <div className="row">
      <div className="col-md-4">
        <ChatRoomList />
      </div>
      <div className="col-md-8">
        <ChatRoomComponent />
      </div>
    </div>
  );
}

export default Chat;
