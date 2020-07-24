import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getUserFromLocalStorage, getHeader } from "../authorization/Auth";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      error: {},
      data: {},
    };
    this.ref = React.createRef();
    console.log("upload", this.state);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.query !== this.props.query) {
      alert("props.changed");
      this.handleUpload();
    }
  };

  encodeImageFileAsURL = (element) => {
    const { files } = element.target;
    let file = files[0];
    console.log("base64", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const toBase64 = reader.result;
      console.log("base64", toBase64);
      this.setState({ file, toBase64 });
    };
  };
  handleInputClick = () => {
    this.ref.current.click();
  };
  handleUpload = async (e) => {
    const { type, query, newFetch, closeModal } = this.props;
    const formData = new FormData();
    formData.append(type, this.state.file);
    if (query) {
      const response = await fetch(
        `https://agile-brushlands-83006.herokuapp.com/${query}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: getHeader(),
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("for upload", data);

        const existing = JSON.parse(localStorage.getItem("user"));

        console.log("storage", this.props);
        if (existing) {
          existing.image = data.image;
        }
        console.log(JSON.stringify(existing));
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(existing));

        this.props.setTrigger(!this.props.triggerNav);
        // this.props.setavatar(data.image);
        closeModal();
        newFetch();
        this.setState({ data });
      } else {
        let error = await response.json();
        this.setState({ error });
      }
    }
  };

  render() {
    return (
      <>
        <input
          type={"file"}
          name={"file"}
          ref={this.ref}
          accept="image/*"
          hidden
          onChange={this.encodeImageFileAsURL}
        />
        {this.props.children({
          handleInputClick: () => this.handleInputClick(),
          handleUpload: (e) => this.handleUpload(e),
          ...this.state,
        })}
      </>
    );
  }
}

export default UploadFile;
