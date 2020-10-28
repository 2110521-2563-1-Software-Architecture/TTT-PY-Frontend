import React, { useEffect } from "react";
import useChat from "../../useChat";
import Util from "../../Util";

const ChatRoom = (props) => {
  const token = localStorage.getItem("token");
  const [roomId, setRoomId] = React.useState(props.selectedChatRoom.chatRoomID); // Gets roomId from URL
  const [friend, setFriend] = React.useState(props.selectedChatRoom.username);

  const {
    messages,
    sendMessage,
    getPastMessages,
    sendingMessages,
    error,
  } = useChat(token, roomId, friend); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  useEffect(() => {
    setRoomId(props.selectedChatRoom.chatRoomID);
    setFriend(props.selectedChatRoom.username);
  }, [props.selectedChatRoom]);

  useEffect(() => {
    getPastMessages(token);
    // setChatRoomInfo(roomId);
  }, [roomId]);

  // const setChatRoomInfo = async (roomId) => {
  //   var chatRoom = await Util.getChatRoomByID(roomId);
  //   console.log(chatRoom);
  //   if (chatRoom.err) {
  //     console.log(chatRoom.err);
  //   } else {
  //     var { chatRoomID, username1, username2 } = chatRoom.data;
  //     setFriend(
  //       username1 === localStorage.getItem("user") ? username2 : username1
  //     );
  //   }
  // };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.replace(/\s+/g, "") !== "")
      sendMessage({
        text: newMessage,
      });
    setNewMessage("");
    setTimeout(() => {
      document.getElementById("bottom").scrollTop = 9999999;
    }, 600);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return !roomId ? (
    <div></div>
  ) : (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossorigin="anonymous"
      ></link>
      {/* heading area */}
      <div className="header" style={{ paddingLeft: "50px" }}>
        <div className="header-name" style={{}}>
          {/* friend's name */}
          {friend}
        </div>
      </div>
      {/* main area */}
      <div className="bg-chatroom" id="bottom">
        <div>
          <ol>
            {messages.map((message, i) => {
              if (message.usernameSender === localStorage.getItem("user")) {
                return (
                  <div>
                    <div
                      className="message-chat"
                      style={{
                        background: "var(--chat-font-color)",
                        marginLeft: "auto",
                      }}
                    >
                      {message.messageText}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <div
                      className="message-chat"
                      style={{ margin: "10px", marginRight: "auto" }}
                    >
                      {message.messageText}
                    </div>
                  </div>
                );
              }
            })}

            {sendingMessages.map((message, i) => {
              return (
                <div>
                  <div
                    className="message-chat"
                    style={{
                      background: "var(--chat-font-color)",
                      marginLeft: "auto",
                    }}
                  >
                    {"sending:" + message.text}
                  </div>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
      {/* sending box area */}
      <div className="send-box">
        <div class="row">
          <div class="icon" style={{ width: "10%" }}>
            <i class="fa fa-plus"></i>
          </div>
          <div class="message">
            <div class="box-message" placeholder="message">
              <input
                class="input-message"
                placeholder="message"
                value={newMessage}
                onChange={handleNewMessageChange}
                onKeyDown={onEnterPress}
                placeholder="Write message..."
              ></input>
            </div>
          </div>
          <div class="icon" style={{ marginLeft: "2%" }}>
            <i class="fas fa-camera"></i>
          </div>
          <div class="icon">
            <i class="fas fa-paper-plane " onClick={handleSendMessage}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
