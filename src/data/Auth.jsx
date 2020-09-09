import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { setUser } from "../store/users/actions";
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
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL_API}/profile/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.credentials),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    // const { credentials } = this.state;
    // const header = `${this.state.username}:${this.state.password}`;
    // console.log(
    //   Base64.encode(
    //     `${this.state.credentials.username}:${this.state.credentials.password}`
    //   )
    // );
    // console.log(header);

    try {
      let response = await fetch(`http://localhost:3006/profile/login`, {
        method: "POST",
        body: JSON.stringify(this.state.credentials),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        console.log(console.log(this.props));
        const user = await response.json();
        console.log("response", user.user);
        this.props.setUser(user);
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

export default compose(
  withRouter,
  connect(
    (state) => ({ user: state.user }),
    (dispatch) => ({
      setUser: (data) => {
        console.log("redux", data);
        dispatch(setUser(data));
      },
    })
  )
)(Auth);
