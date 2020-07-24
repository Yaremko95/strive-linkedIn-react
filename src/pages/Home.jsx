import React from "react";
import RightRail from "../components/ui/RightRail";
import DataSource from "../data/DataSource";
import HomeContainer from "../components/ui/home/HomeContainer";

export default function Home(props) {
  console.log("trigger in home", props);
  return (
    <DataSource {...props}>
      <HomeContainer {...props} />
    </DataSource>
  );
}
