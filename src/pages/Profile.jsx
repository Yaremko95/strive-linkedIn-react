import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import DataSource from "../data/DataSource";
import ProfileContainer from "../components/ui/profile/ProfileContainer";
import composedAuthHOC from "../authorization/withAuth";
function Profile(props) {
  const { params } = props.match;
  const [query, setQuery] = React.useState("");
  useEffect(() => {
    setQuery(props.match.params.username);
  }, [params]);
  if (params) {
    console.log(params);
  }
  return (
    <DataSource query={params ? params.username : ""} {...props}>
      <ProfileContainer {...props} />
    </DataSource>
  );
}

export default composedAuthHOC(withRouter(Profile));
