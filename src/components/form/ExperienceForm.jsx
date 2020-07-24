import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";
import UploadFile from "../../data/UploadFile";
import ModalCustom from "../ui/modals/ModalCustom";
import { RiDeleteBin6Line } from "react-icons/all";
// import Button from "../ui/button/Button";
import { getUserFromLocalStorage } from "../../authorization/Auth";
import "../../authorization/Auth";

function ExperienceForm(props) {
  const { data, validated, id } = props.state;
  const { setData, onSubmit, getDelete, user } = props;
  console.log("THISPROPSSSSSSSSSS", props);
  return (
    <div style={{ padding: "0 20px" }}>
      <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <InputLabel>Role</InputLabel>
        <InputField
          reme="role"
          required={true}
          type="text"
          placeholder="Role"
          na="role"
          value={data.role}
          onChange={(e) => setData({ role: e.target.value })}
        />
        <InputLabel>Company</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Company"
          name="company"
          id="company"
          value={data.company}
          onChange={(e) => setData({ company: e.target.value })}
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
        <InputLabel>Description</InputLabel>
        <TextField
          required={true}
          type="text"
          placeholder="Description"
          name="description"
          id="description"
          value={data.description}
          onChange={(e) => setData({ description: e.target.value })}
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
        <InputLabel>Area</InputLabel>
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
          <UploadFile
            {...props}
            type={"picture"}
            query={`profile/${user.username}/experiences/${id}/picture`}
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
                  <Button onClick={() => handleInputClick()}>
                    Choose Image
                  </Button>
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
          {/*<Button type={"submit"}>Submit</Button>*/}
        </div>
      </Form>
      <RiDeleteBin6Line type={"button"} onClick={getDelete} />
    </div>
  );
}

export default ExperienceForm;
