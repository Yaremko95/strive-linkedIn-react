import React from "react";
import { Button, Form } from "react-bootstrap";
import InputLabel from "../ui/input/InputLabel";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import { RiDeleteBin6Line } from "react-icons/all";
import UploadFile from "../../data/UploadFile";

function EducationForm(props) {
  const { data, validated, id } = props.state;
  const { setData, onSubmit, getDelete, user } = props;
  console.log("THISPROPSSSSSSSSSS", props);
  return (
    <div style={{ padding: "0 20px" }}>
      <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <InputLabel>Name</InputLabel>
        <InputField
          reme="name"
          required={true}
          type="text"
          placeholder="Name"
          na="name"
          value={data.name}
          onChange={(e) => setData({ name: e.target.value })}
        />
        <InputLabel>Degree</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Degree"
          name="degree"
          id="degree"
          value={data.degree}
          onChange={(e) => setData({ degree: e.target.value })}
        />
        <div className={"d-flex justify-content-between"}>
          <div style={{ width: "49%" }}>
            <InputLabel>Start Date</InputLabel>
            <InputField
              required={true}
              type="date"
              placeholder="Start date"
              name="startDate"
              id="startDate"
              value={data.startDate}
              onChange={(e) => setData({ startDate: e.target.value })}
            />
          </div>
          <div style={{ width: "49%" }}>
            <InputLabel>End Date</InputLabel>
            <InputField
              required={true}
              type="date"
              placeholder="End date"
              name="endDate"
              id="endDate"
              value={data.endDate}
              onChange={(e) => setData({ endDate: e.target.value })}
            />
          </div>
        </div>

        <InputLabel>Image Url</InputLabel>
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
        ></div>
        <UploadFile
          {...props}
          type={"picture"}
          query={`profile/${user.username}/educations/${id}/picture`}
        >
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
                  Update
                </Button>
              </div>
            </div>
          )}
        </UploadFile>
      </Form>
      <RiDeleteBin6Line type={"button"} onClick={getDelete} />
    </div>
  );
}

export default EducationForm;
