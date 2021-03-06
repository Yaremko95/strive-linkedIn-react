import React, { useEffect, useState } from "react";
import CustomCard from "../cards/CustomCard";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import { appendMessage, setHistory } from "../../../store/messenger/actions";
import socket from "../../../authorization/socket";
function MessageField(props) {
  const useStyles = createUseStyles({
    container: {
      height: "60px",
      width: "288px",
      position: "sticky",
      bottom: "0",

      boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    },
    input: {
      outline: "none",
      "&:focus": {
        outline: "none",
      },
      width: "100%",
      height: "100%",

      borderRadius: "none",
      paddingLeft: "10px",
      paddingTop: "10px",

      fontSize: "15px",

      border: "none",

      "'&::placeholder':": {
        color: "rgb(136, 137, 140)",
      },
    },
  });

  const classes = useStyles();
  const [msg, setMsg] = useState("");
  const sendMsg = () => {
    socket.emit("sendMsg", { to: props.user.username, text: msg });
    props.appendMessage({
      to: props.user.username,
      text: msg,
      date: new Date(),
      from: props.authorizedUser.username,
    });
  };
  return (
    <div className={classes.container}>
      <textarea
        className={classes.input}
        value={msg}
        onChange={(e) => setMsg(e.currentTarget.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMsg()}
      />
    </div>
  );
}

export default connect(
  (state) => ({
    authorizedUser: state.usersReducer.authorizedUser,
    listOfChats: state.messenger.listOfChats,
  }),
  (dispatch) => ({
    setHistory: (data) => {
      dispatch(setHistory(data));
    },
    appendMessage: (data, targetUser) => {
      dispatch(appendMessage(data, targetUser));
    },
  })
)(MessageField);
