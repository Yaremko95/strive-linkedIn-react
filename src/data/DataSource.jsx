import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auth from "../authorization/Auth";

class DataSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      users: [],
      experience: [],
      posts: [],
    };
    this.url = "https://striveschool.herokuapp.com/api/profile/";
    this.urlPost = "https://striveschool.herokuapp.com/api/posts/";
  }
  componentDidMount() {
    this.fetchData();
    this.fetchExperience();
    this.fetchPost();
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.fetchData();
    }
  };

  fetchData = async () => {
    let { query } = this.props;
    if (query !== "all") {
      if (query === "me") {
        query = Auth.user;
      }
      this.fetchUser(query);
      this.fetchExperience(query);
      this.fetchPost(query);
    }
    this.fetchUsers();
  };

  fetchExperience = async (query) => {
    let response = await fetch(this.url + query + "/experiences", {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let experience = await response.json();
    this.setState({ experience });
  };

  fetchUser = async (query) => {
    let response = await fetch(this.url + query, {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let user = await response.json();
    this.setState({ user });
    console.log(this.state.user);
  };
  fetchUsers = async () => {
    let response = await fetch(this.url, {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let users = await response.json();
    this.setState({ users });
    // console.log(this.state.users);
  };

  render() {
    const { user, users, experience, profilestrength } = this.state;
    return users ? (
      React.cloneElement(this.props.children, {
        users,
        user,
        experience,
        newFetch: () => this.fetchData(),
      })
    ) : (
      <div>Loading...</div>
    );
  }
}

export default withRouter(DataSource);
