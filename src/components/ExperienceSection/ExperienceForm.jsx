import React from "react";
import Form from "react-bootstrap/Form";

function ExperienceForm(props) {
  const { data } = props.state;
  const { setData, onSubmit } = props;
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Control
        type="text"
        placeholder="Enter email"
        name="experience"
        id="experience"
        value={data.experience}
        onChange={(e) => setData({ text: e.target.value })}
        onKeyDown={(e) => {
          e.key === "Enter" && onSubmit();
        }}
      />
    </Form.Group>
  );
}

export default ExperienceForm;
