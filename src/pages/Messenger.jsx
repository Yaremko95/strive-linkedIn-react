import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomCard from "../components/ui/cards/CustomCard";
import socketIOClient from "socket.io-client";
import Cookie from "js-cookie";
import { connect } from "react-redux";
import {
  setHistory,
  appendMessage,
  updateActiveUsers,
} from "../store/messenger/actions";
import { compose } from "redux";
import { setUser } from "../store/users/actions";
import { withRouter } from "react-router-dom";
import withAuth from "../authorization/withAuth";
import composedAuthHOC from "../authorization/withAuth";
const ENDPOINT = process.env.REACT_APP_BE_URL_API;

function Messenger(props) {
  const { setHistory, listOfChats, appendMessage, updateActiveUsers } = props;
  console.log(ENDPOINT);
  const socket = socketIOClient(ENDPOINT, {
    transports: ["websocket"],
    query: `accessToken=${Cookie.get("accessToken")}`,
    reconnection: true, // whether to reconnect automatically
    reconnectionAttempts: 3,
  });
  socket.emit("login");
  useEffect(() => {
    socket.on("connect", function () {
      console.log("Connected");
    });
    socket.on("error", (reason) => {
      console.log(reason);
      socket.connect();
    });

    socket.on("loggedIn", (data) => {
      console.log("loggedIn", data);
      updateActiveUsers(data.users);
    });
    socket.on("leave", (data) => {
      console.log("leave", data);
      updateActiveUsers(data.users);
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

// const composedMessengerHOC = compose(
//   connect(
//     (state) => ({ listOfChats: state.listOfChats }),
//     (dispatch) => ({
//       setHistory: (data) => {
//         dispatch(setHistory(data));
//       },
//       appendMessage: (data, targetUser) => {
//         dispatch(appendMessage(data, targetUser));
//       },
//       updateActiveUsers: (data) => {
//         dispatch(updateActiveUsers(data));
//       },
//     })
//   ),
//   composedAuthHOC,
//   Messenger
// );
// export default composedMessengerHOC;
export default composedAuthHOC(
  connect(
    (state) => ({ listOfChats: state.listOfChats }),
    (dispatch) => ({
      setHistory: (data) => {
        dispatch(setHistory(data));
      },
      appendMessage: (data, targetUser) => {
        dispatch(appendMessage(data, targetUser));
      },
      updateActiveUsers: (data) => {
        dispatch(updateActiveUsers(data));
      },
    })
  )(Messenger)
);
