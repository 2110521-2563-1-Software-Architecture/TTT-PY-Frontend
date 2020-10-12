import React from "react";
import useChat from "../../useChat";

const ChatTest = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.replace(/\s+/g, "") !== "") sendMessage(newMessage);
    setNewMessage("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Room: {roomId}</h1>
      <div>
        <ol>
          {messages.map((message, i) => {
            return (
              <li
                key={i}
                style={{ color: message.ownedByCurrentUser ? "blue" : "white" }}
              >
                {message.body}
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
