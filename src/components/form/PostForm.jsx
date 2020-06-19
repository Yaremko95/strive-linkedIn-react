import React from 'react'
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";


import Button from "../ui/button/Button";
import Form from "react-bootstrap/Form";

function PostForm(props) {
  const { data, validated } = props.state;
  const { setData, onSubmit ,getDelete} = props;
    return (
        <>
         <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <TextField
          required={true}
          type="text"
          placeholder="What do you want to talk about?"
          name="post-modal"
          id="post"
          onChange={(e) => setData({ text: e.target.value })}
      
        />
         <Button type={"submit"} variant={"filled"}>
            Post
          </Button>
          <Button type={"button"}  onClick={getDelete}>
            Delete
      </Button>
        </Form>
       
     </>
    )
}

export default PostForm
