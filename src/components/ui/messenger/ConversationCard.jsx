import React from "react";
import { connect } from "react-redux";
import { updateWindows } from "../../../store/messenger/actions";

const ConversationCard = ({ user, updateWindows }) => {
  console.log("{props.user[Object.keys(props.user)[0]]}");
  return <div onClick={() => updateWindows(user)}>{user.username}</div>;
};

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    updateWindows: (data) => {
      dispatch(updateWindows(data));
    },
  })
)(ConversationCard);
