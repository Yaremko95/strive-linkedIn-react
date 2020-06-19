import React, { Component } from "react";
import Auth from "../authorization/Auth";
class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || {},
      //image
      validated: false,
    };
    console.log("updateData", this.props);
  }

  onSubmit = async (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    const { endpoint, method, newFetch, closeModal } = this.props;

    let response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(this.state.data),
      headers: {
        Authorization: Auth.auth,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      closeModal();
      newFetch();
    } else {
      let error = await response.json();
      console.log(error);
    }
  };
  getDelete = async () => {
    const { endpoint, newFetch, closeModal } = this.props;
    let response = await fetch(endpoint, {
      method: "Delete",

      headers: {
        Authorization: Auth.auth,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      closeModal();
      newFetch();
    } else {
      let error = await response.json();
      console.log(error);
    }
  };

  render() {
    const { data } = this.state;
    return React.cloneElement(this.props.children, {
      state: this.state,
      //setImage
      setData: (state) => this.setState({ data: { ...data, ...state } }),
      onSubmit: (e) => this.onSubmit(e),
      getDelete: () => this.getDelete(),
      ...this.state,
    });
  }
}

export default UpdateData;
