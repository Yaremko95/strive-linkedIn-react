import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getHeader, getUserFromLocalStorage } from "../authorization/Auth";
import queryString from "query-string";
import { Base64 } from "js-base64";

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
      searchPostsQuery: "",
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
  getHeader = () => {
    const username = JSON.parse(localStorage.getItem("user")).username;
    const password = JSON.parse(localStorage.getItem("user")).password;
    const toBase64 = Base64.encode(`${username}:${password}`);
    console.log(toBase64);
    return "Basic " + toBase64;
  };

  fetchData = async () => {
    console.log("trigger", this.props);
    // this.setState({ loading: true });
    let { query } = this.props;
    console.log("query", query);
    if (!query) {
      this.fetchUser(getUserFromLocalStorage());
      this.fetchPost(query);
      this.fetchUsers();
      this.setState({ loading: false });
    } else {
      if (query === "me") {
        query = getUserFromLocalStorage();
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
        Authorization: getHeader(),
      },
    });
    let experience = await response.json();
    this.setState({ experience });
  };
  fetchPost = async () => {
    let response = await fetch(
      this.urlPost + "?username=" + this.state.searchPostsQuery,
      {
        headers: {
          Authorization: getHeader(),
        },
      }
    );
    let posts = await response.json();
    let rev = posts.reverse();
    this.setState({ posts: rev });
  };

  fetchUser = async (query) => {
    let response = await fetch(this.url + query, {
      headers: {
        Authorization: getHeader(),
      },
    });
    let user = await response.json();
    this.setState({ user });
    console.log(this.state.user);
  };
  fetchUsers = async () => {
    let response = await fetch(this.url, {
      headers: {
        Authorization: getHeader(),
      },
    });
    let users = await response.json();
    this.setState({ users: users.data });
    // console.log(this.state.users);
  };
  fetchEducations = async (query) => {
    let response = await fetch(this.url + query + "/educations", {
      headers: {
        Authorization: getHeader(),
      },
    });
    let educations = await response.json();
    this.setState({ educations });
  };

  downloadCV = async () => {
    let response = await fetch(this.url + this.state.user.username + "/pdf", {
      headers: {
        Authorization: getHeader(),
      },
    });
    let blob = await response.blob();
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", `${this.state.user.username}-cv.pdf`);
    document.body.appendChild(a);
    a.click();
  };

  downloadCSV = async (param) => {
    let response = await fetch(
      this.url + this.state.user.username + `/${param}/csv`,
      {
        method: "POST",
        headers: {
          Authorization: getHeader(),
        },
      }
    );
    let blob = await response.blob();
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.setAttribute(
      "download",
      `${this.state.user.username}-experiences_csv.csv`
    );
    document.body.appendChild(a);
    a.click();
  };

  render() {
    const {
      user,
      users,
      experience,
      posts,
      loading,
      educations,
      searchPostsQuery,
    } = this.state;
    return users && user ? (
      React.cloneElement(this.props.children, {
        users,
        user,
        experience,
        newFetch: () => this.fetchData(),
        onChangeSearchPosts: (value) =>
          this.setState({ searchPostsQuery: value }),
        downloadCV: (param) => this.downloadCV(param),
        downloadCSV: (param) => this.downloadCSV(param),
        posts,
        searchPostsQuery,
        loading,
        educations,
      })
    ) : (
      <div></div>
    );
  }
}

export default withRouter(DataSource);
