import React from "react";
import ContainerCard from "../cards/ContainerCard";
import { createUseStyles } from "react-jss";
import { Image} from "react-bootstrap";
import {Link} from "react-router-dom"
import CardTitle from "../titles/CardTitle";
import Break from "../themantic-break/Break";

function LeftRailNf(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      margin: "16px 0 16px 0",
      boxShadow: " 0 0 0 1px rgba(0,0,0,.15)",
    },
    imageTop: {
      backgroundColor: "rgb(198, 178, 115)",
      paddingTop: " 5px",
      height: "95px",
      width: "100%",
    },
    profileImage: {
      width: "50%",
      border: "3px solid white",
      top: "-40px",
      left: "50px",
      position: "relative",

      borderRadius: "50%",
      zIndex: "100",
    },
    details: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    view: {
      width: "100%",
      display: "flex",
      paddingLeft:"10px",
      paddingRight:"10px",
      justifyContent: "space-between",
      //alignItems: "center",
    },
  }));
  const classes = useStyles();
  const { user } = props;
  console.log(props);
  return (
    <div className={classes.container}>
      <Image
        className={classes.imageTop}
        src={"https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"}
      />
      <Image className={classes.profileImage} src={user.image} />
      <div className={classes.details}>
        <span>Welcome {user.name}</span>        
      </div>
      <div className={classes.details}>
      <small><Link>Update your profile</Link></small>
      </div>
      <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      <div className={classes.view}>
        <div><small>Who viewed your profile</small></div>
        <div> <small>28</small></div>    
      </div>
      <div className={classes.view}>
        <div><small>Connections</small></div>
        <div> <small>28</small></div>    
      </div>
      <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
      <div className={classes.details} size="small">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1zM5 12V3h6v9l-3-2z"></path>
      </svg>
      <div  ><small>Saved Items</small></div>
      </div>
    </div>
    
  );
}

export default LeftRailNf;
