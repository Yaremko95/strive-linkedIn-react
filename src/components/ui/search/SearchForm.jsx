import React, { useEffect, useState, Component } from "react";
import { createUseStyles } from "react-jss";
import { GoSearch } from "react-icons/go";
import Auth from "../../../authorization/Auth";
import { withRouter, useParams, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { ListGroup } from "react-bootstrap";

const input = {
  height: "30px",
  width: "250px",
  border: "none",
  borderRadius: "2px",
  padding: "0 10px",
  position: "relative",
};
const prepend = {
  position: "relative",
  left: "-25px",
  fontSize: "1.2rem",
  padding: "0 10px",
};
const suggestionStyle = {
  position: "absolute",
  zIndex: "3",
};

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      users: [],
      suggestions: [],
    };
  }
  LG = document.querySelector("#LG");
  url = "https://agile-brushlands-83006.herokuapp.com/profile/";
  componentDidMount = async () => {
    let response = await fetch(this.url, {
      headers: {
        Authorization: Auth.auth,
      },
    });
    let users = await response.json();
    this.setState({ users: users.data });
  };
  catchInput = (e) => {
    let inputsearch = e.currentTarget.value.toLowerCase();
    this.setState({ input: inputsearch });
    const filteredArray = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(inputsearch)
    );
    this.setState({ suggestions: filteredArray });
  };
  hideList = (suggestion) => {
    this.props.history.push("/profile/" + suggestion.username);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className={"d-flex"}>
        <div style={{ display: "block" }}>
          <div style={{ display: "flex" }}>
            <input onChange={this.catchInput} />
          </div>

          <ListGroup id="LG" style={suggestionStyle}>
            {
              this.state.input &&
                this.state.suggestions.map((suggestion) => (
                  <ListGroup.Item
                    onClick={() => this.hideList(suggestion)}
                    style={{ width: "206px" }}
                  >
                    {suggestion.name}
                  </ListGroup.Item>
                ))

              // <Link to={'/profile/'+suggestion.username}  >
            }
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchForm);
