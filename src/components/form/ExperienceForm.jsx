import React from "react";
import Form from "react-bootstrap/Form";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";
import Button from "../ui/button/Button";

function ExperienceForm(props) {
  const { data, validated } = props.state;
  const { setData, onSubmit ,getDelete} = props;
console.log('THISPROPSSSSSSSSSS',props)
  return (
    <div style={{ padding: "0 20px" }}>
      <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
        <InputLabel>Role</InputLabel>
        <InputField
          reme="role"
          idquired={true}
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
   
          <Button type={"submit"} variant={"filled"}>
            Submit
          </Button>
     
        </div>
      </Form>
           <Button type={"button"}  onClick={getDelete}>
            Delete
      </Button>
    
    </div>
  );
}

export default ExperienceForm;
