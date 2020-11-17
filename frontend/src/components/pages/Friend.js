import React, { useState } from "react";
import FriendList from "../FriendList";
import FriendProfile from "../FriendProfile";

function Friend() {
  const [friend, setFriend] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  function onSelectFriend(friend) {
    console.log(friend);
    setFriend(friend);
  }
  return (
    <div className="row" style={{}}>
      <div className="col-md-4" style={{
          minWidth: "300px",
          maxWidth: "300px",
          borderRight: "2px solid var(--bg-secondary-color)",
        }}>
        <FriendList selectFriend={onSelectFriend} />
      </div>
      <div className="col-md-8" style={{}}>
        <FriendProfile selectedFriend={friend} />
        {/* <div style={{background: 'white', margin: 'auto', height: '100%'}}> No Friend</div> */}
      </div>
    </div>
  );
}

export default Friend;
