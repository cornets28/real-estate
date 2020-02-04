import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <h1>Home</h1>
        <Link to="/register" className="btn btn-lg custom-button" role="button">
          Register now
        </Link>
        <Link to="/login" className="btn btn-lg custom-button" role="button">
          Login
        </Link>
      </div>
    );
  }
}
