import React from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import { updateWindows } from "../../../store/messenger/actions";
import OnlineIcon from "./OnlineIcon";

const ConversationCard = ({ user, updateWindows, messenger }) => {
  const useStyles = createUseStyles({
    imgWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      border: "1px solid black",
      margin: "5px 0",
    },
    img: {
      width: "32px",
      height: "32px",
      boxSizing: "border-box",
      backgroundClip: "content-box",
      border: " 3px solid transparent",
      borderRadius: "49.9%",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      fontSize: "100%",
      verticalAlign: "baseline",
      background: "transparent",
    },
  });
  const classes = useStyles();
  console.log("{props.user[Object.keys(props.user)[0]]}");
  return (
    <div onClick={() => updateWindows(user)}>
      <div className={classes.imgWrapper}>
        <img className={classes.img} src={user.image} />
        {user.username}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    updateWindows: (data) => {
      dispatch(updateWindows(data));
    },
  })
)(ConversationCard);
