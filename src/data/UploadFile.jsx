import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Auth from "../authorization/Auth";

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      error: {},
      data: {},
    };
    this.ref = React.createRef();
    console.log(this.state);
  }

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
  handleUpload = async () => {
    const formData = new FormData();
    formData.append("profile", this.state.file);
    const response = await fetch(
      `https://striveschool.herokuapp.com/api/profile/user27/picture`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: Auth.auth,
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      alert("success");
      this.setState({ data });
    } else {
      let error = await response.json();
      this.setState({ error });
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
        <Button onClick={() => this.handleInputClick()}>Choose File</Button>
        <Button onClick={() => this.handleUpload()}>Upload</Button>
      </>
    );
  }
}

export default UploadFile;
