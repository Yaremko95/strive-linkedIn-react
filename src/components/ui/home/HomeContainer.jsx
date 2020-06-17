import React from "react";
import DataSource from "../../../data/DataSource";

function HomeContainer(props) {
  console.log("Homepage", props);
  return (
    <div>
      {" "}
      <h1>{JSON.stringify(props.users)}</h1>
    </div>
  );
}

export default HomeContainer;
