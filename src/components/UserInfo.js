import React, { Component } from 'react';

function UserInfo (props){
  var user = props.user;
    return (
       <div>
        <h3>{user.first_name} {user.last_name}</h3>
        <h4>{user.occupation}</h4>
        <p>{user.phone}</p>
        <p>
          {user.address}
        </p>
      </div>
    );
}

export default UserInfo;
