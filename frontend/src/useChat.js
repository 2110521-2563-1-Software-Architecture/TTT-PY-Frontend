import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const GET_THE_PAST_MESSAGES = "getThePastMessage";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const ERROR_EVENT = "errorEvent";

const SOCKET_SERVER_URL = "http://localhost:8081";
const useChat = (token, roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const [error, setError] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    setError(null);
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId, token },
    });

    socketRef.current.on(GET_THE_PAST_MESSAGES, (messages) => {
      setMessages(messages);
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      setMessages((messages) => [...messages, message]);
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
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, messageBody);
  };

  const getPastMessages = (token) => {
    socketRef.current.emit(GET_THE_PAST_MESSAGES, { token });
  };

  return { messages, sendMessage, getPastMessages, error };
};

export default useChat;
