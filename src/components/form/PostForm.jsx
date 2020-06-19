import React from "react";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";

import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UploadFile from "../../data/UploadFile";

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
              <div>
                <Button onClick={() => handleInputClick()}>Choose Image</Button>
                {toBase64 && (
                  <>
                    {/*<Button onClick={() => handleUpload()}>Save</Button>*/}
                  </>
                )}{" "}
                <Button type={"submit"} variant={"filled"}>
                  Post
                </Button>
              </div>
            </div>
          )}
        </UploadFile>
      </Form>
      <Button type={"button"} onClick={getDelete}>
        Delete
      </Button>
    </>
  );
}

export default PostForm;
