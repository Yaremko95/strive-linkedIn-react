import React from "react";
import { createUseStyles } from "react-jss";
import Image from "react-bootstrap/Image";

function ProfileImage({ src, width, height }) {
  const useStyles = createUseStyles({
    container: {
      width: width,
      height: height,
      border: "2px solid transparent",
      borderRadius: "49.9%",
      boxSizing: "border-box",
      backgroundClip: "content-box",
    },
  });
  const classes = useStyles();
  return <Image className={classes.container} src={src} />;
}

export default ProfileImage;
