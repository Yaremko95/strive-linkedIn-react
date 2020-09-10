import React from "react";
import { createUseStyles } from "react-jss";
import OnlineIcon from "./OnlineIcon";
import { connect } from "react-redux";
import messenger from "../../../store/messenger/reducer";

const ChatHeader = ({ user, activeUsers, toggleModal, show }) => {
  const useStyles = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0 8px",
      minHeight: "48px",
      position: "sticky",
      top: "0",
      width: "100%",
      background: "var(--cool-gray-80,#283e4a)",
      borderBottom: "1px solid rgba(0,0,0,.15)",
      borderRadius: "2px 2px 0 0",
      cursor: "pointer",
      zIndex: "2000",
    },
    details: {
      display: "flex",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginRight: "4px",
      padding: "4px 4px 4px 1px",
      position: "relative",
    },
    imgWrapper: {
      width: "32px",
      height: "32px",
      display: "flex",
      position: "relative",
      margin: " 0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      verticalAlign: "baseline",
      background: "transparent",
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
  return (
    <div className={classes.container} onClick={() => toggleModal(!show)}>
      <div className={classes.details}>
        <div className={classes.imgWrapper}>
          <img className={classes.image} src={user.image} />
          {activeUsers.includes(user.username) && <OnlineIcon />}
        </div>
      </div>
      <span style={{ color: "whitesmoke", fontWeight: "600" }}>
        {user.username}
      </span>
    </div>
  );
};

export default connect((state) => ({
  activeUsers: state.messenger.activeUsers,
  usersList: state.usersReducer.usersList,
}))(ChatHeader);
