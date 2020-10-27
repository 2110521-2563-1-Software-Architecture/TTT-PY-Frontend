import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const REFRESH_CHATROOM = "refreshChatroom";

const SOCKET_SERVER_URL = "http://localhost:8081";

const useChatroom = (token) => {
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    setError(null);
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(`${SOCKET_SERVER_URL}/chatrooms`, {
      query: { token },
    });

    socketRef.current.on(REFRESH_CHATROOM, async () => {
      setRefresh(true);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const resetRefresh = () => {
    setRefresh(false);
  };

  return { resetRefresh, refresh, error };
};

export default useChatroom;
