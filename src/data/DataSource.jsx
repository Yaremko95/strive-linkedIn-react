import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
    this.urlPost = "https://striveschool.herokuapp.com/api/posts/"
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
    const { query } = this.props;
    if (query !== "all") {
      this.fetchUser(query);
      this.fetchExperience(query);
      this.fetchPost(query);
    }
    this.fetchUsers();
  };

  fetchExperience = async (query) => {
    let response = await fetch(this.url + query + "/experiences", {
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
      },
    });
    let experience = await response.json();
    this.setState({ experience });
    console.log("console", experience);
  };

  fetchUser = async (query) => {
    let response = await fetch(this.url + query, {
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
      },
    });
    let user = await response.json();
    this.setState({ user });
    console.log(this.state.user);
  };
  fetchUsers = async () => {
    let response = await fetch(this.url, {
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
      },
    });
    let users = await response.json();
    this.setState({ users });
    // console.log(this.state.users);
  };

  fetchPost = async () => {
    let response = await fetch(this.urlPost, {
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
      },
    });
    let posts = await response.json();
    this.setState({ posts });
    // console.log(this.state.users);
  };
  // fetchExperience=async()=>{
  //   let response = await fetch('https://striveschool.herokuapp.com/api/profile/user20/experiences', {
  //     headers: {
  //       Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
  //     },
  //   });
  //   let experience = await response.json();
  //   console.log('experience for user20',experience)
  //   this.setState({ experience });
  // }
  render() {
    const { user, users, experience, posts } = this.state;
    return users ? (
      React.cloneElement(this.props.children, { users, user, experience, posts })
    ) : (
      <div>Loading...</div>
    );
  }
}

export default withRouter(DataSource);