import React, { useState, useEffect, Component } from "react";
import "./Public.css";
import Util from "../Util";
import { useHistory } from "react-router-dom";
import FriendList from "./FriendList";

const FriendProfile = (props) => {
  const [friend, setFriend] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [isBlocked, setIsBlocked] = useState(props.selectedFriend.isBlocked);
  const history = useHistory();

  useEffect(() => {
    setFriendInfo(props.selectedFriend);
    setIsBlocked(props.selectedFriend.isBlocked);
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
  //unfinised function
  const onClickBlockBtn = async () => {
    console.log(props.selectedFriend.isBlocked);
    console.log("block");
    var response = await Util.blockFriend(friend.username);
    if (response.err) {
      console.log(response.err);
    } else {
      console.log(response.data);
      setIsBlocked(true);
      // window.location.reload();
    }
  };
  const onClickUnblockBtn = async () => {
    console.log(props.selectedFriend.isBlocked);
    console.log("unblock");
    var response = await Util.unBlockFriend(friend.username);
    if (response.err) {
      console.log(response.err);
    } else {
      console.log(response.data);
      setIsBlocked(false);
      // window.location.reload();
    }
  };
  const setFriendInfo = async (friend) => {
    console.log(friend);
    var response = await Util.getUser(friend.username);
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
          <div
            className="button-red"
            style={{ display: !isBlocked ? "block" : "none" }}
            onClick={onClickBlockBtn}
          >
            Block Friend
          </div>
          <div
            className="button-red"
            style={{
              backgroundColor: "#2A2D33",
              display: isBlocked ? "block" : "none",
            }}
            onClick={onClickUnblockBtn}
          >
            Unblock Friend
          </div>
        </>
      )}
    </div>
  );
};

export default FriendProfile;
