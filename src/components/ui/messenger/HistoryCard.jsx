import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  appendMessage,
  setHistory,
  triggerModalOnMesgReceived,
  updateActiveUsers,
  updateWindows,
} from "../../../store/messenger/actions";
import MessageCard from "./MessageCard";
import ChatModal from "./ChatModal";

function HistoryCard(props) {
  const [history, setHistory] = useState(null);
  useEffect(() => {
    const fromProps = props.listOfChats.find(
      (chat) => chat.username === props.item.username
    );
    setHistory(fromProps);
  }, [props]);

  return history ? (
    history.history.map((msg) => <MessageCard msg={msg} />)
  ) : (
    <div></div>
  );
}

export default connect(
  (state) => ({ listOfChats: state.messenger.listOfChats })
  // (dispatch) => ({
  //     setHistory: (data) => {
  //         dispatch(setHistory(data));
  //     },
  //     appendMessage: (data, targetUser) => {
  //         dispatch(appendMessage(data, targetUser));
  //     },
  //     updateActiveUsers: (data) => {
  //         dispatch(updateActiveUsers(data));
  //     },
  //     updateWindows: (data) => {
  //         dispatch(updateWindows(data));
  //     },
  //     triggerModalOnMesgReceived: (data) => {
  //         dispatch(triggerModalOnMesgReceived(data));
  //     },
  //})
)(HistoryCard);
