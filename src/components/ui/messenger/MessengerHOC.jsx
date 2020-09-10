import React, { cloneElement, useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import socketIOClient from "socket.io-client";
import Cookie from "js-cookie";

import composedAuthHOC from "../../../authorization/withAuth";
import { connect } from "react-redux";
import {
  appendMessage,
  setHistory,
  triggerModalOnMesgReceived,
  updateActiveUsers,
  updateWindows,
} from "../../../store/messenger/actions";

import Portal from "./Portal";
import { createUseStyles } from "react-jss";
import ChatHistoryWindow from "./ChatHistoryWindow";
import ChatModal from "./ChatModal";
import MessageCard from "./MessageCard";
import MessageField from "./MessageField";
import HistoryCard from "./HistoryCard";
import socket from "../../../authorization/socket";
const MessengerHOC = (props) => {
  const {
    setHistory,
    appendMessage,
    updateActiveUsers,
    triggerModalOnMesgReceived,
  } = props;
  // const socket = socketIOClient(process.env.REACT_APP_BE_URL_API, {
  //   transports: ["websocket"],
  //   query: `accessToken=${Cookie.get("accessToken")}`,
  //   reconnection: true, // whether to reconnect automatically
  //   reconnectionAttempts: 3,
  // });

  const { messenger } = props;
  // const openNewWindow = (user) => {
  //   if (windows.find((w) => w.username === user.username)) {
  //     addWindow(windows.filter((w) => w.username !== user.username));
  //   } else {
  //     addWindow([...windows, user]);
  //   }
  // };
  useEffect(() => {
    socket.on("connect", function () {
      console.log("Connected");
    });
    socket.on("loggedIn", (data) => {
      console.log("loggedIn", data);
      updateActiveUsers(data.users);
    });
    socket.on("leave", (data) => {
      console.log("leave", data);
      updateActiveUsers(data.users);
    });

    socket.on("receiveMsg", (data) => {
      console.log("receiveMsg", data);
      appendMessage(data, data.from);
      triggerModalOnMesgReceived(data);
    });
  }, [socket]);
  useEffect(() => {
    socket.on("history", (data) => {
      setHistory(data);
      console.log("history", data);
    });
    socket.emit("login");
  }, []);

  const transitions = useTransition(messenger.windows, (item) => item.key, {
    from: { transform: "translateY(-400px)" },
    enter: { transform: "translateY(0px)" },
    leave: (item) => async (next, cancel) => {
      await next({ transform: "translateY(-400px)" });
    },
  });
  // const [modal, toggleModal] = useState(false);
  // const toggle = () => {
  //   toggleModal(!modal);
  // };
  return (
    <>
      <Portal>
        <ChatHistoryWindow />
      </Portal>
      {/*{transitions.map(*/}
      {/*  ({ item, props, key }) =>*/}
      {/*    item && (*/}
      {/*      <animated.div key={key} style={props}>*/}
      {/*        <Portal>*/}
      {/*          <ChatModal offset={key + 1} user={item}></ChatModal>*/}
      {/*        </Portal>*/}
      {/*      </animated.div>*/}
      {/*    )*/}
      {/*)}*/}

      {messenger.windows.map((item, index) => (
        <Portal>
          <ChatModal
            offset={index + 1}
            user={item}

            // togglel={toggle}
          >
            {/*<HistoryCard item={item} modal={modal} />*/}
            {item.history.map((msg) => (
              <MessageCard msg={msg} />
            ))}
          </ChatModal>
        </Portal>
      ))}
    </>
  );
};

export default composedAuthHOC(
  connect(
    (state) => ({ ...state }),
    (dispatch) => ({
      setHistory: (data) => {
        dispatch(setHistory(data));
      },
      appendMessage: (data, targetUser) => {
        dispatch(appendMessage(data, targetUser));
      },
      updateActiveUsers: (data) => {
        dispatch(updateActiveUsers(data));
      },
      updateWindows: (data) => {
        dispatch(updateWindows(data));
      },
      triggerModalOnMesgReceived: (data) => {
        dispatch(triggerModalOnMesgReceived(data));
      },
    })
  )(MessengerHOC)
);
