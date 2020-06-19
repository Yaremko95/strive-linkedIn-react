import React from "react";
import { Card, Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { MdAdd } from "react-icons/all";

//import IconButton from "../ui/button/IconButton";
import IconButton from "../button/IconButton";
//import ProfileImage from "../ui/profile-images/ProfileImage";
import ProfileImage from "../profile-images/ProfileImage";
import ContainerCard from "../cards/ContainerCard";

function ContainerAdd(propr) {
  const useStyles = createUseStyles((theme, border) => ({
    container: {
      boxShadow: " 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
      //border: "3px solid black"
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

  return (
    <div className={classes.container}>
      <Card.Header>Add to your feed</Card.Header>
      <Card.Body>
        <ProfileImage
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQGZnMyvy7PngQ/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=U5qeB_lV1PWXlJQgY7DpSb48tYse9Vr--jvXPboMdnw"
          }
          width={"56px"}
          height={"56px"}
        />
        <Button className={"ml-4"} variant="primary">
          + Follow
        </Button>{" "}
        <Card.Title>
          {" "}
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "rgba(0,0,0,.7)",
              paddingBottom: "0",
            }}
          >
            Tobia De Angelis
          </span>
          {/* <IconButton>
            <MdAdd />
          </Icon Button> */}
        </Card.Title>
        <Card.Text>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "rgba(0,0,0,.7)",
              paddingBottom: "0",
            }}
          >
            Chief Executive Officer at Strive School
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <ProfileImage
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQHxDAmpuVueCg/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=sFVJMjSxXFwB-WhcP8Zqnm9YLcC0UttOh4hc5YZw8IM"
          }
          width={"56px"}
          height={"56px"}
        />
        <Button className={"ml-4"} variant="primary">
          + Follow
        </Button>{" "}
        <Card.Title>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "rgba(0,0,0,.7)",
              paddingBottom: "0",
            }}
          >
            Stefano Casasola
          </span>

          {/* <IconButton>
            <MdAdd />
          </IconButton> */}
        </Card.Title>
        <Card.Text>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "rgba(0,0,0,.7)",
              paddingBottom: "0",
            }}
          >
            Founder & Software Developer @ Nucleode SRL - Tutor @ Strive School
          </span>
        </Card.Text>
      </Card.Body>
    </div>
  );
}

export default ContainerAdd;
