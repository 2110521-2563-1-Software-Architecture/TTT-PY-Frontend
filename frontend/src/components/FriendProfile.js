import React, { useState, useEffect, Component } from "react";
import "./Public.css";
import Util from "../Util";
import { useHistory } from "react-router-dom";

const FriendProfile = (props) => {
  const [friend, setFriend] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const history = useHistory();
  useEffect(() => {
    setFriendInfo(props.selectedFriend);
  }, [props.selectedFriend]);
  const onChatNow = async () => {
    var response = await Util.createChatroom(friend.username);
    if (response.err) {
      console.log(response.err);
    } else {
      console.log(response.data);
      history.push("/chat");
    }
  };
  const setFriendInfo = async (username) => {
    var response = await Util.getUser(username);
    if (response.err) {
      console.log(response.err);
    } else {
      console.log(response.data);
      setFriend(response.data);
    }
  };

  return (
    <div className="background-color">
      {friend.username && (
        <>
          <div style={{ paddingTop: "100px" }}>
            <img className="profile-image" src="userimage.jpeg" />
          </div>
          <div className="profile-title">{friend.username}</div>
          <div className="profile-data" style={{ marginBottom: "20px" }}>
            Name : {`${friend.firstName}  ${friend.lastName}`}
          </div>
          <div className="profile-data" style={{ marginBottom: "20px" }}>
            Email : {friend.email}
          </div>
          <div
            className="button"
            style={{ marginBottom: "20px" }}
            onClick={onChatNow}
          >
            Chat Now
          </div>
          <div className="button">Delete Friend</div>
        </>
      )}
    </div>
  );
};

export default FriendProfile;
