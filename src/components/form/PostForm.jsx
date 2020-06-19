import React from "react";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";

import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UploadFile from "../../data/UploadFile";
import { RiDeleteBin6Line } from "react-icons/all";

function PostForm(props) {
  const { data, validated, id } = props.state;
  const { setData, onSubmit, getDelete } = props;
  console.log("looking for id", props);
  return (
    <>
      <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <TextField
          required={true}
          type="text"
          placeholder="What do you want to talk about?"
          name="post-modal"
          id="post"
          value={data.text}
          onChange={(e) => setData({ text: e.target.value })}
        />
        <UploadFile {...props} type={"post"} query={`posts/${id}/`}>
          {({ handleInputClick, handleUpload, toBase64 }) => (
            <div
              className={
                "d-flex flex-column w-100 justify-content-center align-items-center"
              }
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "2rem",
                }}
              >
                <Button onClick={() => handleInputClick()}>Choose Image</Button>
                {toBase64 && (
                  <>
                    {/*<Button onClick={() => handleUpload()}>Save</Button>*/}
                  </>
                )}{" "}
                <Button style={{ marginLeft: "1rem" }} type={"submit"}>
                  Post
                </Button>
              </div>
            </div>
          )}
        </UploadFile>
      </Form>
      <RiDeleteBin6Line type={"button"} onClick={getDelete} />
    </>
  );
}

export default PostForm;
