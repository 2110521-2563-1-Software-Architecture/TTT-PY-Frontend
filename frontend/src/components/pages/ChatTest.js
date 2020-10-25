import React, { useEffect } from "react";
import useChat from "../../useChat";

const ChatTest = (props) => {
  const token = localStorage.getItem("token");
  const [roomId, setRoomId] = React.useState(""); // Gets roomId from URL
  const { messages, sendMessage, getPastMessages, error } = useChat(
    token,
    roomId
  ); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  useEffect(() => {
    getPastMessages(token);
  }, [roomId]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.replace(/\s+/g, "") !== "")
      sendMessage({
        text: newMessage,
        token: token,
      });
    setNewMessage("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRoomId = (event) => {
    setRoomId(event.target.value);
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Room: {roomId}</h1>
      <input value={roomId} onChange={handleRoomId} placeholder="Room id" />
      <h1 style={{ color: "red" }}>{error ? error : null}</h1>
      <div>
        <ol>
          {messages.map((message, i) => {
            return (
              <li
                key={i}
                style={{
                  color:
                    message.usernameSender === localStorage.getItem("user")
                      ? "blue"
                      : "white",
                }}
              >
                {message.messageText}
              </li>
            );
          })}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        onKeyDown={onEnterPress}
        placeholder="Write message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatTest;
