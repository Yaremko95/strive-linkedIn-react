import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const connOpt = {
  transports: ["websocket"],
};
let socket = io("https://striveschool.herokuapp.com/git ", connOpt);

function MessengerContainer(props) {
  const [payload, setPayload] = useState({
    username: "username27",
    messages: [],
  });
  console.log(payload);
  useEffect(() => {
    // socket.on("list", (msg) => console.log("%%%%%%%%%%%%%%%%%%%%%%%%5", msg));
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%5");

    socket.on("bmsg", (msg) =>
      setPayload({ ...payload, messages: [...payload, msg] })
    );
  }, [socket]);

  const setUsername = () => {
    socket.emit("chatmessage", {
      to: "user25",
      msg: "hello Solomon",
    });
  };

  return (
    <div>
      <button onClick={setUsername}>set</button>
    </div>
  );
}

export default MessengerContainer;
