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
    };
    this.url = "https://striveschool.herokuapp.com/api/profile/";
  }
  componentDidMount() {
    this.fetchData();
    this.fetchExperience();
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
