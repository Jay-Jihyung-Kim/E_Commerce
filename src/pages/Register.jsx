import React from "react";
import Header from "../component/header/Header";
import Registration from "../component/signup/Registration";
import HelpNavigation from "./../component/footer/HelpNavigation";

const Register = () => {
  return (
    <div>
      <Header />
      <Registration />
      <HelpNavigation />
    </div>
  );
};

export default Register;
