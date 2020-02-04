import React, { Component } from "react";
import axios from "axios";
// import Register from "./index";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
      success: false
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  submitHandler(event) {
    event.preventDefault();
    const { name, email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3000/signups",
        {
          user: {
            name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.history.push("/");
          this.setState({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: {},
            success: true
          });
        }
      })
      .catch(error => {
        this.setState({
          registrationErrors: error
        });
      });

    event.preventDefault();
  }

  successNotification() {
    let { success } = this.state;
    if (!success) {
      return null;
    }
    return (
      <div
        className=""
      >
        <div className="">
          <h3 className="">
            Your account is sucessfully created
          </h3>
        </div>
        <div className="">
          <div
            className=""
            onClick={() => this.props.history.push("/login")}
          >
            <div>
              <h2>
                <FontAwesomeIcon icon={faSignInAlt} />
              </h2>
            </div>
            <div>
              <h3 className="">Login</h3>
            </div>
          </div>
          <div
            className=""
            onClick={() => this.setState({ success: false })}
          >
            <div>
              <h2>
                <FontAwesomeIcon icon={faWindowClose} />
              </h2>
            </div>
            <div>
              <h3 className="">Close</h3>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.successNotification()}
        <form onSubmit={this.submitHandler}>
          <input
            type="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button onClick={event => this.submitHandler(event)} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
