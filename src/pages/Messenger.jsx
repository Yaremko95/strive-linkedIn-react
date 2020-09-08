import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomCard from "../components/ui/cards/CustomCard";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3006/";
const arr = [
  {
    _id: "e9dfaa60-f201-11ea-9188-435be9816fbb",
    from: "tetiana",
    to: "Solomon",
    date: "2020-09-08T18:34:22.087Z",
    text: "nsg to solomon",
  },
  {
    _id: "99a44470-f201-11ea-9188-435be9816fbb",
    from: "Solomon",
    to: "tetiana",
    date: "2020-09-08T18:32:07.480Z",
    text: "nsg to tetianas",
  },
  {
    _id: "99a44470-f201-11ea-9188-435be9816fbb",
    from: "tetiana",
    to: "marigona",
    date: "2020-09-08T18:32:07.480Z",
    text: "nsg to tetianas",
  },
];

function Messenger(props) {
  const socket = socketIOClient(ENDPOINT, {
    transports: ["websocket"],
    query:
      "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFhZGY3ZDQwMTM4OTAwMTc3NmZiYWYiLCJpYXQiOjE1OTk1OTAxMDEsImV4cCI6MTYwMDE5NDkwMX0.-CCztBpM7Yhxi3DA4gCPndF36m0oue5CdIs0km4a8P8",
  });
  useEffect(() => {
    // socket.emit("login");
    // socket.on("loggedIn", (data) => {
    //   console.log("loggedIn", data);
    // });
    // socket.on("history", (data) => {
    //   console.log("history", data);
    // });
    // socket.on("receiveMsg", (data) => {
    //   console.log("receiveMsg", data);
    // });
  }, [socket]);
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

export default Messenger;
