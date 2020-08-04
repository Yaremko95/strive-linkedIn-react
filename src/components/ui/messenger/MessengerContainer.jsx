import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const connOpt = {
  transports: ["websocket"],
};
let socket = io(
  "https://striveschool-test.herokuapp.com/api/messages/user27",
  connOpt
);

function MessengerContainer(props) {
  const [payload, setPayload] = useState({
    username: "username27",
    messages: [],
  });

  useEffect(() => {}, [socket]);

  const setUsername = () => {
    socket.emit("setUsername", {
      username: "user27",
    });
  };

  return (
    <div>
      <button onClick={setUsername}>set</button>
    </div>
  );
}

export default MessengerContainer;
