import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Register from "../components/Register/Register";

export default class Home extends Component {
  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
    this.props.history.push("/Dashboad");
  };
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
