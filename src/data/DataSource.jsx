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
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.fetchData();
    }
  };

  fetchData = async () => {
    let { query } = this.props;
    console.log("query", query);
    if (!query) {
      this.fetchUser(Auth.user);
      this.fetchPost(query);
      // this.fetchUsers();
    } else {
      if (query === "me") {
        query = Auth.user;
      }

      this.fetchUsers();

      this.fetchUser(query);
      // this.fetchPost();
      this.fetchExperience(query);
    }
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
  fetchPost = async () => {
    let response = await fetch(this.urlPost, {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let posts = await response.json();
    this.setState({ posts });
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
    const { user, users, experience, posts } = this.state;
    return users && user ? (
      React.cloneElement(this.props.children, {
        users,
        user,
        experience,
        newFetch: () => this.fetchData(),
        posts,
      })
    ) : (
      <div>Loading...</div>
    );
  }
}

export default withRouter(DataSource);
