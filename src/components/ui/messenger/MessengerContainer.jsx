import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
class MessengerContainer extends React.Component {
  socket = null;

  state = {
    username: null,
    message: "",
    messages: [],
    showModal: true,
    recipient: "",
    list: [],
  };

  componentDidMount() {
    const connOpt = {
      transports: ["websocket"],
    };

    this.socket = io("https://striveschool.herokuapp.com/", connOpt);

    this.socket.on("chatmessage", (msg) => {
      {
        console.log("onmessage", msg);
        this.setState({
          messages: this.state.messages.concat({
            from: msg.from,
            text: msg.msg,
          }),
        });
      }
    });

    this.socket.on("bmsg", (msg) => {
      {
        console.log("bmsg", msg);
        this.setState({
          messages: this.state.messages.concat({
            from: msg.user,
            text: msg.message,
          }),
        });
      }
    });

    this.socket.on("list", (list) => {
      console.log("list", list);
      this.setState({ list: list, recipient: list[0] });
    });
  }

  handleMessage = (e) => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  sendMessage = (e) => {
    e.preventDefault();
    if (this.state.message !== "") {
      if (this.state.recipient !== "") {
        this.socket.emit("chatmessage", {
          text: this.state.message,
          to: this.state.recipient,
        });
        this.setState({
          messages: this.state.messages.concat({
            from: this.state.username,
            text: this.state.message,
          }),
        });
      } else {
        this.socket.emit("bmsg", {
          user: this.state.username,
          message: this.state.message,
        });
      }

      this.setState({
        message: "",
      });
    }
  };

  sendUser = () => {
    this.socket.emit("setUsername", {
      username: this.state.username,
    });

    fetch(
      "https://striveschool-test.herokuapp.com/api/messages/" +
        this.state.username
    )
      .then((resp) => resp.json())
      .then((data) => {
        {
          console.log(data);
          this.setState({ messages: data });
        }
      });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <>
        <div className="App">
          {this.state.username !== null && !this.state.showModal && (
            <>
              <h2>Messages:</h2>
              <ul id="messages" style={{ listStyle: "none" }}>
                {this.state.messages.map((msg, i) => (
                  <li key={i}>
                    <strong>{msg.from}</strong> {msg.text}
                  </li>
                ))}
              </ul>
            </>
          )}
          {this.state.list.length >= 0 ? (
            <div className="d-flex justify-content-center my-3">
              <select
                onChange={(e) =>
                  e.currentTarget.value === "all"
                    ? this.setState({ recipient: "" })
                    : this.setState({ recipient: e.currentTarget.value })
                }
              >
                {this.state.list.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
                <option value={"all"}>Send to all</option>
              </select>
              <form id="chat" onSubmit={this.sendMessage}>
                <input
                  autoComplete="off"
                  value={this.state.message}
                  onChange={this.handleMessage}
                />
                <button type="submit">Send</button>
              </form>
            </div>
          ) : this.state.username !== null && !this.state.showModal ? (
            <p>Waiting for more users to enter the room...</p>
          ) : null}
        </div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showModal}
          onHide={this.toggleModal}
        >
          <Modal.Header>
            <Modal.Title>Set username</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                onChange={(e) =>
                  this.setState({ username: e.currentTarget.value })
                }
              ></FormControl>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.sendUser}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MessengerContainer;
