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
  }));
  const [showInput, setShowInput] = React.useState(false);

  const triggerInput = () => {
    setShowInput(true);
  };
  const classes = useStyles();
  const { postId } = props;
  return (
    <>
      <div className={classes.container}>
        <AiOutlineLike className={classes.icon} />

        <MdComment className={classes.icon} onClick={() => triggerInput()} />

        <FcShare className={classes.icon} />
      </div>

      <div className={classes.input}>
        <AddComment postId={postId}>
          {({ onChange, onSubmit, comment, comments }) => (
            <>
              {comments.map((comment) => (
                <p>{comment.comment}</p>
              ))}
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
