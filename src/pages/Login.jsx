import React from "react";
import Auth from "../data/Auth";
import LoginForm from "../components/form/LoginForm";

function Login(props) {
  return (
    <Auth>
      <LoginForm />
    </Auth>
  );
}

export default Login;
