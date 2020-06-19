import React from "react";

import { createUseStyles } from "react-jss";
import BrowserMapMemberContainer from "../browsemap/BrowserMapMemberContainer";

import ContainerCard from "../cards/ContainerCard";
import { Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrowserPostMember from "./BrowserPostMember";
import NavButton from "../navBar/NavButton";
import navMenu from "../../../constants/menu/navMenu";
import RemarksMenu from "./RemarksMenu";
import NFCardFooter from "./NFCardFooter";
import Break from "../themantic-break/Break";
import BrowserPostMemberDetail from "./BrowserPostMemberDetail";

function NFCard(props) {
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
  const { posts } = props;
  console.log("posts", posts);

  return (
    <>
      {posts.reverse().map((post) => (
        <ContainerCard background="white">
          <div className={classes.item}>
            <BrowserMapMemberContainer>
              <BrowserPostMember post={post} />
            </BrowserMapMemberContainer>

            {post.image !== "none" && (
              <Image src={post.image} style={{ width: "100%" }} />
            )}
            <span>{post.text}</span>

            {/* {post.user.image && (
                 
                  <Image style={{width:'100px'}}
                    src={post.user.image}
                    alt="..."
                    className="img-thumbnail"
                
                  />
                   
                )} */}

            {/*<Nav*/}
            {/*  className=" d-flex justify-content-between ml-auto"*/}
            {/*  className={classes.title.color}*/}
            {/*>*/}
            {/*  /!*{RemarksMenu.map((item) => (*!/*/}
            {/*  /!*  <Nav.Link as={Link} to={item.to} className={"py-0"}>*!/*/}
            {/*  /!*    <NavButton item={item} color={"black"} />*!/*/}
            {/*  /!*  </Nav.Link>*!/*/}
            {/*  /!*))}*!/*/}
            {/*  */}
            {/*</Nav>*/}
          </div>
          <Break color={"rgba(0,0,0,.6)"} weight={"400"} />
          <NFCardFooter {...props} postId={post._id} />
        </ContainerCard>
      ))}
    </>
  );
}

export default NFCard;
