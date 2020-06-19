import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import { MdAdd } from "react-icons/all";


//import IconButton from "../ui/button/IconButton";
import IconButton from '../button/IconButton'
//import ProfileImage from "../ui/profile-images/ProfileImage";
import ProfileImage from '../profile-images/ProfileImage'


function ContainerAdd(propr) {
  const useStyles = createUseStyles((theme, border) => ({
    container: {
      marginTop: "24px",
      padding: "24px 12px 8px",
      boxShadow: " 0 0 0 1px rgba(0,0,0,.15)",
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
    <>
      <Card.Header>Add to your feed</Card.Header>
      <Card.Body>
        <ProfileImage
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQGZnMyvy7PngQ/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=U5qeB_lV1PWXlJQgY7DpSb48tYse9Vr--jvXPboMdnw"
          }
          width={"56px"}
          height={"56px"}
        />
        <Button variant="primary">+ Follow</Button>{' '}
        <Card.Title> Tobia De Angelis
        {/* <IconButton>
            <MdAdd />
          </IconButton> */}
        </Card.Title>


        <Card.Text>
          Chief Executive Officer at Strive School
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
        <Button variant="primary">+ Follow</Button>{' '}
        <Card.Title> Stefano Casasola
        {/* <IconButton>
            <MdAdd />
          </IconButton> */}
        </Card.Title>
        <Card.Text>
          Founder & Software Developer @ Nucleode SRL - Tutor @ Strive School
      </Card.Text>
      </Card.Body>

    </>
  );





}

export default ContainerAdd