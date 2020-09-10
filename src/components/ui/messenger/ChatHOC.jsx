import React from "react";

function ChatHoc(props) {
  console.log("chatHoc", props);
  return <div>{props.test}</div>;
}

export default ChatHoc;
