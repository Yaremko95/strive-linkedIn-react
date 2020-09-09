import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomCard from "../components/ui/cards/CustomCard";
import socketIOClient from "socket.io-client";
import { connect } from "react-redux";
import { setHistory, appendMessage } from "../store/messenger/actions";
const ENDPOINT = "http://localhost:3006/";

function Messenger(props) {
  const { setHistory, listOfChats, appendMessage } = props;
  const socket = socketIOClient(ENDPOINT, {
    transports: ["websocket"],
    query:
      "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFhZGY3ZDQwMTM4OTAwMTc3NmZiYWYiLCJpYXQiOjE1OTk1OTAxMDEsImV4cCI6MTYwMDE5NDkwMX0.-CCztBpM7Yhxi3DA4gCPndF36m0oue5CdIs0km4a8P8",
  });
  useEffect(() => {
    socket.emit("login");
    socket.on("loggedIn", (data) => {
      console.log("loggedIn", data);
    });

    socket.on("receiveMsg", (data) => {
      console.log("receiveMsg", data);
      appendMessage(data, data.from);
    });
  }, [socket]);
  useEffect(() => {
    socket.on("history", (data) => {
      setHistory(data);
      console.log("history", data);
    });
  }, []);
  return (
    <Row>
      <Col className={"col-9"}>
        <CustomCard>
          <h1>Messages</h1>
        </CustomCard>
      </Col>
      <Col className={"col-3"}>
        <CustomCard></CustomCard>
      </Col>
    </Row>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    setHistory: (data) => {
      dispatch(setHistory(data));
    },
    appendMessage: (data, targetUser) => {
      dispatch(appendMessage(data, targetUser));
    },
  })
)(Messenger);
