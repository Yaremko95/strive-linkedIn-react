import React from "react";
import { createUseStyles } from "react-jss";
import ChatHeader from "./ChatHeader";
import ChatModal from "./ChatModal";
import { connect } from "react-redux";
import {
  appendMessage,
  setHistory,
  updateActiveUsers,
} from "../../../store/messenger/actions";
import usersReducer from "../../../store/users/reducers";

import ConversationCard from "./ConversationCard";

function ChatHistoryWindow(props) {
  const { usersReducer, messenger } = props;
  console.log("usersReducer", usersReducer);
  return (
    <ChatModal user={usersReducer.authorizedUser}>
      {messenger.listOfChats.map((user, index) => {
        return <ConversationCard key={index} user={user} />;
      })}
    </ChatModal>
  );
}

export default connect(
  (state) => ({ ...state })
  // (dispatch) => ({
  //   setHistory: (data) => {
  //     dispatch(setHistory(data));
  //   },
  //   appendMessage: (data, targetUser) => {
  //     dispatch(appendMessage(data, targetUser));
  //   },
  //   updateActiveUsers: (data) => {
  //     dispatch(updateActiveUsers(data));
  //   },
  // })
)(ChatHistoryWindow);
