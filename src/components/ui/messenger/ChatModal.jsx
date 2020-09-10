import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import ChatHeader from "./ChatHeader";

import { useSpring, animated } from "react-spring";
import MessageField from "./MessageField";
function ChatModal(props) {
  const useStyles = createUseStyles({
    container: {
      height: "400px",
      width: "288px",
      position: "fixed",
      bottom: "0",
      right: props.offset ? `${302 * props.offset}px` : 0,
      margin: "0 10px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",

      display: "flex",
      flexDirection: "column",

      flex: "0 0 288px",
      minWidth: "0",
      background:
        "linear-gradient(to bottom,transparent 2px,var(--white,#fff) 2px)",
      borderRadius: "2px 2px 0 0",
      overflowY: "auto",
    },
  });
  const classes = useStyles();
  const [show, toggleModal] = useState(true);
  const { transform, opacity } = useSpring({
    from: { transform: "translateY(352px)" },
    to: {
      transform: `translateY(${show ? 0 : 352}px)`,
    },
  });

  return (
    <animated.div className={classes.container} style={{ transform, opacity }}>
      <ChatHeader user={props.user} show={show} toggleModal={toggleModal} />

      <div style={{ height: "290px", overflowY: "scroll" }}>
        {React.Children.map(props.children, (child) =>
          React.cloneElement(child, {})
        )}
      </div>
      {props.offset && (
        <MessageField
          user={props.user}
          // toggle={props.toggle}
        />
      )}
    </animated.div>
  );
}

export default ChatModal;
