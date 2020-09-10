import React, { Component, useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { fetchUsers, setUser } from "../store/users/actions";
import { setUser, fetchUsers } from "../store/users/actions";
import authAxios from "./authAxios";
import axios from "axios";
const withAuth = (Component) => (props) => {
  const { authorizedUser, setUser, fetchUsers } = props;
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect triggered", props);
    const authorize = async () => {
      const res = await authAxios.get(`/profile/me`, {
        withCredentials: true,
      });
      let user = {};
      if (!res) {
        const secondRes = await axios.get(`/profile/me`, {
          withCredentials: true,
        });

        if (secondRes.status !== 200) {
        } else {
          setUser(secondRes.data);
        }
      } else {
        if (res.status !== 200) {
        } else {
          setUser(res.data);
        }
      }
    };

    authorize();
    fetchUsers("profile");
    isLoading(false);
  }, []);
  return <Component {...props} />;
};

const composedAuthHOC = compose(
  connect(
    (state) => {
      console.log();
      return {
        authorizedUser: state.usersReducer.authorizedUser,
      };
    },
    (dispatch) => ({
      setUser: (data) => dispatch(setUser(data)),
      fetchUsers: (data) => dispatch(fetchUsers(data)),
    })
  ),
  withRouter,
  withAuth
);
export default composedAuthHOC;
