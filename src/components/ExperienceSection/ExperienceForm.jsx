import React from "react";
import Form from "react-bootstrap/Form";
import InputField from "../ui/input/InputField";
import TextField from "../ui/input/TextField";
import InputLabel from "../ui/input/InputLabel";

function ExperienceForm(props) {
  const { data } = props.state;
  const { setData, onSubmit } = props;

  return (
    <div style={{ padding: "0 20px" }}>
      <InputLabel>Role</InputLabel>
      <InputField
        type="text"
        placeholder="Role"
        name="role"
        id="role"
        value={data.role}
        onChange={(e) => setData({ role: e.target.value })}
      />
      <InputLabel>Company</InputLabel>
      <InputField
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
        type="text"
        placeholder="Description"
        name="description"
        id="description"
        value={data.description}
        onChange={(e) => setData({ description: e.target.value })}
      />
      <InputLabel>Area</InputLabel>
      <InputField
        type="text"
        placeholder="Area"
        name="area"
        id="area"
        value={data.area}
        onChange={(e) => setData({ area: e.target.value })}
      />
    </div>
  );
}

export default ExperienceForm;
