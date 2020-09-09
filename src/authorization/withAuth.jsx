import React, { Component, useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../store/users/actions";
import authAxios from "./authAxios";
import axios from "axios";
const withAuth = (Component) => (props) => {
  const { authorizedUser, setUser } = props;
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect triggered", props);
    const authorize = async () => {
      const res = await authAxios.get(`/profile/me`, {
        withCredentials: true,
      });
      let user = {};
      console.log("hhhhhhhhh", props);
      if (!res) {
        const secondRes = await axios.get(`/profile/me`, {
          withCredentials: true,
        });
        console.log("hhhhhhhhh", props);
        if (secondRes.status !== 200) {
          console.log("hhhhhhhhh", props);
        } else {
          setUser(secondRes.data);
        }
      } else {
        if (res.status !== 200) {
          console.log("hhhhhhhhh", props);
        } else {
          setUser(res.data);
        }
      }
    };
    authorize();
    isLoading(false);
  }, []);
  return authorizedUser ? <Component {...props} /> : <div></div>;
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
    })
  ),
  withRouter,
  withAuth
);
export default composedAuthHOC;
