import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {},
      success: true,
    };
  }

  registerUser = async () => {
    const { credentials } = this.state;
    try {
      let response = await fetch(
        "https://agile-brushlands-83006.herokuapp.com/profile/",
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
    } catch (e) {}
  };
  login = async () => {
    const { credentials } = this.state;
    try {
      let response = await fetch(
        "https://agile-brushlands-83006.herokuapp.com/profile/login",
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
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/me");
      } else {
        this.setState({ registered: false });
      }
    } catch (e) {}
  };

  render() {
    const { credentials } = this.state;
    return React.cloneElement(this.props.children, {
      ...this.state,
      setData: (state) =>
        this.setState({ credentials: { ...credentials, ...state } }),
      registerUser: () => this.registerUser(),
      login: () => this.login(),
    });
  }
}

export default withRouter(Auth);
