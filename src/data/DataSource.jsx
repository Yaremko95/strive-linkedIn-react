import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getHeader, getUserFromLocalStorage } from "../authorization/Auth";
import queryString from "query-string";
import { Base64 } from "js-base64";
import authAxios from "../authorization/authAxios";
import axios from "axios";
import { compose } from "redux";
import { connect } from "react-redux";
import { setUser } from "../store/users/actions";

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
    this.url = `${process.env.REACT_APP_BE_URL_API}/profile/`;
    this.urlPost = `${process.env.REACT_APP_BE_URL_API}/posts/`;
  }

  componentDidMount() {
    if (!this.props.authorizedUser) {
      console.log("this.props.authorizedUser", this.props.authorizedUser);
      //this.props.history.push("/login");
    } else {
      this.fetchData();
    }
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      if (!this.props.authorizedUser) {
        // console.log("this.props.authorizedUser", this.props.authorizedUser);
        //this.props.history.push("/login");
      } else {
        this.fetchData();
      }
    }
  };
  // getHeader = () => {
  //   const username = JSON.parse(localStorage.getItem("user")).username;
  //   const password = JSON.parse(localStorage.getItem("user")).password;
  //   const toBase64 = Base64.encode(`${username}:${password}`);
  //   console.log(toBase64);
  //   return "Basic " + toBase64;
  // };

  fetchData = async () => {
    console.log("trigger", this.props);
    // this.setState({ loading: true });
    let { query } = this.props;
    console.log("query", query);
    if (!query) {
      this.fetchUser(this.props.authorizedUser.username);
      this.fetchPost(query);
      this.fetchUsers();
      this.setState({ loading: false });
    } else {
      if (query === "me") {
        query = this.props.authorizedUser.username;
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
    const res = await authAxios.get(`/profile/${query}/experiences`, {
      withCredentials: true,
    });
    let user = {};
    if (!res) {
      const secondRes = await axios.get(`/profile/${query}/experiences`, {
        withCredentials: true,
      });
      this.setState({ experience: secondRes.data });
    } else {
      this.setState({ experience: res.data });
    }
  };
  // let response = await fetch(this.url + query + "/experiences", {
  //   headers: {
  //     Authorization: getHeader(),
  //   },
  // });
  // let experience = await response.json();
  // this.setState({ experience });

  fetchPost = async () => {
    const res = await authAxios.get(
      `/post?name=${this.state.searchPostsQuery}`,
      {
        withCredentials: true,
      }
    );
    let user = {};
    if (!res) {
      const secondRes = await axios.get(
        `/post?name=${this.state.searchPostsQuery}`,
        {
          withCredentials: true,
        }
      );
      console.log("------------post", res);
      let rev = secondRes.data.data.reverse();
      this.setState({ posts: rev });
    } else {
      console.log("------------post", res);
      let rev = res.data.data.reverse();
      this.setState({ posts: rev });
    }
    // let response = await fetch(
    //   this.urlPost + "?name=" + this.state.searchPostsQuery,
    //   {
    //     headers: {
    //       Authorization: getHeader(),
    //     },
    //   }
    // );
    // let posts = await response.json();
  };

  fetchUser = async (query) => {
    const res = await authAxios.get(`/profile/${query}`, {
      withCredentials: true,
    });
    let user = {};
    if (!res) {
      const secondRes = await axios.get(`/profile/${query}/`, {
        withCredentials: true,
      });
      this.setState({ user: secondRes.data });
    } else {
      this.setState({ user: res.data });
    }
    // let response = await fetch(this.url + query, {
    //   headers: {
    //     Authorization: getHeader(),
    //   },
    // });
    // let user = await response.json();
    // this.setState({ user });
    // console.log(this.state.user);
  };
  fetchUsers = async () => {
    const res = await authAxios.get(`/profile/`, {
      withCredentials: true,
    });
    let user = {};
    if (!res) {
      const secondRes = await axios.get(`/profile/`, {
        withCredentials: true,
      });

      this.setState({ users: secondRes.data.data });
    } else {
      console.log("------------", res);
      this.setState({ users: res.data.data });
      // let response = await fetch(this.url, {
      //   headers: {
      //     Authorization: getHeader(),
      //   },
      // });
      // let users = await response.json();
      // this.setState({ users: users.data });
      // console.log(this.state.users);
    }
  };
  fetchEducations = async (query) => {
    const res = await authAxios.get(`/profile/${query}/educations`, {
      withCredentials: true,
    });
    let user = {};
    if (!res) {
      const secondRes = await axios.get(`/profile/${query}/educations`, {
        withCredentials: true,
      });
      this.setState({ educations: secondRes.data });
    } else {
      this.setState({ educations: res.data });
    }
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

export default compose(
  withRouter,
  connect(
    (state) => ({ authorizedUser: state.usersReducer.authorizedUser }),
    (dispatch) => ({
      setUser: (data) => {
        dispatch(setUser(data));
      },
    })
  )
)(DataSource);
