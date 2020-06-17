import React, { Component } from "react";

class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      validated: false,
    };
    console.log("updateData", this.props);
  }
  onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validated: true,
    });

    //     // https://striveschool.herokuapp.com/api/profile/ PUT profile
    //https://striveschool.herokuapp.com/api/profile/userName/experiences POST experience
    // https://striveschool.herokuapp.com/api/profile/userName/experiences/:expId PUT experience
    //https://striveschool.herokuapp.com/api/posts/ POST post
    // https://striveschool.herokuapp.com/api/posts/{postId} PUT post
    // //
    const { endpoint, method, newFetch, closeModal } = this.props;
    let response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(this.state.data),
      headers: {
        Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      closeModal();
      newFetch();
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
      onSubmit: (e) => this.onSubmit(e),
    });
  }
}

export default UpdateData;
