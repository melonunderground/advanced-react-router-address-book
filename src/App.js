import React, { Component } from "react";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import {connect} from "react-redux";
import {loadUsers} from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <div>
        <SearchBoxContainer />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      dispatch(loadUsers());
    }
  };
}
export default connect(null,mapDispatchToProps)(App);
