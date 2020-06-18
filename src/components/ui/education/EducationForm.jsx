import React from "react";
import Form from "react-bootstrap/Form";
import InputLabel from "../input/InputLabel";
import InputField from "../input/InputField";
import TextField from "../input/TextField";
import { Button } from "react-bootstrap";


function EducationForm(props) {
  //const { data, validated } = props.state;
  //const { setData, onSubmit } = props;

  return (
    <div style={{ padding: "0 20px" }}>
      <Form >
        <InputLabel>School</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="School"
          name="School"
          id="School"
          //value={data.School}
          //onChange={(e) => setData({ role: e.target.value })}
        />
        <InputLabel>Degree</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Degree"
          name="Degree"
          id="Degree"
          //value={data.company}
          //onChange={(e) => setData({ company: e.target.value })}
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
              //value={data.startDate}
              //onChange={(e) => setData({ startDate: e.target.value })}
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
              //value={data.endDate}
              //onChange={(e) => setData({ endDate: e.target.value })}
            />
          </div>
        </div>
        <InputLabel>Grade</InputLabel>
        <InputField
          required={true}
          type="text"
          placeholder="Grade"
          name="Grade"
          id="Grade"
          //value={data.company}
          //onChange={(e) => setData({ company: e.target.value })}
        />
        <InputLabel>Activities and Societies</InputLabel>
        <TextField
          required={true}
          type="text"
          placeholder=""
          name="Activities"
          id="Activities"
          //value={data.description}
          //onChange={(e) => setData({ description: e.target.value })}
        />
        <InputLabel>Description</InputLabel>
        <TextField
          required={true}
          type="text"
          placeholder=""
          name="Description"
          id="Description"
          //value={data.description}
          //onChange={(e) => setData({ description: e.target.value })}
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

export default EducationForm;
