import React from "react";
import UserInfo from "./UserInfo";

function UserDetail (props) {
  const user = props.user;
  return (
    <div>
      <UserInfo user={user} />
      <img src={user.avatar} />
    </div>
  );
}

export default (UserDetail);
