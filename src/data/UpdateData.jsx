import React, { Component } from "react";

class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  onSubmit = async () => {
    alert("method works");
    //     // https://striveschool.herokuapp.com/api/profile/ PUT profile
    //https://striveschool.herokuapp.com/api/profile/userName/experiences POST experience
    // https://striveschool.herokuapp.com/api/profile/userName/experiences/:expId PUT experience
    //https://striveschool.herokuapp.com/api/posts/ POST post
    // https://striveschool.herokuapp.com/api/posts/{postId} PUT post
    //
    const { endpoint, method, newFetch } = this.props;
    let response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(this.state.data),
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      //newFetch();
      alert("works");
    } else {
      let error = await response.json();
      console.log(error);
    }
  };

  render() {
    console.log(this.state);
    const { data } = this.state;
    return React.cloneElement(this.props.children, {
      state: this.state,
      setData: (state) => this.setState({ data: { ...data, ...state } }),
      onSubmit: () => this.onSubmit(),
    });
  }
}

export default UpdateData;
