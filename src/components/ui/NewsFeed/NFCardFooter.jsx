import React from "react";
import { createUseStyles } from "react-jss";
import { AiOutlineLike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FcShare } from "react-icons/fc";
import IconButton from "../button/IconButton";
import InputField from "../input/InputField";
import Form from "react-bootstrap/Form";
import AddComment from "../../../data/AddComment";
import Button from "react-bootstrap/Button";
import ProfileImage from "../profile-images/ProfileImage";

function NFCardFooter(props) {
  const useStyles = createUseStyles((theme) => ({
    container: {
      width: "30%",
      display: "flex",
      justifyContent: "space-between",
    },
    icon: {
      color: theme.text.color.dark,
      fontSize: "1.2rem",
      cursor: "pointer",
    },
    input: {
      transition: "0.3s",
      marginTop: "10px",
      borderRadius: "40px",
    },
    commentContainer: {
      display: "flex",
      justifyContent: "start",
      paddingLeft: "16px",
    },
    comment: {
      position: "relative",
      overflow: "hidden",
      fontSize: "0.8rem",
      fontWeight: "400",
      color: "rgba(0,0,0,.7)",
      paddingBottom: "0",
      marginLeft: "16px",
      display: "flex",
      flexDirection: "column",
    },
  }));
  const [showInput, setShowInput] = React.useState(false);

  const triggerInput = () => {
    setShowInput(true);
  };
  const classes = useStyles();
  const { postId, users } = props;
  return (
    <>
      <div className={classes.container}>
        <AiOutlineLike className={classes.icon} />

        <MdComment className={classes.icon} onClick={() => triggerInput()} />

        <FcShare className={classes.icon} />
      </div>

      <div className={classes.input}>
        <AddComment {...props} postId={postId}>
          {({ onChange, onSubmit, comment, comments }) => (
            <>
              {comments.map((comment) => {
                let user = users.find(
                  (user) => user.username == comment.author
                );
                return (
                  <div key={comment._id} className={classes.commentContainer}>
                    <ProfileImage
                      src={user.image}
                      height={"30px"}
                      width={"30px"}
                    />
                    <div className={classes.comment}>
                      <span style={{ fontWeight: "600" }}>
                        {user.name} {user.surname}
                      </span>
                      <span>{comment.comment}</span>
                    </div>
                  </div>
                );
              })}
              {showInput && (
                <>
                  <Form.Control
                    type="text"
                    placeholder="Add comment"
                    id={"comment"}
                    value={comment.comment}
                    onChange={(e) => onChange(e)}
                  />
                  <Button onClick={onSubmit}>Add Comment</Button>
                </>
              )}
            </>
          )}
        </AddComment>
      </div>
    </>
  );
}

export default NFCardFooter;

// {
//   label: "Like",
//       icon: AiOutlineLike,
//     to: "/",
// },
// {
//   label: "Comment",
//       to: "/",
//     icon: MdComment,
// },
// {
//   label: "Share",
//       icon: FcShare,
//     to: "/",
// },
