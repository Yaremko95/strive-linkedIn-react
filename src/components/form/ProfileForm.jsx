import React from "react";
import Form from "react-bootstrap/Form";
import InputLabel from "../ui/input/InputLabel";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import Button from "../ui/button/Button";

function ProfileForm(props) {
  const { data, validated } = props.state;
  const { setData, onSubmit } = props;
  // "name": "Diego",
  //     "surname": "Banovaz",
  //     "email": "diego@strive.school",
  //     "bio": "SW ENG",
  //     "title": "COO @ Strive School",
  //     "area": "Berlin",
  //     "image": ..., //server generated on upload

  return (
    <div style={{ padding: "0 20px" }}>
      <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <InputLabel>Name</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={data.name}
          onChange={(e) => setData({ name: e.target.value })}
        />
        <InputLabel>Surname</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Surname"
          name="surname"
          id="surname"
          value={data.surname}
          onChange={(e) => setData({ surname: e.target.value })}
        />

        <InputLabel>BIO</InputLabel>
        <TextField
          required={true}
          type="text"
          placeholder="bio"
          name="bio"
          id="bio"
          value={data.bio}
          onChange={(e) => setData({ bio: e.target.value })}
        />
        <InputLabel>Title</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          value={data.title}
          onChange={(e) => setData({ title: e.target.value })}
        />
        <InputLabel>Area</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Area"
          name="area"
          id="area"
          value={data.area}
          onChange={(e) => setData({ area: e.target.value })}
        />
        <InputLabel>Image</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="ImageUrl"
          name="image"
          id="image"
          value={data.image}
          onChange={(e) => setData({ image: e.target.value })}
        />
        <div
          style={{
            width: "100%",
            padding: "30px 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type={"submit"} variant={"filled"}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProfileForm;
