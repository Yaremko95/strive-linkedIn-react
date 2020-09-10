import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MessageCard(props) {
  const { msg } = props;
  const useStyles = createUseStyles({
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      boxSizing: "border-box",
      position: "relative",
      padding: "0",
      margin: "0",
      width: "100%",
    },
    link: {
      position: "absolute",
      left: "8px",
      zIndex: "1",
    },
    img: {
      width: "32px",
      height: "32px",
      boxSizing: "border-box",
      backgroundClip: "content-box",
      border: "3px solid transparent",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",

      verticalAlign: "baseline",
      background: "transparent",
    },
    name: {
      margin: "0",
      border: "0",
      fontSize: "100%",
      fontWeight: "600",
      verticalAlign: "baseline",
      background: "transparent",
      padding: "0 0 0 56px",
    },
    time: {
      fontSize: "0.9rem",
      lineHeight: "1.33333",
      fontWeight: "400",
      color: "rgba(0,0,0,0.4)",
      margin: "0",
      padding: "0",
      border: "0",
      marginLeft: "10px",
      background: "transparent",
      position: "absolute",
      top: "10px",
    },
    msgContainer: {
      margin: "-2px 12px 4px 0",
      marginLeft: "56px",
      color: "rgba(0,0,0,.9)",
      wordWrap: "break-word",
      whiteSpace: "pre-line",
      fontSize: "1rem",
    },
  });
  const classes = useStyles();
  const [user, setUser] = useState({});
  useEffect(() => {
    const res = props.usersList.find((user) => user.username === msg.from);
    setUser(res);
  }, []);
  return (
    <div className={classes.cardContainer}>
      <Link to={"/profile/" + msg.username} className={classes.link}>
        <img src={msg.image} className={classes.img} />
      </Link>

      <div className={classes.name}>
        {user.name + " " + user.surname}
        <span className={classes.time}>
          {new Date(msg.date).getHours() +
            ":" +
            new Date(msg.date).getMinutes()}
        </span>
      </div>

      <span className={classes.msgContainer}>{msg.text}</span>
    </div>
  );
}

export default connect((state) => ({
  usersList: state.usersReducer.usersList,
}))(MessageCard);
