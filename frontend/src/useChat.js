import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

import { v4 as uuidv4 } from "uuid";

const GET_THE_PAST_MESSAGES = "getThePastMessage";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const ERROR_EVENT = "errorEvent";

const useChat = (token, roomId, friend) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const [sendingMessages, setSendingMessages] = useState([]);
  const [error, setError] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    setError(null);
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(
      `http://${process.env.REACT_APP_API_ENDPOINT}/chat`,
      {
        query: { roomId, token, friend },
      }
    );

    socketRef.current.on(GET_THE_PAST_MESSAGES, (messages) => {
      setMessages(messages);
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (incommingMessage) => {
      setSendingMessages((sendingMessages) => {
        return sendingMessages.filter(
          (message) => message.uuid !== incommingMessage.uuid
        );
      });
      setMessages((messages) => [...messages, incommingMessage]);
    });

    socketRef.current.on(ERROR_EVENT, (message) => {
      setError(message);
      setMessages([]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    messageBody.uuid = uuidv4();
    //console.log([...sendingMessages, messageBody]);
    setSendingMessages([...sendingMessages, messageBody]);
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, messageBody);
  };

  const getPastMessages = (token) => {
    socketRef.current.emit(GET_THE_PAST_MESSAGES, { token });
  };

  return { messages, sendMessage, getPastMessages, sendingMessages, error };
};

export default useChat;
