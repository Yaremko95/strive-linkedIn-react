import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Base64 } from "js-base64";
import Cookies from "js-cookie";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {},
      success: true,
    };
  }

  registerUser = async (e) => {
    e.preventDefault();
    const { credentials } = this.state;
    try {
      let response = await fetch("http://localhost:3006/profile/", {
        method: "POST",
        body: JSON.stringify(this.state.credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let user = await response.json();
        this.props.history.push("/login");
      } else {
        this.setState({ success: false });
      }
    } catch (err) {}
  };
  login = async (e) => {
    e.preventDefault();
    const { credentials } = this.state;
    const header = `${this.state.email}:${this.state.password}`;
    console.log(
      // Base64.encode(
      //   `${this.state.credentials.email}:${this.state.credentials.password}`)
      `Bearer ${localStorage.getItem("accessToken")}`
    );
    console.log(header);

    try {
      let response = await fetch("http://localhost:3006/profile/login", {
        method: "POST",
        body: JSON.stringify(this.state.credentials),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // "Basic " +
          // Base64.encode(
          //   `${this.state.credentials.username}:${this.state.credentials.password}`
          // ),
        },
      });
      if (response.ok) {
        let user = await response.json();
        user.password = this.state.credentials.password;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem("user")));
        this.props.history.push("/profile/me");
        this.props.setTrigger(!this.props.triggerNav);
      } else {
        this.setState({ success: false });
      }
    } catch (err) {}
  };

  render() {
    console.log(this.state);
    const { credentials } = this.state;
    return React.cloneElement(this.props.children, {
      ...this.state,
      setData: (state) =>
        this.setState({ credentials: { ...credentials, ...state } }),
      register: (e) => this.registerUser(e),
      login: (e) => this.login(e),
    });
  }
}

export default withRouter(Auth);
