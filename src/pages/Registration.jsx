import React from "react";
import Auth from "../data/Auth";
import RegisterForm from "../components/form/RegisterForm";

function Registration(props) {
  return (
    <Auth>
      <RegisterForm />
    </Auth>
  );
}

export default Registration;
