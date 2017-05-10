import React from "react";

function SearchBox(props) {
  return (
    <input onChange={
      (e) => {
          props.setSearchText(e.target.value);
      }
    } />
  );
}

export default (SearchBox);

