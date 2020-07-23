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
      educations: [],
      loading: false,
    };
    this.url = "https://agile-brushlands-83006.herokuapp.com/profile/";
    this.urlPost = "https://agile-brushlands-83006.herokuapp.com/posts/";
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
    // this.setState({ loading: true });
    let { query } = this.props;
    console.log("query", query);
    if (!query) {
      this.fetchUser(Auth.user);
      this.fetchPost(query);
      this.fetchUsers();
      this.setState({ loading: false });
    } else {
      if (query === "me") {
        query = Auth.user;
      }

      this.fetchUsers();
      // this.fetchPost(query);
      this.fetchUser(query);
      // this.fetchPost();
      this.fetchExperience(query);
      // this.setState({ loading: false });
      this.fetchEducations(query);
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
    this.setState({ users: users.data });
    // console.log(this.state.users);
  };
  fetchEducations = async (query) => {
    let response = await fetch(this.url + query + "/educations", {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let educations = await response.json();
    this.setState({ educations });
  };

  render() {
    const { user, users, experience, posts, loading, educations } = this.state;
    return users && user ? (
      React.cloneElement(this.props.children, {
        users,
        user,
        experience,
        newFetch: () => this.fetchData(),
        posts,
        loading,
        educations,
      })
    ) : (
      <div></div>
    );
  }
}

export default withRouter(DataSource);
