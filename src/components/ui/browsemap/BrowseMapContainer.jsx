import React from "react";
import { createUseStyles } from "react-jss";
import BrowserMapMemberContainer from "./BrowserMapMemberContainer";
import { RiUserAddLine } from "react-icons/ri";
import BrowseButton from "./BrowseButton";
import BrowserMapMember from "./BrowserMapMember";
import Break from "../themantic-break/Break";
import { Col } from "react-bootstrap";

function BrowseMapContainer(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      marginTop: "24px",
      padding: "24px 12px 8px",
    },
    title: {
      fontSize: theme.text.size.t12,

      lineHeight: "1.5",
      color: "rgba(0,0,0,.9)",
      fontWeight: "400",
    },
    item: {
      listStyle: "none inside",
      marginTop: "16px",
    },
  }));
  const classes = useStyles();
  const { users } = props;

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>People also viewed</h2>
        {users.map((user) => (
          <div className={classes.item}>
            <BrowserMapMemberContainer>
              <BrowserMapMember user={user} />
              <BrowseButton>
                <RiUserAddLine />
              </BrowseButton>
            </BrowserMapMemberContainer>
            <div style={{ width: "calc(100% - 52px)", marginLeft: "auto" }}>
              <Break color={"rgba(0,0,0,.15)"} weight={"1px"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrowseMapContainer;
